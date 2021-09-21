'use strict';

const fs = require('fs-extra');
const path = require('path');

const getDirName = (projectName) => {
  let isScoped = projectName[0] === '@' && projectName.includes('/');

  if (isScoped) {
    let slashIndex = projectName.indexOf('/');
    let scopeName = projectName.substring(1, slashIndex);
    let packageNameWithoutScope = projectName.substring(slashIndex + 1);
    let pathParts = process.cwd().split(path.sep);

    let parentDirectoryContainsScopeName = pathParts.includes(scopeName);

    if (parentDirectoryContainsScopeName) {
      return packageNameWithoutScope;
    } else {
      return `${scopeName}-${packageNameWithoutScope}`;
    }
  } else {
    return projectName;
  }
};

const warnDirectoryAlreadyExists = (dirName) => {
  let message = `Directory '${dirName}' already exists.`;
  return new Error(message);
};

const createDir = async (answers, config, plop) => {
  let directoryName = getDirName(config.path);

  try {
    await fs.mkdir(directoryName);
  } catch (err) {
    if (err.code === 'EEXIST') {
      if (fs.readdirSync(directoryName).length) {
        throw warnDirectoryAlreadyExists(directoryName);
      }
    } else {
      throw err;
    }
  }

  let cwd = process.cwd();
  console.log(plop.getDestBasePath)
};

module.exports = function(plop) {
  plop.setDefaultInclude({ actionTypes: true });
  plop.setActionType('createDir', createDir);
}
