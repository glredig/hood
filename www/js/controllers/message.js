app.controller('MessageCtrl', function($scope, $timeout, $ionicScrollDelegate){
  var alternate;
  var isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

  $scope.sendMessage = function(){
    alternate = !alternate;
    $scope.messages.push({
      userId: alternate ? '12345' : '54321',
      photo: alternate ? 'http://releaseboard.com/images/releaseboard_john.png' : 'http://releaseboard.com/images/releaseboard_gabe.jpeg',
      text: $scope.data.message
    });
    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);
  };

  $scope.inputUp = function(){
    if(isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function(){
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };
  $scope.inputDown = function(){
    if(isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];

});
