(function () {
    function HomeCtrl($scope, Room, Message, $uibModal) {
        $scope.rooms = Room.all;
        $scope.currentRoom = null;
        $scope.messages = null;

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
        
        // change message container to room

        $scope.changeChat = function(room){
            // store active room
            $scope.currentRoom = room;  
//            console.log($scope.currentRoom);
            
            //display mesasges
            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
            console.log($scope.currentRoom);
//            console.log($scope.messages);

        };
        
        $scope.sendMessage = function(message) {
            Message.send(message, $scope.currentRoom.$id);
			      $scope.message = '';
		      } 
       
        
        return $scope.rooms
    };
    

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();