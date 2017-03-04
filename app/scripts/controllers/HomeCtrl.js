(function () {
    function HomeCtrl($scope, Room, Message, $uibModal) {
        $scope.rooms = Room.all;
        $scope.currentRoom = null;


        $scope.open = function() { 
            
            $uibModal.open({
                templateUrl: '/templates/homeModal.html',
                controller: 'ModalCtrl',
                size: 'md'
            });
        };
        
        // change message container to room

        $scope.changeChat = function(room){
            // store active room
            $scope.currentRoom = room;  
            console.log($scope.currentRoom);
            //display mesasges
            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
            console.log($scope.messages);

        };
        
        // remove chat room
        $scope.delete = function($index){
            $scope.rooms.$remove($index);
        };
        
        return $scope.rooms
    };
    

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();