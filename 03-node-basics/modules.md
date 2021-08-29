# How to export in  Nodejs

## Method 1

This is used to export one single object.
```js
	module.exports = functionName;
```

## Method 2

```js
	module.exports.functionName = functionName;
	module.exports.other = 1;
```
This will export an object with two attributes, "functionName" and "other".

Finally, you can also omit the keyword _module_ as Nodejs loads it by default.

# How to import

To import you require the file in which the object you want to import are exported.
```js
	const import = require('./filename');
```
Now, _import_ is the object exported in filename.