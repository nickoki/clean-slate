(function(){
    'use strict';

    angular
        .module('partner')
        .controller('HomeController', HomeController);

    function HomeController($scope, $rootScope, $firebaseAuth, userService, $state){
        var vm = this;
        var ref = new Firebase($rootScope.fbUrl);
        vm.authObj = $firebaseAuth(ref);

        if($rootScope.currentUser)
        {
            console.log($rootScope.currentUser);                              
            $scope.currentUser = $rootScope.currentUser.profile;
            vm.title = $scope.currentUser.title;
        }
        //console.log(currentUser);
    }
    
})();

$("#tabs").tabs({
    activate: function (event, ui) {
        var active = $('#tabs').tabs('option', 'active');
        $("#tabid").html('the tab id is ' + $("#tabs ul>li a").eq(active).attr("href"));

    }
}

);
