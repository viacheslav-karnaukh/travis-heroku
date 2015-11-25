(function(global) {
    'use strict';
    /**
     * @classdesc Employee with hourly salary.
     * @constructor
     * @augments Employee
     */
    function HourlySalaryEmployee(parameters) {
        this.salary = parameters.salary;
        this.name = parameters.name;
        this.id = parameters.id;
    }
    HourlySalaryEmployee.prototype = Object.create(Employee.prototype, {
        /**
         * Get employee's salary
         * @method getSalary
         * @override
         * @return {Number} Salary counted by formula: salary per hour * 20.8 * 8
         */
        getSalary: {
            value: function() {
                return this.salary * 20.8 * 8;
            }
        },
        constructor: {
            value: HourlySalaryEmployee
        }
    });
    global.HourlySalaryEmployee = HourlySalaryEmployee;
})(this);