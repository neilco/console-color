var util = require("util"),
	ansi = require('console-color').new();

util.puts(ansi.green("This is green."));
util.puts(ansi.white("This is white with a red background.", ansi.background.red));

ansi.help();