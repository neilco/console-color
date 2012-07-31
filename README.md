# console-color

## Description

A simple Node.js module for colorizing console output.

## Usage

Write a string to the console with green foreground

```
var util = require("util"),
	ansi = require('console-color').new();

util.puts(ansi.green("This is green."));
```

-------------------------------------------------------------------------------

Write a string to the console with white foreground and red background color:

```
var util = require("util"),
	ansi = require('console-color').new();

util.puts(ansi.white("This is white with a red background.", ansi.background.red));
```		

-------------------------------------------------------------------------------

Show all the color options:

```
ansi.help();
```		

-------------------------------------------------------------------------------


## License

All the works are available under the MIT license. 

Copyright © 2012 Neil Cowburn neilco@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

Follow [@neilco](http://twitter.com/neilco) on Twitter.
