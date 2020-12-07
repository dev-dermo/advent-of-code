const input = require('./input');
// const input = [
// 	"BFFFBBFRRR", //: row 70, column 7, seat ID 567.
// 	"FFFBBBFRRR", //: row 14, column 7, seat ID 119.
// 	// "BBFFBBFRLL",
// ];

const seatIds = [];

input.forEach(boardingPass => {
	const rowArr = [], colArr = [];

	for (let i=0;i<=127;i++) rowArr.push(i);
	for (let i=0;i<=7;i++) colArr.push(i);

	for (let letterIndex=0;letterIndex<10;letterIndex++) {
		switch (boardingPass[letterIndex]) {
			case 'F':
				rowArr.splice(Math.floor(rowArr.length / 2, rowArr.length));
				break;
			case 'B':
				rowArr.splice(0, Math.ceil(rowArr.length / 2));
				break;
			case 'L':
				colArr.splice(Math.floor(colArr.length / 2, colArr.length));
				break;
			case 'R':
				colArr.splice(0, Math.ceil(colArr.length / 2));
				break;
		}

		console.log(rowArr, colArr);
	}
	console.log(rowArr, colArr);
	seatIds.push((rowArr[0] * 8) + colArr[0]);
});


console.log(seatIds.sort((a, b) => b - a)[0]);