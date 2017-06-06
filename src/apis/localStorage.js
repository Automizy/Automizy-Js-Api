define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var LocalStorage = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded: false,
            defaultKey:'AUTOMIZY',
            defaultGroup:'DEFAULT'
        };
        t.init();

        t.initParameter(obj || {});
    };


    var p = LocalStorage.prototype;


    p.get = function () {
        var t = this;
        return t.getValuesByGroupAndKey(t.d.defaultGroup, t.d.defaultKey);
    };
    p.getAll = function () {
        var t = this;
        return $.ajax({
            url: t.url() + '/all',
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getValuesByGroup = function (group) {
        var t = this;
        return $.ajax({
            url: t.url() + '/' + group,
            type: 'GET',
            dataType: 'json',
            converters: {
                'text json': function (result) {
                    var res = $.parseJSON(result);
                    if(typeof res[group] === 'undefined'){
                        return null;
                    }
                    return res[group];
                }
            },
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getValuesByKey = function (key) {
        var t = this;
        return $.ajax({
            url: t.url() + '/all/' + key,
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getValuesByGroupAndKey = function (group, key) {
        var t = this;
        return $.ajax({
            url: t.url() + '/' + group + '/' + key,
            type: 'GET',
            dataType: 'json',
            converters: {
                'text json': function (result) {
                    var res = $.parseJSON(result);
                    if(typeof res[group] === 'undefined' || typeof res[group][key] === 'undefined'){
                        return null;
                    }
                    return res[group][key];
                }
            },
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.insert = function (value, key, group) {
        var t = this;

        if(typeof value === 'undefined' || value === null){
            return;
        }

        if(typeof value === 'array' || typeof value === 'object'){
            key = value.key || t.d.defaultKey;
            group = value.group || t.d.defaultGroup;
        }else{
            key = key || t.d.defaultKey;
            group = group || t.d.defaultGroup;
        }

        data = {
            'value':value
        };

        t.d.xhr.insert = $.ajax({
            url: t.url() + '/' + group + '/' + key,
            type: 'POST',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
        $AA.runEvents('insert', t, [t, 'localStorage']);
        return t.d.xhr.insert;
    };

    $AA.initBasicFunctions(LocalStorage, "LocalStorage", {
        url: 'local-store',
        useBaseUrl: true
    });

});