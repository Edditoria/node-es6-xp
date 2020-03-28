(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}((function () { 'use strict';

	var mod = 'I\'m esm module';

	var pkg = mod.replace('module', 'index');

	console.log(pkg);

})));
