(function () {
    function HomeCtrl($scope, Room, $uibModal) {
        $scope.rooms = Room.all;
         
        $scope.open = function() { 
            
            $uibModal.open({
                templateUrl: '/templates/homeModal.html',
                controller: 'ModalCtrl',
                size: 'md'
            });
        };
        return $scope.rooms
    };
    
//    track by index
//    ng-repeat track by index
//    ng-click and pass in the getCurrentIndex

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();