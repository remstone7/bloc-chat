(function() {
    function UserModalCtrl($scope, $uibModalInstance, $cookies) {
        
        $scope.setUsername = function() {
            $cookies.blocChatCurrentUser = $scope.newUsername;
              console.log($cookies.blocChatCurrentUser);
              
            $uibModalInstance.close();
        };
    }
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalCtrl]);
})();