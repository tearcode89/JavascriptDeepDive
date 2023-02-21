// 유사 배열 객체
const arrayLike = {
    '0': 'apple',
    '1': 'banana',
    '2': 'orange',
    length: 3
}

for(let i = 0; i < arrayLike.length; i++) {
    console.log(arrayLike[i])
}