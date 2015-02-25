'use strict';
/**
 * @file mkdirSync test
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
var fs = require('fs');
var sep = require('path').sep;
var assert = require('assert');

var PATH_00 = 'ciao/come/stai/te'.replace(/\//g, sep);
var PATH_01 = 'hello/how/are/you/'.replace(/\//g, sep);
var PATH_10 = '/ciao/come/stai/te'.replace(/\//g, sep);
var PATH_11 = '/hello/how/are/you/'.replace(/\//g, sep);

/*
 * test module
 */
describe('mkdirSync', function() {

  describe('before', function() {

    it('shouldn\'t exist PATH_00 path', function(done) {

      assert.ok(!fs.existsSync(PATH_00));
      done();
    });
    it('shouldn\'t exist PATH_01 path', function(done) {

      assert.ok(!fs.existsSync(PATH_01));
      done();
    });
    it('shouldn\'t exist PATH_10 path', function(done) {

      assert.ok(!fs.existsSync(PATH_10));
      done();
    });
    it('shouldn\'t exist PATH_11 path', function(done) {

      assert.ok(!fs.existsSync(PATH_11));
      done();
    });
  });

  describe('1° run', function() {

    it('should make PATH_00 dirs', function(done) {

      fx.mkdirSync(PATH_00);
      done();
    });
    it('should make PATH_01 dirs', function(done) {

      fx.mkdirSync(PATH_01);
      done();
    });
    it('should make PATH_10 dirs', function(done) {

      fx.mkdirSync(PATH_10);
      done();
    });
    it('should make PATH_11 dirs', function(done) {

      fx.mkdirSync(PATH_11);
      done();
    });
  });

  describe('after 1° run', function() {

    it('should exist PATH_00 path', function(done) {

      assert.ok(fs.existsSync(PATH_00));
      done();
    });
    it('should exist PATH_01 path', function(done) {

      assert.ok(fs.existsSync(PATH_01));
      done();
    });
    it('shouldn\'t exist PATH_10 path', function(done) {

      assert.ok(fs.existsSync(PATH_10));
      done();
    });
    it('shouldn\'t exist PATH_11 path', function(done) {

      assert.ok(fs.existsSync(PATH_11));
      done();
    });
  });

  describe('2° run', function() {

    it('shouldn\'t make PATH_00 dirs becasue already exist', function(done) {

      fx.mkdirSync(PATH_00);
      done();
    });
    it('shouldn\'t make PATH_01 dirs becasue already exist', function(done) {

      fx.mkdirSync(PATH_01);
      done();
    });
    it('shouldn\'t make PATH_10 dirs becasue already exist', function(done) {

      fx.mkdirSync(PATH_10);
      done();
    });
    it('shouldn\'t make PATH_11 dirs becasue already exist', function(done) {

      fx.mkdirSync(PATH_11);
      done();
    });
  });

  describe('after 2° run', function() {

    it('should exist PATH_00 path', function(done) {

      assert.ok(fs.existsSync(PATH_00));
      done();
    });
    it('should exist PATH_01 path', function(done) {

      assert.ok(fs.existsSync(PATH_01));
      done();
    });
    it('shouldn\'t exist PATH_10 path', function(done) {

      assert.ok(fs.existsSync(PATH_10));
      done();
    });
    it('shouldn\'t exist PATH_11 path', function(done) {

      assert.ok(fs.existsSync(PATH_11));
      done();
    });
  });
});

describe('rmdirSync', function() {

  describe('1° run', function() {

    it('should remove PATH_00 dirs', function(done) {

      fx.rmdirSync(PATH_00);
      done();
    });
    it('should remove PATH_01 dirs', function(done) {

      fx.rmdirSync(PATH_01);
      done();
    });
    it('should make PATH_10 dirs', function(done) {

      fx.rmdirSync(PATH_10);
      done();
    });
    it('should make PATH_11 dirs', function(done) {

      fx.rmdirSync(PATH_11);
      done();
    });
  });

  describe('after 1° run', function() {

    it('should exist PATH_00 path', function(done) {

      assert.ok(!fs.existsSync(PATH_00));
      done();
    });
    it('should exist PATH_01 path', function(done) {

      assert.ok(!fs.existsSync(PATH_01));
      done();
    });
    it('shouldn\'t exist PATH_10 path', function(done) {

      assert.ok(!fs.existsSync(PATH_10));
      done();
    });
    it('shouldn\'t exist PATH_11 path', function(done) {

      assert.ok(!fs.existsSync(PATH_11));
      done();
    });
  });

  describe('2° run', function() {

    it('should remove PATH_00 dirs', function(done) {

      fx.rmdirSync(PATH_00);
      done();
    });
    it('should remove PATH_01 dirs', function(done) {

      fx.rmdirSync(PATH_01);
      done();
    });
    it('should make PATH_10 dirs', function(done) {

      fx.rmdirSync(PATH_10);
      done();
    });
    it('should make PATH_11 dirs', function(done) {

      fx.rmdirSync(PATH_11);
      done();
    });
  });

  describe('after 2° run', function() {

    it('should exist PATH_00 path', function(done) {

      assert.ok(!fs.existsSync(PATH_00));
      done();
    });
    it('should exist PATH_01 path', function(done) {

      assert.ok(!fs.existsSync(PATH_01));
      done();
    });
    it('shouldn\'t exist PATH_10 path', function(done) {

      assert.ok(!fs.existsSync(PATH_10));
      done();
    });
    it('shouldn\'t exist PATH_11 path', function(done) {

      assert.ok(!fs.existsSync(PATH_11));
      done();
    });
  });
});
