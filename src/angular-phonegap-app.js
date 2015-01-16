/*
  Bootstrap an Angular Phonegap app by looking for an element with the ngPhonegapApp
  pseudo-directive.  Considered a pseudo-directive because it doesn't function
  like a normal angular directive since that would require bootstrapping in
  the first place.  This uses the same approach as the angularInit function
  used by the ngApp directve.

  This ensures that the angular app will not be bootstrapped and iniitialized
  util after both documentready and deviceready have fired.

  Example usage:
    <ANY ng-phonegap-app="appName" [ng-strict-di]></ANY>
 */
(function (window, document, undefined) { "use strict";
  var ngAttrPrefixes = ['ng-', 'data-ng-', 'ng:', 'x-ng-'],
      directive = 'phonegap-app',
      appElement,
      appModule,
      config = { strictDi: false };

  // From: http://bit.ly/1gAKKPP
  function isInPhoneGap() {
    return !(/^http[s]?:\/\//).test(document.URL);
  }

  function bootstrap() {
    if (appElement && appModule) {
      angular.bootstrap(appElement, [ appModule ], config);
    }
  }

  function pgInit() {
    angular.forEach(ngAttrPrefixes, function (prefix) {
      var candidate, name = prefix + directive;
      if (!appElement && (candidate = document.querySelector('[' + name.replace(':', '\\:') + ']'))) {
        appElement = candidate;
        appModule = appElement.getAttribute(name);
        angular.forEach(ngAttrPrefixes, function (prefix) {
          if (!config.strictDi) {
            var attr = angular.element(appElement).attr(prefix + 'strict-di');
            config.strictDi = angular.isString(attr);
          }
        });
      }
    });

    // Wait for PhoneGap to initialize
    if (isInPhoneGap()) {
      document.addEventListener('deviceready', bootstrap, false);
    } else {
      // If not in phonegap (i.e. web dev) just resolve immediately
      bootstrap();
    }
  }

  angular.element(document).ready(pgInit);
})(window, document);
