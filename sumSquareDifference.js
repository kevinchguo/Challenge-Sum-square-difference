class SumOfASquare {
  constructor(num) {
    this.num = num;
  }

  sumOfSquares() {
    let answer = 0;
    for (let i = 1; i <= this.num; i++) {
      answer += i * i;
    }
    return answer;
  }
  squareOfTheSums() {
    let answer = 0;
    for (let i = 1; i <= this.num; i++) {
      answer += i;
    }
    return answer * answer;
  }
}

module.exports = {
  SumOfASquare: SumOfASquare
};
