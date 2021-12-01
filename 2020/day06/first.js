const input = require('./input');
// const input = [["abc"],["a","b","c"],["ab","ac"],["a","a","a","a"],["b"]];

const totals = [];

input.forEach(group => {
	const uniqueAnswers = [];

	group.forEach(answer => {
		let ansArr = answer.split('');
		ansArr.forEach(yesNo => {
			if (!uniqueAnswers.includes(yesNo)) uniqueAnswers.push(yesNo)
		});
	})

	totals.push(uniqueAnswers);
});

console.log(totals.reduce((acc, curr) => acc + curr.length, 0));