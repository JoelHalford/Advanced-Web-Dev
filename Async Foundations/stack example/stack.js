function upperCaseFirst(word) {
	return word[0].toUpperCase() + word.slice(1);
}

function upperCaseWords(sentence) {
	var words = sentence.split(" ");
	for (var i = 0; i < words.length; i++) {
		words[i] = upperCaseFirst(words[i]);
	}
	return words.join(" ");
}

upperCaseWords("lowercase words");

// Stack pt1:
// ?	function: split
// 6	function: upperCaseWords
// 13	function: main

// Stack pt2:
// ?	function: toUpperCase
// 2	function: upperCaseFirst
// 8	function: upperCaseWords
// 13	function: main

// Stack pt3:
// ?	function: slice
// 2	function: upperCaseFirst
// 8	function: upperCaseWords
// 13	function: main

// Stack pt4: (REPEAT FOR SECOND WORD)
// 8	function: upperCaseWords
// 13	function: main

// Stack pt5:
// ? 	function: join
// 10	function: upperCaseWords
// 13	function: main

// Stack pt6:
// Complete!