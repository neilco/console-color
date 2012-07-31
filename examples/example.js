var util = require("util"),
	ansi = require('console-color').new();

util.puts(ansi.white("The quick brown fox jumped over the lazy dog", ansi.background.red));