// 表单验证结果（全局变量）
var valid = {
	moreThanZero : false,
	lessThanTen : false,
	isValid : function() {
		for (var v in this) {
			if (!this[v])
				return false;
		}
		return true;
	}
};