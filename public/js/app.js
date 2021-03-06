
    'use strict';

    var app = angular.module('patientsApp', []);

    app.controller('patientsController', function($scope, $http) {

      $http.get('https://murmuring-ocean-78954.herokuapp.com/api/patients')
        .then(function(response) {
          $scope.patients = response.data;
        });
    
      $scope.savePatient = function(patient) {
        $http.post('https://murmuring-ocean-78954.herokuapp.com/api/patients', patient)
          .then(function(response) {
            $scope.patients.push(response.data);
        });
      }
      
    });
