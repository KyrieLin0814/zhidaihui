import global from './global.js'

// 路由跳转
function goToPage(path) {
	uni.navigateTo({
		url: path
	});
}

//路由替换
function redirectTo(path) {
	uni.redirectTo({
		url: path
	});
}


export default {
	goToPage,
	redirectTo,
}
