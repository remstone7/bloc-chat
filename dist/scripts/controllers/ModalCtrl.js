(function(){
    function ModalCtrl($scope, $uibModalInstance, Room ){
          
          $scope.rooms = Room.all;
            
          $scope.create = function(newRoom) {
              $scope.rooms.$add(
                  $scope.newRoom
              );
              

              $uibModalInstance.close();
          };

          $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
          };
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope','$uibModalInstance','Room', ModalCtrl])
})();