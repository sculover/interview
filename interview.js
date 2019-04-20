// 1
var fn = (
	function test1() {
		return "1";
	},
	function test2() {
		return "2";
	}
)();

console.log(typeof(fn));
// 2
var a = 10;

if (function b(){}) {
	a += typeof(b);
}

console.log(a);