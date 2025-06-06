(function() {
  const ENABLE_LOGGING = false; // Set to true to enable console output
  if (!ENABLE_LOGGING) {
    const noop = function() {};
    ['log', 'debug', 'info'].forEach(fn => {
      if (console[fn]) {
        console[fn] = noop;
      }
    });
  }
})();
