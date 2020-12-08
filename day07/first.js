const input = require('./input');

const inputObj = input.map(line => {
	// console.log(line.split(', ').length);
	const components = line.split(', ');

	if (components.length === 1) {
		// contains 1 or 0 bags
		if (components[0].includes('contain no other bags')) {
			// console.log(components, 'empty object');
			return { [components[0].split(' ').slice(0, 2).join('_')]: {} };
		} else {
			// console.log(components, 'object with 1 prop');
			return {
				[components[0].split(' ').slice(0, 2).join('_')]: {
					[components[0].split(' ').slice(5, 7).join('_')]: components[0].split(' ')[4]
				}
			};
		}
	} else {
		console.log(components, 'object with 2 props');
		return {
			[components[0].split(' ').slice(0, 2).join('_')]: {
				[components[0].split(' ').slice(5, 7).join('_')]: components[0].split(' ')[4],
				[components[1].split(' ').slice(1, 3).join('_')]: components[1].split(' ')[0],
			}
		};
	}
});

console.log(inputObj);