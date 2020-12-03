const input = require('./input');

// dummy input
// const input = [
// 	"..##.........##.........##.........##.........##.........##.......",
// 	"#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..",
// 	".#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.",
// 	"..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#",
// 	".#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.",
// 	"..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....",
// 	".#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#",
// 	".#........#.#........#.#........#.#........#.#........#.#........#",
// 	"#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...",
// 	"#...##....##...##....##...##....##...##....##...##....##...##....#",
// 	".#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#"
// ];

const landscape = input.map(xAxis => xAxis.split(''));
const xRepeatOn = landscape[0].length;
const finalResult = [], vectors = [ [1, 1], [3, 1], [5, 1], [7, 1], [1, 2] ];

function countTrees(lndscp, xMove, yMove) {
	let treeCount = 0, x = 0;

	for (var y=0;y<lndscp.length;y+=yMove) {
			// console.log(`coords: ${x}, ${y}`);
			if (lndscp[y][x] === '#') treeCount++;
			
			x+=xMove;
			if (x >= xRepeatOn) x%=xRepeatOn;
	}

	finalResult.push(treeCount);
}

vectors.forEach(coords => countTrees(landscape, ...coords));

console.log(finalResult.reduce((curr, acc) => curr * acc));