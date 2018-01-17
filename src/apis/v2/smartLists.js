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

    p.getContactById = function(smartListId, contactId){
        var t = this;
        var data = {};
        return $.ajax({
            url: t.url() + '/'+smartListId+'/contacts/' + contactId,
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

    p.addContact = function(smartListId, contactIdOrEmail){
        var t = this;
        smartListId = smartListId || false;
        contactIdOrEmail = contactIdOrEmail || false;
        if(smartListId === false || contactIdOrEmail === false){
            return false;
        }
        return $.ajax({
            url: t.url() + '/'+smartListId+'/contacts',
            type: 'POST',
            dataType: 'json',
            data:JSON.stringify({
                contacts:[contactIdOrEmail]
            }),
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

    p.getFilterContactsByCriteria = function(smartListId, criteria, limit, page){
        var t = this;
        var searchFor = criteria.searchFor || '';
        var searchOperator = criteria.searchOperator || 'CONTAINS';

        limit = limit || false;
        page = page || false;
        var urlData = {};
        if(limit !== false){
            urlData.limit = limit;
        }
        if(page !== false){
            urlData.page = page;
        }
        if(searchOperator !== 'CONTAINS' || (searchOperator === 'CONTAINS' && searchFor !== '')){
            urlData.searchFor = searchFor || '';
            urlData.searchOperator = searchOperator;
        }

        var urlParameters = '?' + $.param(urlData);

        return $.ajax({
            url: t.url() + '/'+smartListId+'/filters/calculate' + urlParameters,
            type: 'POST',
            dataType: 'json',
            data:JSON.stringify({
                criterion:criteria.criterion
            }),
            contentType:'application/json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };

    p.getFilterById = function(smartListId, filterId){
        var t = this;
        return $.ajax({
            url: t.url() + '/'+smartListId+'/filters/'+filterId,
            type: 'GET',
            contentType:'application/json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };

    p.getImportsById = function(smartListId){
        var t = this;
        return $.ajax({
            url: t.url() + '/'+smartListId+'/imports',
            type: 'GET',
            contentType:'application/json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };

    p.insertFilterByCriteria = function(smartListId, name, criteria){
        var t = this;
        return $.ajax({
            url: t.url() + '/'+smartListId+'/filters',
            type: 'POST',
            dataType: 'json',
            data:JSON.stringify({
                name:name,
                criterion:criteria.criterion
            }),
            contentType:'application/json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };

    p.updateFilterCriteria = function(smartListId, filterId, criteria){
        var t = this;
        return $.ajax({
            url: t.url() + '/'+smartListId+'/filters/'+filterId,
            type: 'PATCH',
            dataType: 'json',
            data:JSON.stringify({
                criterion:criteria.criterion
            }),
            contentType:'application/json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };

    p.updateFilterName = function(smartListId, filterId, name){
        var t = this;
        return $.ajax({
            url: t.url() + '/'+smartListId+'/filters/'+filterId,
            type: 'PATCH',
            dataType: 'json',
            data:JSON.stringify({
                name:name
            }),
            contentType:'application/json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    
    $AA.initBasicFunctions(SmartLists, "SmartLists", {
        url:'v2/smart-lists',
        useBaseUrl:true
    });

});