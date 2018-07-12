#!/usr/bin/env node

const fse = require('fs-extra');
const { resolve } = require('path');
const { exec } = require('child_process');
const buildResult = require('../app');

const toolPath = resolve(__dirname, '..');
const workspace = process.cwd();

const dest = `${workspace}/typings`;
fse.ensureDirSync(dest);

buildResult
  .then(() => {
    console.log('copy start');

    const fileName = 'wx.d.ts';
    try {
      fse.copySync(`${toolPath}/${fileName}`, `${dest}/${fileName}`);
      console.log('copy end');
    } catch (e) {
      fse.removeSync(dest);
      console.error(e);
    }
  })


