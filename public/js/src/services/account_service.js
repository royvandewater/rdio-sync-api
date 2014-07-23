// Generated by CoffeeScript 1.7.1
(function() {
  angular.module('rdio-sync').service('AccountService', function($http) {
    return {
      getAccount: function() {
        return $http.get('/api/v1/account');
      },
      syncAccount: function(data) {
        return this.updateAccount(_.extend({
          sync_now: true
        }, data));
      },
      updateAccount: function(data) {
        return $http.put('/api/v1/account', data);
      }
    };
  });

}).call(this);

//# sourceMappingURL=account_service.map
