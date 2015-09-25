define(['angular', 'mainsite'], function (angular, mainSiteModule) {	

	var app = angular.module('pplMainSiteApp', ['mainSiteModule']);

	app.init = function () {
      angular.bootstrap(document, ['pplMainSiteApp']);
  	};

return app;
});