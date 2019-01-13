var chalk = require("chalk");
const log = console.log;

var message = "Hello " + chalk.yellow("World");
log(message);

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
  'I am a green line ' +
  chalk.blue.underline.bold('with a blue substring') +
  ' that becomes green again!'
));

log(chalk.magentaBright('bright magenta'));

log(chalk.bgCyan('the background should be color: cyan'));

log(chalk.bgWhite.magenta.bold('What does this do?'));