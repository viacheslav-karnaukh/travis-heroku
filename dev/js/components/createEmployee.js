(function(global) {
    'use strict';
    /**
     * Namespace createEmployee for choosing relevant constructor.
     * @namespace
     */
    var createEmployee = {
        /**
         * createEmployee['FixedSalaryEmployee'] for FixedSalaryEmployee constructor.
         * @constructor
         */
        'FixedSalaryEmployee': FixedSalaryEmployee,
        /**
         * createEmployee['HourlySalaryEmployee'] for HourlySalaryEmployee constructor.
         * @constructor
         */
        'HourlySalaryEmployee': HourlySalaryEmployee
    };
    global.createEmployee = createEmployee;

})(this);