var util   = require('util');

var ConsoleColor = function ConsoleColor() {
	var self = this;
	
	this.background = new Background();
	
	this.foreground_colors = {};	
	this.foreground_colors['black'] = '0;30';
	this.foreground_colors['dark_gray'] = '1;30';
	this.foreground_colors['blue'] = '0;34';
	this.foreground_colors['light_blue'] = '1;34';
	this.foreground_colors['green'] = '0;32';
	this.foreground_colors['light_green'] = '1;32';
	this.foreground_colors['cyan'] = '0;36';
	this.foreground_colors['light_cyan'] = '1;36';
	this.foreground_colors['red'] = '0;31';
	this.foreground_colors['light_red'] = '1;31';
	this.foreground_colors['purple'] = '0;35';
	this.foreground_colors['light_purple'] = '1;35';
	this.foreground_colors['brown'] = '0;33';
	this.foreground_colors['yellow'] = '1;33';
	this.foreground_colors['light_gray'] = '0;37';
	this.foreground_colors['white'] = '1;37';
 
 	this.background_colors = {};
	this.background_colors['black'] = '40';
	this.background_colors['red'] = '41';
	this.background_colors['green'] = '42';
	this.background_colors['yellow'] = '43';
	this.background_colors['blue'] = '44';
	this.background_colors['magenta'] = '45';
	this.background_colors['cyan'] = '46';
	this.background_colors['light_gray'] = '47';
	
	this.foreground_colors.keys().forEach(function(k) {
		ConsoleColor.prototype[k.toLowerCase()] = function Foreground(text, background) {
			var string = "\033[" + self.foreground_colors[k.toLowerCase()] + 'm';
			if (background != undefined && background.prototype.className() == 'Background') {
				string += background();
			}
			string += text + '\033[0m';
			return string;
		}
	});
	
	this.background_colors.keys().forEach(function(k) {
		Background.prototype[k.toLowerCase()] = function Background(text) {
			return "\033[" + self.background_colors[k.toLowerCase()] + 'm';
		};
	});
	
	
	return this;
};

ConsoleColor.prototype.help = function () {
	var self = this;

	util.puts("Available colors:");

	util.print("\nForeground: ");
	this.foreground_colors.keys().forEach(function(color) {
		bg = '';
		if (color === 'black') {
			bg = ",self.background.light_gray";
		}
		util.print(eval("self." + color + "(\"" + color + "\""+bg+")") + ', \033[0m');
	});
	util.print("\b\b \n");
	
	util.print("\nBackground: ");
	this.background_colors.keys().forEach(function(color) {
		fg = 'white';
		if (color === 'light_gray') {
			fg = "black";
		}
		util.print(eval("self."+fg+"(\"" + color + "\", self.background." + color + ")") + ', \033[0m');
	});
	
	util.print("\b\b \n");
	util.puts("");
}

exports.ConsoleColor = ConsoleColor;

exports.new = function() {
	return new ConsoleColor();
};

// ----------------------------------------------------------------------

var Background = function Background() { return this; };

// ----------------------------------------------------------------------
// Object Prototypes
//
Object.prototype.keys = function () {
	var keys = [];
	for(var i in this) if (this.hasOwnProperty(i)) {
		keys.push(i);
	}
	return keys;
};

Object.prototype.className = function() {
	var obj = this;
    if (obj && obj.constructor && obj.constructor.toString) {
        var arr = obj.constructor.toString().match(
            /function\s*(\w+)/);

        if (arr && arr.length == 2) {
            return arr[1];
        }
    }

    return undefined;
};
