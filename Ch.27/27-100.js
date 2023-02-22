// 이 코드가 오류를 내뿜는 이유를 알아봐라
class Numbers {
    numberArray = [];
    multiply(arr) {
        arr.forEach(function (item) {
            this.numberArray.push(item*item);
        });
    }
}

const numbers = new Numbers();
numbers.multiply([1,2,3])