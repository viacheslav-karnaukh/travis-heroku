(function() {
    'use strict';
    var nodesForView = {
        textareaButton: $('#getDataArea'),
        inputForWebButton: $('#getDataWeb'),
        getInfoButton: $('#getInfo'),
        getTopNames: $('#getTop5'),
        topNamesInput: $('#topNames'),
        getLastIdsButton: $('#getLast3Ids'),
        lastIdsInput: $('#lastIds'),
        inputForWeb: $('#webSource'),
        textarea: $('textarea'),
        output: $('.output')
    };
    new EmployeesView(nodesForView).init(new EmployeesCollection());
})();