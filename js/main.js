var myApp = angular.module('myApp',[]);

var DataTypes = {
	Int: "int",
	String: "string",
	Date: "date",
	Bool: "bool",
	Time: "time"
};

var metaData = [ //our columns names
	{
		Name: "Login",
		DataType: DataTypes.String,
		IsRequired: true
	},
	{
		Name: "BirthDate",
		DataType: DataTypes.Date,
		IsRequired: false
	},
	{
		Name: "Age",
		DataType: DataTypes.Int,
		IsRequired: false
	}
];

var data = [ //our table data
	{
		Login: "Anna",
		BirthDate: "01/01/2000",
		Age: "15"
	},
	{
		Login: "Ann1",
		BirthDate: "01/05/1990",
		Age: "25"
	},
	{
		Login: "SomeWho",
		BirthDate: "01/01/2000",
		Age: "15"
	},
	{
		Login: "Nobody",
		BirthDate: "24/05/1992",
		Age: "23"
	}
];

function myController($scope) {
    $scope.rows = data;
    $scope.metaData = metaData;

    //delete button function
    $scope.remove = function(row) {      
    	var index = data.indexOf(row);
    	if (index > -1) {                 // check if we want to remove row element
    		$scope.rows.splice(index, 1);
		}
    };

    //edit button function
    $scope.edit = function(row) {
    	$scope.selectedRow = row;
    };

    //add button function
    $scope.add = function() {
    	var new_obj = {};
    	for(var i = 0; i<metaData.length; i++) { //running though metadata to get input names
		  var fieldMeta = metaData[i];
		  new_obj[ fieldMeta.Name ] = null;
		}
		$scope.selectedRow = new_obj;
    };

    $scope.submit = function() {
    		data.push($scope.selectedRow);
    		$scope.selectedRow = null;
    	};
}

//   validation
myApp.directive('checkType', function() {
	return {
      require: 'ngModel',
      link: function(scope, elem, attr, ngModel) {
          var type = null;

          attr.$observe('checkType', function(value) {
	        type = value;
	      });

          ngModel.$parsers.unshift(function(value) {
             var valid = true;

             console.log(type);
             switch(type){
             	case DataTypes.Int : {
             		if(isNaN(value)) {
             			valid = false;
             		}else {
             			value = +value;
             		}
             		break;
             	}
             	case DataTypes.Date : {
            		value = Date.parse(value);
             		if (!value) {
             			valid = false;
             		}
             		break;
             	}
             }
             console.log(valid);

             ngModel.$setValidity('checkType', valid);
             return valid ? value : ngModel.$modelValue;
          });
      }
    };
});

var myApp = angular.module('myApp',[]);

var DataTypes = {
	Int: "int",
	String: "string",
	Date: "date",
	Bool: "bool",
	Time: "time"
};

var metaData = [ //our columns names
	{
		Name: "Login",
		DataType: DataTypes.String,
		IsRequired: true
	},
	{
		Name: "BirthDate",
		DataType: DataTypes.Date,
		IsRequired: false
	},
	{
		Name: "Age",
		DataType: DataTypes.Int,
		IsRequired: false
	}
];

var data = [ //our table data
	{
		Login: "Anna",
		BirthDate: "01/01/2000",
		Age: "15"
	},
	{
		Login: "Ann1",
		BirthDate: "01/05/1990",
		Age: "25"
	},
	{
		Login: "SomeWho",
		BirthDate: "01/01/2000",
		Age: "15"
	},
	{
		Login: "Nobody",
		BirthDate: "24/05/1992",
		Age: "23"
	}
];

function myController($scope) {
    $scope.rows = data;
    $scope.metaData = metaData;

    //delete button function
    $scope.remove = function(row) {      
    	var index = data.indexOf(row);
    	if (index > -1) {                 // check if we want to remove row element
    		$scope.rows.splice(index, 1);
		}
    };

    //edit button function
    $scope.edit = function(row) {
    	$scope.selectedRow = row;
    };

    //add button function
    $scope.add = function() {
    	var new_obj = {};
    	for(var i = 0; i<metaData.length; i++) { //running though metadata to get input names
		  var fieldMeta = metaData[i];
		  new_obj[ fieldMeta.Name ] = null;
		}
		$scope.selectedRow = new_obj;
    };

    $scope.submit = function() {
    		data.push($scope.selectedRow);
    		$scope.selectedRow = null;
    	};
}

//   validation
myApp.directive('checkType', function() {
	return {
      require: 'ngModel',
      link: function(scope, elem, attr, ngModel) {
          var type = null;

          attr.$observe('checkType', function(value) {
	        type = value;
	      });

          ngModel.$parsers.unshift(function(value) {
             var valid = true;

             console.log(type);
             switch(type){
             	case DataTypes.Int : {
             		if(isNaN(value)) {
             			valid = false;
             		}else {
             			value = +value;
             		}
             		break;
             	}
             	case DataTypes.Date : {
            		value = Date.parse(value);
             		if (!value) {
             			valid = false;
             		}
             		break;
             	}
             }
             console.log(valid);

             ngModel.$setValidity('checkType', valid);
             return valid ? value : ngModel.$modelValue;
          });
      }
    };
});

