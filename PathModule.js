
const path = require ('path')
console.log(path.sep)


const filepath =path.join('/content', 'subfolder', 'text.txt')
console.log( `this is folder path: ${filepath}`)

const base =path.basename(filepath)
console.log(`this is base path: ${base}`)

const absulate =path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(`this is absulate path: ${absulate}`)