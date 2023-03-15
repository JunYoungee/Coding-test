function solution(n) {
    var answer = 0;
    if (n < 8){
        answer = 1
    }
    else if(8 <= n){
        answer = parseInt(n / 7) + 1
        if (n % 7 == 0){
            answer = parseInt(n / 7)
        }
    }
    return answer;
}