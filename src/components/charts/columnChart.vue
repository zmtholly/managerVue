<template>
  <div class="c-chart">
    <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
  </div>
</template>
<script>
// https://github.com/superman66/vue-highcharts/tree/0a2ac236b0a31a617576d4ddb1f852cfa923db18
import VueHighcharts from "vue2-highcharts";
// const asyncData = {
//   name: "Tokyo",
//   marker: {
//     symbol: "square"
//   },
//   data: [7.0,6.9,9.5,14.5,18.2,21.5,25.2,
//     {
//       y: 26.5,
//       marker: {
//         symbol: "url(http://www.highcharts.com/demo/gfx/sun.png)"
//       }
//     },23.3,18.3,13.9,9.6
//   ]
// };
export default {
  components: {
    VueHighcharts
  },
  data(){
    return{
      options:{
        chart: {
            type: 'column'
        },
        title: {
            text: '月平均降雨量'
        },
        xAxis: {
            categories: ['一月','二月','三月','四月','五月','六月','七月','八月','九月',
                '十月','十一月','十二月'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '降雨量 (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                borderWidth: 0
            }
        },
        colors: ['#ff7f50','#87cefa','#da70d6','#90ed7d','#7770da'],
        series: [{
            name: '东京',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
            name: '纽约',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
        }, {
            name: '伦敦',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
        }, {
            name: '柏林',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
        }]
      }
    }
  },
  // methods: {
  //   load() {
  //     let lineCharts = this.$refs.lineCharts;
  //     lineCharts.delegateMethod("showLoading", "Loading...");
  //     setTimeout(() => {
  //       lineCharts.addSeries(asyncData);
  //       lineCharts.hideLoading();
  //     }, 2000);
  //   }
  // }
};
</script>
<style lang="stylus" scoped>
.vue-highcharts
  border none 
  box-shadow none 
  margin 0
</style>
