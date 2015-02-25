'use strict';
/**
 * @file mkdir-recursive main
 * @module mkdir-recursive
 * @subpackage main
 * @version 0.0.0
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2015
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
var fs = require('fs');
var path = require('path');

/*
 * functions
 */
/**
 * make directory recursively
 * 
 * @function mkdirRecursive
 * @param {String} root - absolute root where append chunks
 * @param {Array} chunks - directories chunks
 * @param {Number} mode - directories mode, see Node documentation
 * @param {Function} callback - next callback
 */
function mkdirRecursive(root, chunks, mode, callback) {

  var chunk = chunks.shift();
  if (!chunk) {
    return callback(null);
  }
  var root = path.join(root, chunk);

  return fs.exists(root, function(exists) {

    if (exists === true) { // already done
      return mkdirRecursive(root, chunks, mode, callback);
    }
    return fs.mkdir(root, mode, function(err) {

      if (err) {
        return callback(err);
      }
      return mkdirRecursive(root, chunks, mode, callback); // let's magic
    });
  });
}

/**
 * make main. Check README.md
 * 
 * @exports rmdirRecursive
 * @function rmdirRecursive
 * @param {String} root - pathname
 * @param {Number} mode - directories mode, see Node documentation
 * @param {Function} callback - next callback
 */

function mkdir(root, mode, callback) {

  if (typeof mode === 'function') {
    var callback = mode;
    var mode = null;
  }
  if (!root || !callback) {
    throw new Error('missing root or callback');
  }

  var chunks = root.split(path.sep); // split in chunks
  var chunk;
  if (path.isAbsolute(root) === true) {
    chunk = '/'; // build from absolute path
  } else {
    chunk = path.resolve(); // build with relative path
  }

  return mkdirRecursive(chunk, chunks, mode, callback);
}
module.exports.mkdir = mkdir;

/**
 * remove directory recursively
 * 
 * @function rmdirRecursive
 * @param {String} root - absolute root where take chunks
 * @param {Array} chunks - directories chunks
 * @param {Function} callback - next callback
 */
function rmdirRecursive(root, chunks, callback) {

  var chunk = chunks.pop();
  if (!chunk) {
    return callback(null);
  }
  var pathname = path.join(root, '..'); // backtrack

  return fs.exists(root, function(exists) {

    if (exists === false) { // already done
      return rmdirRecursive(root, chunks, callback);
    }
    return fs.rmdir(root, function(err) {

      if (err) {
        return callback(err);
      }
      return rmdirRecursive(pathname, chunks, callback); // let's magic
    });
  });
}

/**
 * remove main. Check README.md
 * 
 * @exports rmdirRecursive
 * @function rmdirRecursive
 * @param {String} root - pathname
 * @param {Function} callback - next callback
 */
function rmdir(root, callback) {

  if (!root || !callback) {
    throw new Error('missing root or callback');
  }

  var chunks = root.split(path.sep); // split in chunks
  var chunk = path.resolve(root); // build absolute path
  // remove "/" from head and tail
  if (chunks[0] === '') {
    chunks.shift();
  }
  if (chunks[chunks.length - 1] === '') {
    chunks.pop();
  }

  return rmdirRecursive(chunk, chunks, callback);
}
module.exports.rmdir = rmdir;
