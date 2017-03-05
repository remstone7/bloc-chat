(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {    
            $uibModal.open({
                templateUrl: '/templates/usernameModal.html',
                controller: 'UserModalCtrl',
                backdrop: 'static',
                keyboard: false

            });
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();