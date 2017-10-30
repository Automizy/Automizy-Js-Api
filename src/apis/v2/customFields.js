define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var CustomFields2 = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded:false,
            parentName:'customFields'
        };
        t.init();

        t.initParameter(obj || {});
    };

    var p = CustomFields2.prototype;
    
    $AA.initBasicFunctions(CustomFields2, "CustomFields2", {
        url:'v2/custom-fields',
        useBaseUrl:true
    });

});