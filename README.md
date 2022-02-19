# add-array
Combines a list of arrays, returning a sum of the numbers found.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i add-array --save
```


## Usage

```js
var add-array = require('add-array');

add-array(['8'], ['b', '10'], ['9', 'e', '1']);
//=> 29
```

Returns only sum of number it ignore other data type like string :

```js
add-array(['10', 'a'], ['b', '2']);
//=> 12
```

