<template>
    <div>
        <div class="show-text" v-for="item in arrs"><p  ref = "mulText">{{message}}</p></div>
    </div>
</template>
<script>
    import clamps from '../tools/clamps';
    export default {
    	name:"multiLine",
        data(){
    		return {
    			arrs:[1,2,3,4],
    			message: "对于realend元素，top、left和width的值不变。而设置margin-left: -100px、padding-right: 5px" +
                "则是为了让realend元素的盒模型的最终宽度计算为5px"
            }
        },
        mounted(){
        	this.arrs.forEach((item,index) =>{
		        const paragraph = this.$refs.mulText[index];
		        clamps(paragraph, {clamp: 3});
            })
        }
    }
</script>
<style>
    .show-text{
        width: 300px;
        /*height: 60px;*/
        /*line-height: 20px;*/
        overflow: hidden;
        }
    .show-text> p{
        margin: 0;
        }
</style>