function getFlagsValue(flag){
    //cesta função esta percorrendo o array argv e rotornada o index da flag
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
}

module.exports = getFlagsValue;