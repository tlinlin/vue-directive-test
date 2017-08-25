module.exports = {
	install: (Vue) => {
		Vue.directive('tap', {
			bind () {
				// 做一些一次性的工作
			},
			update (el,binding,vnode) {
				console.log(el,binding,vnode);
				if (typeof binding.value !== 'function') {
					throw new Error('传给v-tap的参数不是一个函数,请检查');
				}
				el.addEventListener('click', binding.value);
			},
			unbind (el,binding,vnode) {
				el.removeEventListener('click', binding.value);
			}
		});
	}
};