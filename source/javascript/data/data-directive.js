(function() {
	'use strict';
	//All of the oddities in this file are thanks to johnPapa's style guide
	//Documentation: https://github.com/johnpapa/angular-styleguide#directives
	angular
		.module('app')
		.directive('contentDirective', contentDirectiveFunction);


	function contentDirectiveFunction() {
		var directive = {
			restict: 'EA',
			controller: Controller,
			controllerAs: 'vm',
			scope: true,
			templateUrl: 'templates/data-template.html'
		};
		return directive;
	}

	Controller.$inject = ['dataFactory'];

	function Controller(dataFactory) {
		var vm = this;
		var food_id = '09037';

		vm.foods = [];
		dataFactory.getFoodId(food_id);

		function getAllData(){
			return dataFactory
				.getData()
				.then(function(data) {
					vm.foods.push(data);
				})
				.catch(function(error) {
					console.log(error);
				});
		}

		vm.addFood = function(food_id)
		{
			dataFactory.getFoodId(food_id);
			getAllData();
		}

		getAllData();
	}
})();