const fs = require('fs');
const shell = require('shelljs');
const cmd = require('node-cmd');
const elegantSpinner = require('elegant-spinner');
const logUpdate = require('log-update');
const chalk = require('chalk');
const process = require('process');

const showBanner = require('../external/banner');

let clientfn = () => {

  showBanner();

  if(!fs.existsSync('./mevn.json')){
    console.log(chalk.red.bold('\n Make sure that you are having a valid MEVN stack project in path'));
    process.exit(1);
  }

  let data = fs.readFileSync(process.cwd() + '/mevn.json', 'utf8');
  let appname = JSON.parse(data);
  shell.cd(appname.project_name);
  shell.cd('client');

  let frame = elegantSpinner();
  let runSpinner = setInterval(() => {

    logUpdate(chalk.green.bold('\n Installing dependencies in the background. Hold on... ') + chalk.cyan.bold.dim(frame()));
    }, 50);

  cmd.get('npm install', (err, data, stderr) => {

    clearInterval(runSpinner);
    logUpdate.clear();

    if(err){

      console.log(chalk.red.bold('Something went wrong. Couldn\'t install the required packages!'));
      process.exit(1);
    }
    // console.log(data)
    console.log(chalk.green.bold('You\'re all set.'));

    setTimeout(() => {
      shell.exec('npm run dev');
    }, 200);
  })

}

module.exports = clientfn;
