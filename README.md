# ng-phonegap-app

*ng-phonegap-app* is a tiny pseudo-directive for Angular apps running as Phonegap applications.  I say pseudo-directive because, since it's changing how the app is bootstrapped, it's not a **true** angular directive.  Basically, it waits for both 'documentready' and 'deviceready' to fire before bootstrapping the Angular application.  It functions exactly as the "ng-app" directive does, inluding support for "ng-strict-di".


#### Example usage

```html
<!DOCTYPE html>
<html>
  <body ng-phonegap-app="app">
    <div ng-controller="ctrl" id="test-div">
      {{content}}
    </div>
    <script src="../bower/angular/angular.js"></script>
    <script src="../src/angular-phonegap-app.js"></script>
    <script>
      (function () {
        angular.module('app', []).run();

        function ctrl($scope) {
          $scope.content = "This is the content";
        }

        angular.module('app').controller('ctrl', [ '$scope', ctrl ]);
      })();
    </script>
  </body>
</html>
```

