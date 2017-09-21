<template>
    <div>
        {{message}}
        <draggable v-model="myArray">
            <transition-group>
                <div v-for="element in myArray" :key="element.id"  class="myClass">
                    {{element.name}}
                </div>
            </transition-group>
        </draggable>
    </div>
</template>
<script>
 import draggable from 'vuedraggable';
	export default {
		data: function () {
            return {
                message: "hello world",
                myArray:[{id:0,name:'one'},{id:1,name:'two'},{id:2,name:'three'},{id:3,name:'four'},{id:4,name:'five'}]
            }
        },
        components: {
            draggable,
        },
    }
</script>
<style scoped>
.myClass{
    margin: 20px 0;
    border:1px red solid;
}

</style>

