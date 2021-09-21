const path = require('path');
const createDir = require('./lib/create-dir');

const currentDir = /^\.\/?$/;

module.exports = function(plop) {
  plop.load('./lib/create-dir');
  plop.load('plop-pack-git-init');

  plop.setGenerator('new project', {
    description: 'creates a new project',
    prompts: [
      {
        type: 'string',
        name: 'path'
      }
    ],
    actions(data) {
      return [
        {
          type: 'createDir',
          path: `${process.cwd()}/${data.path}/`,
          verbose: true
        },
        {
          type: 'add',
          path: `${process.cwd()}/${data.path}/package.json`,
          templateFile: 'templates/package.json'
        },
        {
          type: 'gitInit',
          path: `${process.cwd()}/${data.path}`,
          verbose: true
        }
      ];
    }
  });
};
