module.exports = function parseStringsArray(ArrayAsString){
    return ArrayAsString.split(',').map(tech => tech.trim())
    
}