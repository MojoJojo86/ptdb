(function() {
    'use strict';

    var app = angular.module('patientsApp', []);

    app.controller('patientsController', function($scope, $http) {

      $http.get('/')
        .then(function(response) {
          $scope.patients = response.data;
        });
    
      $scope.savePatient = function(patient) {
        $http.post('/patients', patient)
          .then(function(response) {
            $scope.patients.push(response.data);
        });
      }
      
    });
})();