/**
 * Template: https://github.com/umdjs/umd/blob/master/amdWebGlobal.js
 */
(function (root, factory) {
    var moduleName = 'component-shim';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            // Also create a global in case some scripts
            // that are loaded still are looking for
            // a global even when an AMD loader is in use.
            var module = factory();
            root[moduleName] = module;
            return module;
        });
    } else {
        // Browser globals
        root[moduleName] = factory();
    }
}(this, function () {
    if (! this.module) {
      this.module = this;
    }
    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return this;
}));
