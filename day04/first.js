const input = require('./input');
const fields = [
	'byr',
	'iyr',
	'eyr',
	'hgt',
	'hcl',
	'ecl',
	'pid',
	'cid'
];

const validPassports = [];

input.forEach(passport => {
	// console.log(passport);
	let fieldCount = 0;
	
	for (field in passport) {
		if (fields.includes(field)) fieldCount++;
		
		

		
	}
	console.log(fieldCount);

	if (fieldCount === 8 || ((fieldCount === 7) && (!passport['cid']))) validPassports.push(fieldCount);
});

console.log('\n');
console.log(validPassports.length);