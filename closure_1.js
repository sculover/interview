/* 一个班级，学生名字保存在一个数组里，两个方法写在函数中的一个对象中，第一个方法加入班级，第二个方法离开班级，每次加入或离开，都需要打印新的学生名单。 */

function test() {
	var _arr = [];

	var _obj = {
		join: function(name) {
			_arr.push({name: name});
			_print(_arr);
		},
		leave: function(name) {
			var _index = _findIndex(name);
			if (_index != -1) {
				_arr.splice(_index, 1);
			}
			_print(_arr);	
		}
	}
	function _findIndex(name) {
		var index = _arr.findIndex(function(item) {
          return item.name == name
        });
      console.log(index);
		return index;
	}
	function _print(arr) {
		var _nameArr = arr.map(item => item.name);
		console.log(_nameArr);
	}
	return _obj
}

var t = test();
t.join('wangdi');
t.join('wangdi1');
t.join('wangdi');
t.leave('wangdi1');