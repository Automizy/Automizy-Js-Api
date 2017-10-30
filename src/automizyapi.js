requirejs.config({
    waitSeconds: requirejs.s.contexts._.config.waitSeconds || 20,
    paths: {
        automizyApi: requirejs.s.contexts._.config.paths.automizyApi || requirejs.s.contexts._.config.paths.automizyJsApiDir || '../src'
    }
});
define([
    "automizyApi/core",
    "automizyApi/token",

    "automizyApi/apis/segments",
    "automizyApi/apis/campaigns",
    "automizyApi/apis/splitTests",
    "automizyApi/apis/newsletters",
    "automizyApi/apis/automationEmails",
    "automizyApi/apis/transactionalEmails",
    "automizyApi/apis/transactional",
    "automizyApi/apis/contacts",
    "automizyApi/apis/customFields",
    "automizyApi/apis/users",
    "automizyApi/apis/jobs",
    "automizyApi/apis/webhooks",
    "automizyApi/apis/templates",
    "automizyApi/apis/forms",
    "automizyApi/apis/automations",
    "automizyApi/apis/contactImports",
    "automizyApi/apis/tags",
    "automizyApi/apis/milestones",
    "automizyApi/apis/leadScores",
    "automizyApi/apis/contactTags",
    "automizyApi/apis/unbounceForms",
    "automizyApi/apis/autoDetectedForms",
    "automizyApi/apis/optimonkForms",
    "automizyApi/apis/invoices",
    "automizyApi/apis/contactsTagManager",
    "automizyApi/apis/localStorage",

    "automizyApi/apis/account",
    "automizyApi/apis/accountStatistics",
    "automizyApi/apis/clients",
    "automizyApi/apis/tokens",
    "automizyApi/apis/updates",
    "automizyApi/apis/plugins",


    "automizyApi/apis/v2/forms",
    "automizyApi/apis/v2/emails",
    "automizyApi/apis/v2/campaigns",
    "automizyApi/apis/v2/templates",
    "automizyApi/apis/v2/automations",
    "automizyApi/apis/v2/contactTags",
    "automizyApi/apis/v2/customFields",

    "automizyApi/functions/initBasicFunctions",
    "automizyApi/functions/parseBoolean",
    "automizyApi/functions/date",
    //"automizyApi/functions/store",
    "automizyApi/functions/cookie",
    "automizyApi/functions/refreshTable",
    "automizyApi/functions/exportTable",
    "automizyApi/functions/dataToOptions",
    "automizyApi/functions/convertToObj",
    "automizyApi/functions/urlManager",
    "automizyApi/functions/downloadContent",
    "automizyApi/functions/addEvent",
    "automizyApi/functions/runEvents",

    "automizyApi/modules/records"
], function () {
    $AA.createUrl('account')('account', true);
    //console.log('%c AutomizyJsApi module loaded! ', 'background: #000000; color: #bada55; font-size:14px');
});
