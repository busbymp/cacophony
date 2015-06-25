/*
console() shim; liamnewmarch - https://github.com/liamnewmarch/console-shim

Note: http://msdn.microsoft.com/en-us/library/dd565625%28v=vs.85%29.aspx#consolelogging

Some browsers require their developer tools to be open before console.log() is available (particularly IE9). This is a (tiny!) shim that:

* Allows developers to use console.log, console.error, console.warn and console.info as normal
* Stores all log data in a buffer
* Checks every 1000ms for the existance of the native developer tools and outputs the buffer

*/

if (!window.console) (function() {

	var __console, Console;

	Console = function() {
		var check = setInterval(function() {
			var f;
			if (window.console && console.log && !console.__buffer) {
				clearInterval(check);
				f = (Function.prototype.bind) ? Function.prototype.bind.call(console.log, console) : console.log;
				for (var i = 0; i < __console.__buffer.length; i++) f.apply(console, __console.__buffer[i]);
			}
		}, 1000);

		function log() {
			this.__buffer.push(arguments);
		}

		this.log = log;
		this.error = log;
		this.warn = log;
		this.info = log;
		this.__buffer = [];
	};

	__console = window.console = new Console();
})();