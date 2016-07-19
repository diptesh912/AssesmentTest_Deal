app.controller('myCtrl', function($scope, dealData) {
    var root = 'http://www.cheapshark.com/api/1.0/deals';
    dealData.getDeals(root).then(function(response) {
        $scope.deal = response.data;
			 for (var i in $scope.deal){
				 $scope.deal[i].group = (Math.floor( $scope.deal[i].metacriticScore /10)+1)*10;
			 }
		      });


});
