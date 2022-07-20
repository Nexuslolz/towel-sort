module.exports = function towelSort (matrix) {
    let newArr= []
    if(matrix == undefined){
        matrix = []
        return matrix
    } else if(matrix.length === 0){
        return matrix
    } else {
    for(i = 0; i < matrix.length; i++){
        if(i % 2 !== 0){
        matrix[i].reverse()
    }
       newArr.push(...matrix[i])
    }
  return newArr;
}
}
