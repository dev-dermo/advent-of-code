const depths = require('./input');

const depthsSumArr = [];

depths.forEach((depth, index) => {
	const sum = depth + depths[index + 1] + depths[index + 2];

	depthsSumArr.push(sum);
});

const increased = depthsSumArr.filter((depth, index) => {
	if (index > 0) return depth > depthsSumArr[index - 1];
});

console.log(increased.length);