'use strict';
/**
 * @file error test
 * @module mkdir-recursive
 * @subpackage test
 * @version 0.0.0
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var fx = require('..');
var assert = require('assert');

/*
 * test module
 */
describe('error', function() {

  describe('mkdir', function() {

    describe('root', function() {

      it('should throw an Exception if "root" is an Array', function(done) {

        assert.throws(function() {

          fx.mkdir([ 'foo', 'bar' ]);
        }, function(e) {

          if ((e instanceof Error) && /missing root/.test(e)) {
            return true;
          }
        }, 'array');
        done();
      });
      it('should throw an Exception if "root" is an Object', function(done) {

        assert.throws(function() {

          fx.mkdir({
            foo: 'bar'
          });
        }, function(e) {

          if ((e instanceof Error) && /missing root/.test(e)) {
            return true;
          }
        }, 'object');
        done();
      });
    });

    describe('callback as 2°', function() {

      it('should throw an Exception if "callback" is an Array', function(done) {

        assert.throws(function() {

          fx.mkdir('foo/bar', [ 'foo', 'bar' ]);
        }, function(e) {

          if ((e instanceof Error) && /missing callback/.test(e)) {
            return true;
          }
        }, 'array');
        done();
      });
      it('should throw an Exception if "callback" is an Object',
        function(done) {

          assert.throws(function() {

            fx.mkdir('foo/bar', {
              foo: 'bar'
            });
          }, function(e) {

            if ((e instanceof Error) && /missing callback/.test(e)) {
              return true;
            }
          }, 'object');
          done();
        });
      it('should throw an Exception if "callback" is a String', function(done) {

        assert.throws(function() {

          fx.mkdir('foo/bar', 644, 'foobar');
        }, function(e) {

          if ((e instanceof Error) && /missing callback/.test(e)) {
            return true;
          }
        }, 'string');
        done();
      });
    });

    describe('callback as 3°', function() {

      it('should throw an Exception if "callback" is an Array', function(done) {

        assert.throws(function() {

          fx.mkdir('foo/bar', 644, [ 'foo', 'bar' ]);
        }, function(e) {

          if ((e instanceof Error) && /missing callback/.test(e)) {
            return true;
          }
        }, 'array');
        done();
      });
      it('should throw an Exception if "callback" is an Object',
        function(done) {

          assert.throws(function() {

            fx.mkdir('foo/bar', 644, {
              foo: 'bar'
            });
          }, function(e) {

            if ((e instanceof Error) && /missing callback/.test(e)) {
              return true;
            }
          }, 'object');
          done();
        });
      it('should throw an Exception if "callback" is a String', function(done) {

        assert.throws(function() {

          fx.mkdir('foo/bar', 'foobar');
        }, function(e) {

          if ((e instanceof Error) && /missing callback/.test(e)) {
            return true;
          }
        }, 'string');
        done();
      });

    });
  });

  describe('mkdirSync', function() {

    describe('root', function() {

      it('should throw an Exception if "root" is an Array', function(done) {

        assert.throws(function() {

          fx.mkdirSync([ 'foo', 'bar' ]);
        }, function(e) {

          if ((e instanceof Error) && /missing root/.test(e)) {
            return true;
          }
        }, 'array');
        done();
      });
      it('should throw an Exception if "root" is an Object', function(done) {

        assert.throws(function() {

          fx.mkdirSync({
            foo: 'bar'
          });
        }, function(e) {

          if ((e instanceof Error) && /missing root/.test(e)) {
            return true;
          }
        }, 'object');
        done();
      });

    });
  });

  describe('rmdir', function() {

    describe('root', function() {

      it('should throw an Exception if "root" is an Array', function(done) {

        assert.throws(function() {

          fx.rmdir([ 'foo', 'bar' ]);
        }, function(e) {

          if ((e instanceof Error) && /missing root/.test(e)) {
            return true;
          }
        }, 'array');
        done();
      });
      it('should throw an Exception if "root" is an Object', function(done) {

        assert.throws(function() {

          fx.rmdir({
            foo: 'bar'
          });
        }, function(e) {

          if ((e instanceof Error) && /missing root/.test(e)) {
            return true;
          }
        }, 'object');
        done();
      });
    });

    describe('callback as 2°', function() {

      it('should throw an Exception if "callback" is an Array', function(done) {

        assert.throws(function() {

          fx.rmdir('foo/bar', [ 'foo', 'bar' ]);
        }, function(e) {

          if ((e instanceof Error) && /missing callback/.test(e)) {
            return true;
          }
        }, 'array');
        done();
      });
      it('should throw an Exception if "callback" is an Object',
        function(done) {

          assert.throws(function() {

            fx.rmdir('foo/bar', {
              foo: 'bar'
            });
          }, function(e) {

            if ((e instanceof Error) && /missing callback/.test(e)) {
              return true;
            }
          }, 'object');
          done();
        });
      it('should throw an Exception if "callback" is a String', function(done) {

        assert.throws(function() {

          fx.rmdir('foo/bar', 644, 'foobar');
        }, function(e) {

          if ((e instanceof Error) && /missing callback/.test(e)) {
            return true;
          }
        }, 'string');
        done();
      });
    });

    describe('callback as 3°', function() {

      it('should throw an Exception if "callback" is an Array', function(done) {

        assert.throws(function() {

          fx.rmdir('foo/bar', 644, [ 'foo', 'bar' ]);
        }, function(e) {

          if ((e instanceof Error) && /missing callback/.test(e)) {
            return true;
          }
        }, 'array');
        done();
      });
      it('should throw an Exception if "callback" is an Object',
        function(done) {

          assert.throws(function() {

            fx.rmdir('foo/bar', 644, {
              foo: 'bar'
            });
          }, function(e) {

            if ((e instanceof Error) && /missing callback/.test(e)) {
              return true;
            }
          }, 'object');
          done();
        });
      it('should throw an Exception if "callback" is a String', function(done) {

        assert.throws(function() {

          fx.rmdir('foo/bar', 'foobar');
        }, function(e) {

          if ((e instanceof Error) && /missing callback/.test(e)) {
            return true;
          }
        }, 'string');
        done();
      });

    });
  });

  describe('rmdirSync', function() {

    describe('root', function() {

      it('should throw an Exception if "root" is an Array', function(done) {

        assert.throws(function() {

          fx.rmdirSync([ 'foo', 'bar' ]);
        }, function(e) {

          if ((e instanceof Error) && /missing root/.test(e)) {
            return true;
          }
        }, 'array');
        done();
      });
      it('should throw an Exception if "root" is an Object', function(done) {

        assert.throws(function() {

          fx.rmdirSync({
            foo: 'bar'
          });
        }, function(e) {

          if ((e instanceof Error) && /missing root/.test(e)) {
            return true;
          }
        }, 'object');
        done();
      });

    });
  });

});
