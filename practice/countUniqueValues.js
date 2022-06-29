// *** 문제 ***
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null


// *** 처음 풀이 ***
// function countUniqueValues(numbers){
//     let i = 0;
//     let j = 1;
//     if (numbers.length === 0) return 0;
//     while (j < numbers.length) {
//         if (numbers[i] == numbers[j]) {
//             j++;
//         } else {
//             i++;
//             numbers[i] = numbers[j];
//             j++;
//         }
//     }
//     return i + 1;
//   }

// 올바른 출력값을 반환하기는 하지만 리팩터링 필요.
// ** j 는 if문 조건에 상관없이 1씩 커지므로 for문을 쓰는 것이 간결하다.
// ** 변수는 좀 더 명시적인 이름을 짓는 것이 좋을 것 같다.


// *** 풀이 수정 ***
function countUniqueValues(arr){
    if (arr.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}