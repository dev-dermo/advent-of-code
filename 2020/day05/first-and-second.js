const input = require('./input');
// const input = ["BFFFBBFRRR"] //: row 70, column 7, seat ID 567.

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
			default:
				return 'Invalid passport info';
		}
	}
	seatIds.push((rowArr[0] * 8) + colArr[0]);
});

const sortedSeats = seatIds.sort((a, b) => b - a);

console.log(`Highest seat id: ${sortedSeats[0]}`);

// second part
console.log(`My seat id: ${sortedSeats.filter((id, index) => id - 1 !== sortedSeats[index + 1])[0] - 1}`);