define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var AutomationCampaigns = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded:false,
            parentName:'campaigns'
        };
        t.init();

        t.initParameter(obj || {});
    };


    var p = AutomationCampaigns.prototype;

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
    p.duplicate = function(id){
        var t = this;

        return t;
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

    $AA.initBasicFunctions(AutomationCampaigns, "AutomationCampaigns", {
        url:'v2/campaigns/automation',
        useBaseUrl:true
    });

});