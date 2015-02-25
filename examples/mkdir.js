'use strict';
/**
 * @file mkdir example
 * @module mkdir-recursive
 * @subpackage examples
 * @version 0.0.0
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

var fx = require('..'); // use require('mkdir-recursive') instead

fx.mkdir('ciao/come/stai/', function(err) {

  console.log('done');
});
