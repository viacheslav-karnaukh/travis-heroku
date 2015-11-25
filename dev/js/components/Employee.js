(function(global) {
    'use strict';
    /**
     * @classdesc Generic employee entity.
     * @constructor
     */
    function Employee() {}
    /**
     * Get employee's salary
     * @method getSalary
     * @abstract
     * @return {Number}
     */
    Employee.prototype.getSalary = function() {
        throw new Error("You should define this method in the class before use.");
    };
    global.Employee = Employee;
})(this);