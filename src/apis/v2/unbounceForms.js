define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var UnbounceForms = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded:false,
            parentName:'forms'
        };
        t.init();

        t.initParameter(obj || {});
    };

    var p = UnbounceForms.prototype;
    
    $AA.initBasicFunctions(UnbounceForms, "UnbounceForms2", {
        url:'v2/forms/unbounce',
        useBaseUrl:true
    });

});