// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Constructor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];

// const titleCased = () => {
//   return tutorials.map((banana) => {
//     const tokens = banana.split(" ");
//     const capitalizedTokens = tokens.map(
//       (banana2) => banana2.charAt(0).toUpperCase() + banana2.slice(1)
//     );
//     const response = capitalizedTokens.join(" ");
//     return response;
//   });
// };


// console.log(titleCased(tutorials))










const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];


function titleCased() {
  return tutorials.map(string => {
    let words = string.split(" ")
    let wordsUpper = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))  
    const joinedArray = wordsUpper.join(' ')
    return joinedArray
  })

  // const joinedArray = wordsUpper.join(' ')
  // return joinedArray
}


