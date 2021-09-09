// 실패 반복되는 수열로 나타남
function fail_1(arr1, arr2) {

    var answer = new Array(arr1.length)
    answer = answer.fill([])

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1[0].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }

    return answer;
}

// 성공
function solution(arr1, arr2) {

    var answer = []

    for(let i = 0; i < arr1.length; i++){
        var sum = []
        for(let j = 0; j < arr1[0].length; j++){
            sum.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(sum)
    }

    return answer;
}

