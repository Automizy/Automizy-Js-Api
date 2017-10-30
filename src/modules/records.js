define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/token'
], function () {
    var Records = function (obj) {
        var t = this;
        t.d = {};
        t.d.xhr = false;
        t.d.hasRecords = {}
    };

    var p = Records.prototype;

    p.hasRecords = function(name){
        var t = this;
        if(typeof t.d.hasRecords[name] === 'undefined'){
            return true;
        }
        return t.d.hasRecords[name];
    };
    p.refresh = function(){
        var t = this;
        return $.ajax({
            url: $AA.recordsUrl(),
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        }).done(function(data){
            for(var i in data){
                t.d.hasRecords[i] = $AA.parseBoolean(data[i]);
            }
        });
    };
    p.refreshOne = function(name){
        var t = this;
        return $.ajax({
            url: $AA.recordsUrl(),
            type: 'GET',
            dataType: 'json',
            data:{
                fields:[name]
            },
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        }).done(function(data){
            for(var i in data){
                t.d.hasRecords[i] = $AA.parseBoolean(data[i]);
            }
        });
    };

    $AA.createUrl('records')('v2/resource-availability', true);
    $AA.m['Records'] = Records;
    /*
    $AA['records'] = function (obj) {
        var t = new Records(obj);
        return t;
    };
    */
    $AA['records'] = new Records();

});