"use strict";
//--------------------------------------> ASSIGNMENT NO-2 <------------------------------------------------------------------------------
//--------------------------------------> REARRANGING WORDS <----------------------------------------------------------------------------
const scrambledArray = ['student', 'of', true, 123, 'am', 'a', 'GIAIC', 'I'];
//method#1:
scrambledArray.splice(2, 2); //removing number and boolean from scrambledArray.
scrambledArray.unshift(scrambledArray.pop()); //removing 'I' from scrambledArray then add 'I' at index 0.       
scrambledArray.splice(1, 0, ...scrambledArray.splice(3, 2)); //moving 'am','a' from index 3,4 to index 1,2.
console.log(scrambledArray.join(' ')); //output: I am a student of GIAIC.
//method#2:
// scrambledArray.splice(2,2); 
// let firstWord = scrambledArray.slice(-1);
// let secondWord = scrambledArray.slice(2,4);
// let thirdWord = scrambledArray.slice(0,2);
// let fourthWord = scrambledArray.slice(4,5);
// let sentence = [firstWord,...secondWord,...thirdWord,fourthWord]
// console.log(sentence.join(' '))  //output: I am a student of GIAIC.
