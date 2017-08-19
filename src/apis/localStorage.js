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
            defaultKey: 'AUTOMIZY',
            defaultGroup: 'DEFAULT'
        };
        t.init();

        t.initParameter(obj || {});
    };


    var p = LocalStorage.prototype;

    p.get = function () {
        var t = this;

        if (arguments.length < 1) {
            return t.getAll();
        } else if (arguments.length === 1) {
            return t.getValuesByGroup(arguments[0]);
        }

        return t.getValuesByGroupAndKey(arguments[0], arguments[1]);

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
                    if (typeof res[group] === 'undefined') {
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
                    if (typeof res[group] === 'undefined' || typeof res[group][key] === 'undefined') {
                        return null;
                    }
                    return res[group][key];
                }
            },
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.insert = function () {
        var t = this;
        var url = '';
        var data = {};

        if (arguments.length < 1) {
            return;
        } else if (arguments.length === 1) {
            url = t.url() + '/' + t.d.defaultGroup + '/' + t.d.defaultKey;
            data = {
                value: arguments[0]
            }
        } else if (arguments.length === 2) {
            url = t.url() + '/' + arguments[0];
            data = {
                value: arguments[1]
            };
        } else {
            url = t.url() + '/' + arguments[0] + '/' + arguments[1];
            data = {
                value: arguments[2]
            }
        }

        t.d.xhr.insert = $.ajax({
            url: url,
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