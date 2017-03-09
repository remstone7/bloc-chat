
(function() {
  function Message($firebaseArray, $cookies, $filter) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        function getByRoomId(roomId){
            return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        };


        return {
            all: messages,
            getByRoomId: getByRoomId,
            send: function(newMessage, roomId) {
				        messages.$add({
                  username: $cookies.get('blocChatCurrentUser'),
                  content: newMessage,
                  roomId: roomId,
                  sentAt: $filter('date')(new Date(), 'shortTime'),
                });

                return messages;
            },
      }
  }

      angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', '$filter', Message]);
})();