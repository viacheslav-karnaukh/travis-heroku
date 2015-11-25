(function(global) {
	'use strict';
	/**
	 * @classdesc Employee collection.
	 * @constructor
	 */
	function EmployeesCollection(employees) {
		/**
		 * A list of sorted employees @see [EmployeesCollection's _sort method]{@link EmployeesCollection#_sort}
		 * if argument provided, otherwise empty array will be assigned.
		 * @param {Array} [employees] - A list of employees.
		 * @prop {Array}
		 */
		if (arguments.length) {
			this.employees = this._sort(employees);
		} else {
			this.employees = [];
		}
	}
	/**
	 * Helper to sort by DESC avg salary and ASC alphabetically in case avg salaries are equal.
	 * @private
	 * @method _sort
	 * @param {Array} employees
	 * @return {Array}
	 */
	EmployeesCollection.prototype._sort = function(employees) {
		return employees.map(function(employee) {
			return new createEmployee[employee.type](employee);
		}).sort(function(a, b) {
			var x = a.name.toLowerCase();
			var y = b.name.toLowerCase();
			return (b.getSalary() - a.getSalary()) || (x < y ? -1 : x > y ? 1 : 0);
		});
	};
	/**
	 * Returns an employee's info
	 * @method getInfo
	 * @param {Object} employee
	 * @return {Object} Object with specified key/value pairs and counted salary depending on employee's type.
	 */
	EmployeesCollection.prototype.getInfo = function() {
		return this.employees.map(function(employee) {
			return {
				id: employee.id,
				name: employee.name,
				salary: employee.getSalary()
			};
		});
	};
	/**
	 * Returns a list of employees' names with top salaries.
	 * @method getTopNames
	 * @param {Number}
	 * @return {Array}
	 */
	EmployeesCollection.prototype.getTopNames = function(quantity) {
		return this.employees.slice(0, quantity).map(function(employee) {
			return employee.name;
		});
	};
	/**
	 * Returns a list of employees' id's with bottom salaries.
	 * @method getLastIds
	 * @param {Number}
	 * @return {Array}
	 */
	EmployeesCollection.prototype.getLastIds = function(quantity) {
		return this.employees.slice(-quantity).map(function(employee) {
			return employee.id;
		});
	};
	/**
	 * Overwrites EmployeesCollection#param with data received from either URL or HTML source.
	 * @method fetchData
	 * @param {String} type of source
	 * @param {String} URL or DOM node
	 * @param {Function} [cb] - The callback that handles the response.
	 */
	EmployeesCollection.prototype.fetchData = function(dataType, source, callFunc) {
		switch (dataType) {
			case 'html':
				this.employees = this._sort(JSON.parse(source));
				break;
			case 'json':
				$.getJSON(source, function(data) {
					this.employees = this._sort(data);
				}.bind(this)).done(callFunc);
				break;
		}
	};
	global.EmployeesCollection = EmployeesCollection;
})(this);