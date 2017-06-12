define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Emails = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded:false
        };
        t.init();

        t.initParameter(obj || {});
    };


    var p = Emails.prototype;

    
    $AA.initBasicFunctions(Emails, "Emails", {
        url:'v2/emails',
        useBaseUrl:true
    });

});