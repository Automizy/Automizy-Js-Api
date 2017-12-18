define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var OptimonkForms = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded:false,
            parentName:'forms'
        };
        t.init();

        t.initParameter(obj || {});
    };

    var p = OptimonkForms.prototype;
    
    $AA.initBasicFunctions(OptimonkForms, "OptimonkForms2", {
        url:'v2/forms/optimonk',
        useBaseUrl:true
    });

});