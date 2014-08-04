app.controller('MessagesCtrl', function($scope) {
  $scope.messages = [
    { body: 'Dude when are you going to play my favorite song?', id: 1, user: { id: 100, name: 'John K.'}},
    { body: 'Can you dedicate my request to my girlfriend?', id: 2, user: { id: 100, name: 'Joe K.'}},
    { body: 'Can i book you for a party. Your set is rad', id: 3, user: { id: 100, name: 'Jim K.'}},
    { body: 'How long are you playing?', id: 4, user: { id: 100, name: 'Jeff K.'}},
    { body: 'That last song was awesome!', id: 5, user: { id: 100, name: 'Justin K.'}},
  ];
});
