const input = require('./input');
// const input = [["abc"], ["a", "b", "c"], ["ab", "ac"], ["a", "a", "a", "a"], ["b"]];

const totals = [];

input.forEach(group => {
	if (group.length === 1) {
		totals.push(group[0].split(''));
	} else {
		let joinedAnswers = '';
		group.forEach(answer => joinedAnswers+=answer)

		let answers = joinedAnswers.split('').filter(str => {
			let regEx = new RegExp(str, 'g');
			if (joinedAnswers.match(regEx).length === group.length) return true;
		});

		let uniqueArray = answers.filter((letter, index) => answers.indexOf(letter) === index);

		totals.push(uniqueArray)
	}
});

console.log(totals.reduce((acc, curr) => acc + curr.length, 0));