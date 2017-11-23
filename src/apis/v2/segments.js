define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Segments = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded:false,
            parentName:'segments'
        };
        t.init();

        t.initParameter(obj || {});
    };

    var p = Segments.prototype;
    
    $AA.initBasicFunctions(Segments, "Segments2", {
        url:'v2/segments',
        useBaseUrl:true
    });

});