const del = require('del');
const {series} = require('gulp');

function clean() {
    return del([
        'app.js',
        'app.js.map',
        'src/**/*.js',
        'src/**/*.js.*',
        'spec/**/*.js',
        'spec/**/*.js.*',
        '!spec/support/specs.js'
    ]);
}

exports.default = series(clean);
