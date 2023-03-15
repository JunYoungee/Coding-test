function solution(numbers, num1, num2) {
    var answer = [];
    num2 = num2 + 1
    answer = numbers.slice(num1, num2);
    return answer;
}