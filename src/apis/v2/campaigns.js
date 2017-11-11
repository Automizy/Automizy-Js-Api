define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Campaigns = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded:false,
            parentName:'campaigns'
        };
        t.init();

        t.initParameter(obj || {});
    };


    var p = Campaigns.prototype;

    p.preview = function(recipients, id){
        var t = this;
        return $.ajax({
            url: t.url() + '/' + id + '/preview' + t.d.urlSuffix,
            type: 'POST',
            dataType: 'json',
            data: {
                recipients:recipients
            },
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.send = function(id){
        var t = this;
        return $.ajax({
            url: t.url() + '/' + id + '/send' + t.d.urlSuffix,
            type: 'POST',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.duplicate = function(id, type){
        var t = this;
        var deferred = $.Deferred();

        t.getRecordById(id).done(function(campaign){
            var xhr;
            var newCampaign = {
                attachments:campaign.attachments || null,
                code:campaign.code || {editor:'', html:''},
                embedImages:campaign.embedImages || false,
                name:campaign.name || '',
                notificationEmail:campaign.notificationEmail || null,
                reply:campaign.reply || {email:'help@automizy.com'},
                sender:campaign.sender || {email:'help@automizy.com', name:''},
                subject:campaign.subject || '',
                type:type || campaign.type || 'BULK'
            };
            if(newCampaign.type === 'AUTOMATION'){
                newCampaign.automation = {
                    id:campaign.automation.id || 0
                };
                xhr = $AA.automationCampaigns().insert(newCampaign).done(function(data){
                    $AA.xhr.campaigns2Modified = true;
                    $AA.xhr.campaigns2GetAfterFirstModified = true;
                    deferred.resolveWith(xhr, [data]);
                })
            }else{
                xhr = $AA.bulkCampaigns().insert(newCampaign).done(function(data){
                    $AA.xhr.campaigns2Modified = true;
                    $AA.xhr.campaigns2GetAfterFirstModified = true;
                    deferred.resolveWith(xhr, [data]);
                })
            }
        });

        return deferred;
    };
    p.getImages = function(id){
        var t = this;
        id = id || false;
        var url = t.url() + '/fileManager' + t.d.urlSuffix;
        if(id !== false){
            url = t.url() + '/' + id + '/fileManager' + t.d.urlSuffix;
        }
        return $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            data: {where: [['extension', 'in', ['png', 'jpg', 'jpeg', 'gif', 'bmp']]]},
            error: $AA.token().error()
        });
    };

    $AA.initBasicFunctions(Campaigns, "Campaigns2", {
        url:'v2/campaigns',
        useBaseUrl:true
    });

});