// Generated by CoffeeScript 1.7.1
(function() {
  angular.module('rdio-sync', ['ngRoute', 'ngResource']).factory('socket', function($rootScope) {
    var socket;
    socket = io.connect('http://localhost:3003');
    return {
      on: function(eventName, callback) {
        return socket.on(eventName, function() {
          var args;
          args = arguments;
          return $rootScope.$apply(function() {
            return callback.apply(socket, args);
          });
        });
      },
      emit: function(eventName, data, callback) {
        return socket.emit(eventName, data, function() {
          var args;
          args = arguments;
          return $rootScope.$apply(function() {
            return callback != null ? callback.apply(socket, args) : void 0;
          });
        });
      }
    };
  }).config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    return $routeProvider.when('/', {
      templateUrl: '/landing.html'
    }).when('/account', {
      controller: 'AccountFormController',
      templateUrl: '/account.html'
    }).otherwise({
      redirectTo: '/'
    });
  });

}).call(this);

//# sourceMappingURL=account_form.map
