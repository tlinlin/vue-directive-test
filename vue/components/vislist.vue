<template>
    <div id="visSection"></div>
</template>
<script>
    import vis from "vis";
    export default {
	    data() {
		    return {
			    message: "this page is for test vis"
		    }
	    },
	    methods: {
		    draw(id) {
			    const container = document.getElementById(id);
			    const items = [
				    {x: 10, y: 10},
				    {x: 12, y: 25},
				    {x: 13, y: 30},
				    {x: 14, y: 10},
				    {x: 15, y: 15},
				    {x: 16, y: 30}
			    ];
			    const dataset = new vis.DataSet(items);
			    var options = {
				    width:  '100%',
				    height: '100%'
			    };
                new vis.Graph2d(container, dataset, options);
		    }
	    },
        mounted() {
	        this.$nextTick(function() {
		        this.draw('visSection')
	        });
        }
    }
</script>
<style>
    @import "../../node_modules/vis/dist/vis.min.css";
    #visSection{
        width: 500px;
        height:400px;
        border: 1px red solid;
        }
</style>