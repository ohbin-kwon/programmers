function solution(x, n) {
    let sum = 0
    var answer = [];

    for (let i = 0; i < n; i++){
        sum += x
        answer.push(sum)
    }
    
    return answer;
}

console.log(solution(2,5)) // [2 , 4, 6, 8, 10]