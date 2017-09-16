define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Templates = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded:false,
            parentName:'templates'
        };
        t.init();

        t.initParameter(obj || {});
    };

    var p = Templates.prototype;

    /*
    p.copy = function (id, data, done) {
        var t = this;
        var data = data || {};
        data.copyData = data.copyData || {};
        var done = done || function(){};
        return t.getRecordById(id).done(function(getData){
            var insertData = {
                name:data.name || ((data.copyData.prefix || '') + getData.name + (data.copyData.suffix || '')),
                editorCode:data.editorCode || getData.editorCode,
                htmlCode:data.htmlCode || getData.htmlCode,
                maxWidth:data.maxWidth || getData.maxWidth
            };
            return t.insert(insertData).done(function(localData){
                done.apply(t, [localData]);
            });
        });
    };
    */

    p.getGlobalTemplates = function () {
        var t = this;
        return $.ajax({
            url: $AA.baseUrl() + '/v2/emails/globalTemplates',
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getGlobalTemplateById = function (id) {
        var t = this;
        return $.ajax({
            url: $AA.baseUrl() + '/v2/emails/globalTemplates/'+id,
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };


    $AA.initBasicFunctions(Templates, "Templates2", {
        url:'v2/templates',
        useBaseUrl:true
    });

});