sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'frontend1',
            componentId: 'Interactions_ItemsList',
            contextPath: '/Interactions_Items'
        },
        CustomPageDefinitions
    );
});