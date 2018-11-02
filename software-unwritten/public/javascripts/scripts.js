var app = angular.module("myApp", []);

app.controller('myCtrl', function($scope, $http) {
  $scope.onclick = function(button) {
    var value = $("#txtBx").val();
    var prompts = ["1. poisonous",]
    if (value <= 31 && value >= 1) {
      var selectedImage = "<img src=\"images/inktober2018/day" + value + ".jpeg\" height=\"500\" width=\"600\">";
    }
    else {
      selectedImage = "<img src=\"images/inktober2018/prompts.jpeg\" height=\"500\" width=\"600\" alt=\"Out of Bounds (Select 1-31)\">";
    }
    
    $("#sketch").html(selectedImage);
  };
});
