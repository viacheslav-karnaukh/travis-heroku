(function(global) {
    'use strict';
    /**
     * @classdesc Employee with fixed salary.
     * @constructor
     * @augments Employee
     */
    function FixedSalaryEmployee(parameters) {
        this.salary = parameters.salary;
        this.name = parameters.name;
        this.id = parameters.id;
    }
    FixedSalaryEmployee.prototype = Object.create(Employee.prototype, {
        /**
         * Get employee's salary
         * @method getSalary
         * @override
         * @return {Number}
         */
        getSalary: {
            value: function() {
                return this.salary;
            }
        },
        constructor: {
            value: FixedSalaryEmployee
        }
    });
    global.FixedSalaryEmployee = FixedSalaryEmployee;
})(this);