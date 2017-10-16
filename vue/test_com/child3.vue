<template>

</template>
<script>
    export default {
    	name:"child3",
    	data(){
    		return{
    			level:"one"
            }
        },
	    render: function (createElement) {
		    return createElement(
			    'h' + this.level,   // tag name 标签名称
			    this.$slots.default // 子组件中的阵列
		    )
	    }
    }
</script>