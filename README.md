# photo-gallery
POC/Exploratory Photo Gallery
Following commands in README.md surrounded with backticks(`) or shown as "code" in markdown are in terminal.

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.



## Local install
This app used Yeoman to get up and running: http://yeoman.io/learning/index.html
What follows are steps that were taken to create project.

Check if you have yeoman installed by running `yo -h` in the terminal

Install Yeoman/bower/grunt/gulp (if need be):
`run npm install -g yo bower grunt-cli gulp`

Install angular generator:
`npm install -g generator-angular`

In project directory (I've chosen /Users/MY_NAME/Sites/photo-gallery) run:
`yo angular`

Yeoman has a nice CLI that you're encouraged to explore - answered yes to all questions and selected default install of angular modules.
### TODO: - Do an audit of auto-installed angular modules

Got compass/Sass related error when running `grunt serve`
ran `grunt compass` to replicate error
Got version of compass with:
`compass version` -> 0.12.6
In order to fix this error upgraded compass version with:
`gem install compass -v 1.0.3`
Now upgraded to version 1.0.3
`grunt` and `grunt serve` work as expected now

## Running app locally
Clone git repo in what will be parent directory - For example:
/Users/YOUR_NAME/Sites
`git clone`

In project directory ('photo-gallery' unless you've renamed it) run `bower install` to get project's dependencies
Now run `grunt` (builds the project)

You may see the following error (in my instance is was from not having compass up to date):
"Warning: Error: Cannot find where you keep your Bower packages. Use --force to cointunue."
Install/update compass with:
`gem install compass -v 1.0.3`
(I also uninstalled first - `gem uninstall compass`)

Run `grunt` to run through tests and be sure it builds with no errors

Run `grunt serve` to see the app run locally in your browser: http://localhost:9000/#/

## TODO - Write up instructions on use for Zipped version of project
