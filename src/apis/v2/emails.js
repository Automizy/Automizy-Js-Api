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


    p.getFormEmailId = function(emailId){
        var t = this;
        return $.ajax({
            url: $AA.emailsUrl() + '/form/'+emailId,
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    
    $AA.initBasicFunctions(Emails, "Emails", {
        url:'v2/emails',
        useBaseUrl:true
    });

});