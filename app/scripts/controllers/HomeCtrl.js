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
        
        // remove chat room
        $scope.delete = function($index){

            $scope.rooms.$remove($index);
        };
        
        
        
        return $scope.rooms
    };
    

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();