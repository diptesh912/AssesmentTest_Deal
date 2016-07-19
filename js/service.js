app.factory('dealData', function($http) {
   return {
        getDeals: function(url) {
             return $http.get(url)
                       .then(function(response) {
                            return response;
                        });
                              }
   }
});
