const input = require('./input');

const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'],
			eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'],
			validPassports = [];

input.forEach(passport => {
	let fieldCount = 0;
	
	for (field in passport) {
		if (fields.includes(field)) fieldCount++;
	}

	if (fieldCount === 8 || ((fieldCount === 7) && (!passport.cid))) validPassports.push(passport);
});

const betterValidation = validPassports.filter(passport => {
	if (
		(passport.byr.length === 4) && (parseInt(passport.byr) >= 1920 && parseInt(passport.byr) <= 2002) && 
		(passport.iyr.length === 4) && (parseInt(passport.iyr) >= 2010 && parseInt(passport.iyr) <= 2020) &&
		(passport.eyr.length === 4) && (parseInt(passport.eyr) >= 2020 && parseInt(passport.eyr) <= 2030) &&
		(passport.hcl.match(/(^#[0-9a-f]{6})$/g)) && 
		(passport.pid.match(/^([\d]{9})$/g)) &&
		(eyeColors.includes(passport.ecl)) && 
		(
			(passport.hgt.length === 4) && (passport.hgt.slice(2, 4) === 'in') && ((parseInt(passport.hgt.slice(0, 2)) >= 59) || parseInt(passport.hgt.slice(0, 2)) <= 76) ||
			(passport.hgt.length === 5) && (passport.hgt.slice(3, 5) === 'cm') && ((parseInt(passport.hgt.slice(0, 3)) >= 150) || parseInt(passport.hgt.slice(0, 3)) <= 193)
		)
	) return true;
});

console.log(betterValidation.length);