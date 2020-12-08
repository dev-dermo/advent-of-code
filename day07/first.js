const input = require('./input');
const validAns = [];

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

inputObjs.forEach(bag => {
	for (parentBag in bag) {
		for (childBag in bag[parentBag]) {
			if (childBag === 'shiny_gold') validAns.push(parentBag);
		}
	}
});

validAns.forEach(validAnswer => {
	inputObjs.forEach(bag => {
		for (parentBag in bag) {
			for (childBag in bag[parentBag]) {
				if (childBag === validAnswer) {
					if (!validAns.includes(parentBag)) {
						validAns.push(parentBag);
					};
				}
			}
		}
	})
});

let count;
do {
	count = 0;
	validAns.forEach(validAnswer => {
		inputObjs.forEach(bag => {
			for (parentBag in bag) {
				for (childBag in bag[parentBag]) {
					if (childBag === validAnswer) {
						if (!validAns.includes(parentBag)) {
							validAns.push(parentBag)
							count++;
						};
					}
				}
			}
		})
	});
} while (count > 0);

console.log(validAns);
console.log(validAns.length);