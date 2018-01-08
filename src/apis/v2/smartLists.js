define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var SmartLists = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded:false,
            parentName:'smartLists'
        };
        t.init();

        t.initParameter(obj || {});
    };

    var p = SmartLists.prototype;

    p.getContactsById = function(smartListId, limit, page, searchFor){
        var t = this;
        limit = limit || false;
        page = page || false;
        searchFor = searchFor || false;
        var data = {};
        if(limit !== false){
            data.limit = limit;
        }
        if(page !== false){
            data.page = page;
        }
        if(searchFor !== false){
            data.searchFor = searchFor;
        }
        return $.ajax({
            url: t.url() + '/'+smartListId+'/contacts',
            type: 'GET',
            dataType: 'json',
            data:data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };

    p.getPermanentlyRemovedCount = function(smartListId, contactIds, selectorType, searchFor, filter){
        var t = this;
        smartListId = smartListId || false;
        contactIds = contactIds || [];
        selectorType = selectorType || 'select';
        searchFor = searchFor || false;
        filter = filter || false;
        var data = {};
        if(smartListId === false){
            return false;
        }
        data.selector = {
            type:selectorType,
            selection:contactIds
        };
        if(searchFor !== false){
            data.searchFor = searchFor;
        }
        if(filter !== false){
            data.filter = filter;
        }
        return $.ajax({
            url: t.url() + '/'+smartListId+'/contacts/permanently-remove-count',
            type: 'POST',
            dataType: 'json',
            data:JSON.stringify(data),
            contentType:'application/json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };

    p.deleteContacts = function(smartListId, contactIds, selectorType, searchFor, filter){
        var t = this;
        smartListId = smartListId || false;
        contactIds = contactIds || [];
        selectorType = selectorType || 'select';
        searchFor = searchFor || false;
        filter = filter || false;
        var data = {};
        if(smartListId === false){
            return false;
        }
        data.selector = {
            type:selectorType,
            selection:contactIds
        };
        if(searchFor !== false){
            data.searchFor = searchFor;
        }
        if(filter !== false){
            data.filter = filter;
        }
        return $.ajax({
            url: t.url() + '/'+smartListId+'/contacts/remove',
            type: 'POST',
            dataType: 'json',
            data:JSON.stringify(data),
            contentType:'application/json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    /*
    p.deleteContact = function(smartListId, contactId, force){
        var t = this;
        smartListId = smartListId || false;
        contactId = contactId || false;
        force = force || false;
        if(smartListId === false || contactId === false){
            return false;
        }
        var data = {};
        data.force = force;
        return $.ajax({
            url: t.url() + '/'+smartListId+'/contacts/' + contactId,
            type: 'DELETE',
            data:data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    */
    
    $AA.initBasicFunctions(SmartLists, "SmartLists", {
        url:'v2/smart-lists',
        useBaseUrl:true
    });

});