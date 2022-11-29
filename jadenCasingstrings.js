// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. 



const toJadenCase = (str) => {
// Turn string into array of words
    let arr = str.split(' ')

// Loop through array of words and convert each first letter to uppercase, then concat with rest of word
// Turn array back into string and return
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)
    }
    return arr.join(' ')
}

console.log(toJadenCase(`How can mirrors be real if our eye's aren't real`))