const input = require('./input');
const toVisit = [],
			visited = [];

const inputObjs = input.map(line => {
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
		const tmpObj = {
			[components[0].split(' ').slice(0, 2).join('_')]: {
				[components[0].split(' ').slice(5, 7).join('_')]: components[0].split(' ')[4]
			}
		};

		for (let i=1;i<components.length;i++) {
			tmpObj[components[0].split(' ').slice(0, 2).join('_')][components[i].split(' ').slice(1, 3).join('_')] = components[i].split(' ')[0]
		}
		
		return tmpObj;
	}
});

console.log(inputObjs);

inputObjs.forEach(bag => {
	
});