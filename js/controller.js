app.controller('myCtrl', function($scope, dealData) {

    $scope.groups =[100,90,80,70,60,50,40,30,20,10];
    var root = 'http://www.cheapshark.com/api/1.0/deals';
    dealData.getDeals(root).then(function(response) {
        $scope.deal = response.data;
			 for (var i in $scope.deal){
				 $scope.deal[i].group = (Math.floor( $scope.deal[i].metacriticScore /10)+1)*10;
			 }
		      });


});
