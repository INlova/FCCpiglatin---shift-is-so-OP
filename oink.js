function translatePigLatin(str) {
	var vowelpen = ['a', 'e', 'i', 'o', 'u']; //define quaifying vowel characters
	var oink = str.split(''); // get us out of string and into an array
	if (vowelpen.includes(str[0])) { //if the first letter = a vowel...
		return str += 'way'; //tack on way and we're done - but what if the string doesn't start with a vowel?
	} else { //then initiate for loop to scan for then next available one
		for (var i = 0; i < str.length; i++) //for loop 
			if (!vowelpen.includes(str[i])) { // scans for a vowel- "if this isn't in the vowel pen, then do X"
				oink.push(oink.shift()); //if a char is !vowel then = consonant //push to end of string and return it!
			}
		else {
			oink.push('ay'); //add ay to edited array
			return oink.join(''); //convery array and get us back to STRINGLAND!
		}
	}
}
translatePigLatin("HelloJabier");




/*REFS FOR GROUP: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://www.w3schools.com/js/js_loop_for.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join */
