<template>
    <div id="hot-preview">
        <HotTable :root="root" :settings="hotSettings"></HotTable>
    </div>
</template>
<script>
	import HotTable from 'vue-handsontable-official';
// import Vue from 'vue';

	export default {
		data: function() {
			return {
				root: 'test-hot',
				hotSettings: {
					data: [['sample', 'data',"",1,10,1,1,1,1,1,1,1,1,1,1],[1,2,3,4,5]],
					colHeaders: true,
					rowHeaders: true,
					fixedColumnsLeft: 2,
					colWidths: 100,
				}
			};
		},
		components: {
			HotTable
		}
	}
</script>

<style>
    #test-hot {
        width: 600px;
        height: 400px;
        overflow: hidden;
        }
</style>