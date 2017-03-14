define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var OptimonkForms = function (obj) {
        var t = this;
        t.d = {
            parentName: 'optimonkForms'
        };
        t.init();

        t.initParameter(obj || {});
    };


    var p = OptimonkForms.prototype;

    
    $AA.initBasicFunctions(OptimonkForms, "OptimonkForms", {
        url:'forms/optimonk',
        useBaseUrl:true
    });

});