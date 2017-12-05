define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Automations = function (obj) {
        var t = this;
        t.d = {
            xhr:{},
            hasEmbedded:false,
            parentName:'automations'
        };
        t.init();
        t.d.xhr.getNodesById = false;
        t.d.xhr.acceptDraft = false;
        t.d.xhr.discardDraft = false;
        t.d.xhr.updateNodes = false;
        t.d.xhr.activate = false;
        t.d.xhr.inactivate = false;

        t.initParameter(obj || {});
    };


    var p = Automations.prototype;

    p.getNodesById = function(automationId){
        var t = this;
        t.d.xhr.getNodesById = $.ajax({
            url: $AA.automations2Url() + '/' + automationId + '/nodes',
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
        return t.d.xhr.getNodesById;
    };
    /*
    p.acceptDraft = function(automationId){
        var t = this;
        t.d.xhr.acceptDraft = $.ajax({
            url: $AA.automations2Url() + '/' + automationId + '/accept-draft',
            type: 'POST',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
        return t.d.xhr.acceptDraft;
    };
    */
    p.discardDraft = function(automationId){
        var t = this;
        t.d.xhr.discardDraft = $.ajax({
            url: $AA.automations2Url() + '/' + automationId + '/nodes',
            type: 'DELETE',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
        return t.d.xhr.discardDraft;
    };
    p.updateNodes = function(nodesJson, automationId){
        var t = this;
        t.d.xhr.updateNodes = $.ajax({
            url: $AA.automations2Url() + '/' + automationId + '/nodes',
            type: 'POST',
            dataType: 'json',
            data:{
                nodes:nodesJson
            },
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
        return t.d.xhr.updateNodes;
    };
    p.activate = function(automationId){
        var t = this;
        t.d.xhr.activate = $.ajax({
            url: $AA.automations2Url() + '/' + automationId + '/activate',
            type: 'POST',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
        return t.d.xhr.activate;
    };
    p.inactivate = function(automationId){
        var t = this;
        t.d.xhr.inactivate = $.ajax({
            url: $AA.automations2Url() + '/' + automationId + '/inactivate',
            type: 'POST',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
        return t.d.xhr.inactivate;
    };

    $AA.initBasicFunctions(Automations, "Automations2", {
        url:'v2/automations',
        useBaseUrl:true
    });

});