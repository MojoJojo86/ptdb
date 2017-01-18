(function() {
    'use strict';

    var app = angular.module('patientsApp', []);

    app.controller('patientsController', function($scope, $http) {

      $http.get('http://localhost:3001/api/patients')
        .then(function(response) {
          $scope.patients = response.data;
        });
    
      $scope.savePatient = function(patient) {
        $http.post('http://localhost:3001/api/patients', patient)
          .then(function(response) {
            $scope.patients.push(response.data);
        });
      }
      
    });
})();