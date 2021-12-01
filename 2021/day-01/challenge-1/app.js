const depths = require('./input');

const increased = depths.filter((depth, index) => {
	if (index > 0) return depth > depths[index - 1];
});

console.log(increased.length);