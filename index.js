var app = angular.module('profileApp', []);

app.controller('formCtrl', function($scope) {
  $scope.data = {
    firstName: 'Haiyue',
    lastName: 'Ma',
    phone: '123-456-7890',
    email: 'mahaiyue2017@gmail.com'
  }
  $scope.editMode = false;
  $scope.imgSrc = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample66.jpg';
  
  $scope.readURL = function(files) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $scope.$apply(function() {
          $scope.imgSrc=e.target.result;
        });
      }
      reader.readAsDataURL(files);
   }
  
  $scope.iconClick = function() {
    document.getElementById('upload').click();
  }
});

app.directive('customOnChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeFunc = scope.$eval(attrs.customOnChange);
      element.bind('change', function(event){
        var files = event.target.files[0];
        onChangeFunc(files);
      });
        
      element.bind('click', function(){
        var files = event.target.files[0];
        onChangeFunc(files);
      });
    }
  };
});