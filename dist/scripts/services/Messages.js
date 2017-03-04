
(function() {
  function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        var getByRoomId = function(roomId){

            var idMessages = ref.orderByChild("roomId").equalTo(roomId);
            return $firebaseArray(idMessages);
        };

        return {
          all: messages,
          getByRoomId: getByRoomId 
//             Filter the messages by their room ID.
        };
      }

      angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();