const input = require('./input');
let total = 0;
const toVisit = ['shiny_gold'];

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

		for (let i = 1; i < components.length; i++) {
			tmpObj[components[0].split(' ').slice(0, 2).join('_')][components[i].split(' ').slice(1, 3).join('_')] = components[i].split(' ')[0]
		}

		return tmpObj;
	}
});

console.log(inputObjs);

function followChain(arr) {
	inputObjs.forEach(rule => {
		for (parent in rule) {
			// console.log(rule[parent]);
			arr.forEach(color => {
				if (parent === color) {
					for (child in rule[parent]) {
						console.log(child);
						if (!toVisit.includes(child)) {
							toVisit.push(child);
							total+=rule[parent][child];
							console.log(total);
						};
					}
				}
			});
		}
	});
}

followChain(toVisit);
// followChain(toVisit);

console.log(toVisit)

// inputObjs.forEach(rule => {
// 	for (parent in rule) {
// 		// console.log(rule[parent]);
// 		if (parent === 'shiny_gold') {
// 			for (child in rule[parent]) {
// 				console.log(child);
// 				if (!toVisit.includes(child)) toVisit.push(child);
// 			}
// 		}
// 	}
// });
