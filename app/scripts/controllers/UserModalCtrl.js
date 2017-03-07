(function() {
    function UserModalCtrl($scope, $uibModalInstance, $cookies) {
//        $cookies.blocChatCurrentUser = '';
        
        $scope.setUsername = function() {
            $cookies.put('blocChatCurrentUser', $scope.newUsername);
              console.log($cookies.blocChatCurrentUser);
              
            $uibModalInstance.close(); 
        };
    }
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalCtrl]);
})();