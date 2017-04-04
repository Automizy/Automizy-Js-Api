define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Tokens = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = Tokens.prototype;

    p.create = function(){
        var t = this;
        return $.ajax({
            url: t.url(),
            type: 'POST',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        });
    };
    p.delete = function(accessToken){
        var t = this;
        return $.ajax({
            url: t.url() + '/' + accessToken,
            type: 'DELETE',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        });
    };
    
    $AA.initBasicFunctions(Tokens, "Tokens", {
        url:'oauth/tokens',
        useBaseUrl:true
    });

});