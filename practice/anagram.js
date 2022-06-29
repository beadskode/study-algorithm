// *** 문제 ***
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true


// *** 처음 풀이 ***
// function validAnagram(a, b){
//     if (a == b) false;
//     if (a.length != b.length) false;
    
//     let stringA = a.toLowerCase();
//     let stringB = b.toLowerCase();
    
//     const objectA = {};
//     const objectB = {};
    
//     for (let i in stringA) {
//         objectA[i] > 0 ? objectA[i]++ : 1 }   
        
//     for (let j in stringB) {
//         objectB[j] > 0 ? objectB[j]++ : 1 }
        
//     for (let k in objectA) {
//         if (objectB[objectA[k]] > 0) {
//             return true;
//         }
//     }
//     return true;
// }


// *** 힌트 확인 후 풀이 ***
// function validAnagram(a, b){
//     if (a === b || a.length !== b.length) {
//         return false;
//     };
    
//     let stringA = a.toLowerCase();
//     let stringB = b.toLowerCase();
        
//     const obj = {};

//     for (let i in stringA) {
//         obj[i] = obj[i] > 0 ? obj[i]++ : 1
//     }

//     for (let j in stringB) {
//         obj[j] > 0 ? obj[j]++ : false;
//     }

//     for (let k in obj) {
//        if ((obj[k] % 2) != 0) return false; 
//     }

//     return true;
// }

// validAnagram('test', 'etst');

// ** 문자열 인자를 여러개 받는 경우에는 사용이 불가능하므로 올바르지 못한 코드라고 생각된다.


// *** 정답 확인후 풀이 ***
function validAnagram(a, b){
    if (a.length !== b.length) {
        return false;
    };

    const characters = {};

    for (let i = 0; i < a.length; i++) {
        let letter = a[i];
        characters[letter] ? characters[letter] += 1 : characters[letter] = 1;
    }

    for (let i = 0; i < b.length; i++) {
        let letter = b[i];
        if(!characters[letter]) {
            return false;
        } else {
            characters[letter] -= 1;
        }
    }

    return true;
}