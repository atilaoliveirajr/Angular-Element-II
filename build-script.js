const fs = require('fs-extra');
const concat = require('concat');

(async function build(){
    const files = [
        'dist/AngularElementII/main.js',
        'dist/AngularElementII/polyfills.js',
        'dist/AngularElementII/runtime.js'
    ]

    await fs.ensureDir('web-components')
    await concat(files, 'web-components/my-web-component.js')
}) ()