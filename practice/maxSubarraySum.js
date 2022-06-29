// function maxSubarraySum(arr, num) {
//     let i = 0;
//     let j = num - 1;
//     let k = Array(num);
    
//     while ((i + j) < arr.length) {
//         if ()
//     }
// }

// ** 코멘트
// O(N)이 되는 방법을 못찾아서 고민하다가 못풀었는데...
// 이제 그냥 O(N²)이 되더라도 풀 수 있는 데까지 풀고 답을 확인하는 것이 좋겠다.


// *** 다른 풀이 - O(N²) ***
// function maxSubarraySum(arr, num) {
//     if (num > arr.length) {
//         return null;
//     }

//     let max = -Infinity; // max를 양수로 설정해놓으면 arr 내 수가 모두 음수일 때 의도한대로 실행되지 않기 때문.
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         let temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j]; // 정해진 갯수만큼 배열의 값을 더한다.
//         }
//         if (temp > max) {
//             max = temp; // 현재 숫자들의 합이 기록된 최대값보다 클 경우 경신
//         }
//     }

//     return max;
// }


// *** 더 나은 풀이 - O(N) ***
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum; // 굳이 있어야하는 구문이 맞나?
    for (let i = num; i < arr.length; i++) {
        tempSum = maxSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}