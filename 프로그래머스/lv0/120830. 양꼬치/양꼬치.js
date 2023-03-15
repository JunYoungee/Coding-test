function solution(n, k) {
    var answer = 0;
    let po = parseInt(n / 10)
    answer = (n * 12000) + (k * 2000) - (po * 2000);
    return answer;
}