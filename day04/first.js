const input = require('./input');

const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'], 
			validPassports = [];

input.forEach(passport => {
	let fieldCount = 0;
	
	for (field in passport) {
		if (fields.includes(field)) fieldCount++;
	}

	if (fieldCount === 8 || ((fieldCount === 7) && (!passport['cid']))) validPassports.push(fieldCount);
});

console.log(validPassports.length);