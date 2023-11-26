/*
Problem Description
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words.

The returned string should only have a single space separating the words.

Do not include any extra spaces.

Input format
String s.

Output format
The function should return a string of the words in reverse order concatenated by a single space.

Sample Input 1
hello world

Sample Output 1
world hello

Explanation
The given words after being reversed gives:world hello 
*/

function reverseWordsInAString(s) {
    
    let result = "";

    let i=0
    while(i <= s.length-1){
        while( i<= s.length-1 && s[i]==" "){
            i++
        }

        
        let j=i

        while(j<=s.length-1 && s[j]!=" "){
            j++
        }
        let word = s.substring(i,j)

        if(result.length==0){
            result = word
        }else{
            result = word+" "+ result
        }

        i = j+1
    }

    return result
}