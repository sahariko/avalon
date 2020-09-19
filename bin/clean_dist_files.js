#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { paths } = require('../server/config');

const BLACKLIST = new Set([
    'index.html'
]);
const DELIMITER = '.';

const isMapFile = (fileName) => fileName.includes('.map');

const distFiles = fs.readdirSync(paths.dist);

distFiles.forEach((file) => {
    if (
        BLACKLIST.has(file) ||
        isMapFile(file)
    ) { return; }

    const [fileName, , extension] = file.split(DELIMITER);
    const cleanName = [
        fileName,
        extension
    ].join(DELIMITER);

    const originalPath = path.join(paths.dist, file);
    const newPath = path.join(paths.dist, cleanName);

    fs.copyFileSync(originalPath, newPath);
});
