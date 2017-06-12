define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Forms = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded:false
        };
        t.init();

        t.initParameter(obj || {});
    };


    var p = Forms.prototype;


    p.getPageById = function(formId){
        var t = this;
        return $.ajax({
            url: $AA.forms2Url() + '/automizy/pages/'+formId,
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    
    $AA.initBasicFunctions(Forms, "Forms2", {
        url:'v2/forms',
        useBaseUrl:true
    });

});