//
// $(function () {
//     var myChart1 = echarts.init(document.getElementById('echarts_1'));
//
//     echarts_1();
//
//     function getpie1() {
//         $.ajax({
//             method: 'post',
//             data: {},
//             url: 'http://localhost:8080/005pie1',
//             dataType: 'json',
//             success: function (result) {
//                 // var pieData = eval("("+result+")");
//                 console.log(result);
//                 myChart1.setOption(
//                     option = {
//                         backgroundColor: 'rgba(0,0,0,0)',
//                         tooltip: {
//                             trigger: 'item',
//                             formatter: "{b}: <br/>{c} ({d}%)"
//                         },
//                         color: ['#af89d6', '#4ac7f5', '#0089ff', '#f36f8a', '#f5c847'],
//                         legend: { //图例组件，颜色和名字
//                             x: '70%',
//                             y: 'center',
//                             orient: 'vertical',
//                             itemGap: 12, //图例每项之间的间隔
//                             itemWidth: 10,
//                             itemHeight: 10,
//                             icon: 'rect',
//                             data: [result[0].name,result[1].name,result[2].name],
//                             textStyle: {
//                                 color: [],
//                                 fontStyle: 'normal',
//                                 fontFamily: '微软雅黑',
//                                 fontSize: 12,
//                             }
//                         },
//                         series: [{
//                             name: '行业占比',
//                             type: 'pie',
//                             clockwise: false, //饼图的扇区是否是顺时针排布
//                             minAngle: 20, //最小的扇区角度（0 ~ 360）
//                             center: ['35%', '50%'], //饼图的中心（圆心）坐标
//                             radius: [25,45], //饼图的半径
//                             avoidLabelOverlap: true, ////是否启用防止标签重叠
//                             itemStyle: { //图形样式
//                                 normal: {
//                                     borderColor: '#1e2239',
//                                     borderWidth: 2,
//                                 },
//                             },
//                             label: { //标签的位置
//                                 normal: {
//                                     show: true,
//                                     position: 'inside', //标签的位置
//                                     formatter: "{d}%",
//                                     textStyle: {
//                                         color: '#fff',
//                                     }
//                                 },
//                                 emphasis: {
//                                     show: true,
//                                     textStyle: {
//                                         fontWeight: 'bold'
//                                     }
//                                 }
//                             },
//                             data:result
//                         }, {
//                             name: '',
//                             type: 'pie',
//                             clockwise: false,
//                             silent: true,
//                             minAngle: 20, //最小的扇区角度（0 ~ 360）
//                             center: ['35%', '50%'], //饼图的中心（圆心）坐标
//                             radius: [0, 40], //饼图的半径
//                             itemStyle: { //图形样式
//                                 normal: {
//                                     borderColor: '#1e2239',
//                                     borderWidth: 1.5,
//                                     opacity: 0.21,
//                                 }
//                             },
//                             label: { //标签的位置
//                                 normal: {
//                                     show: false,
//                                 }
//                             },
//                             data: result
//                         }]
//                     }
//
//                 );
//
//             }
//
//         })
//     }
//     function echarts_1() {
//         // 基于准备好的dom，初始化echarts实例
//         // var myChart = echarts.init(document.getElementById('echarts_1'));
//         console.log("1");
//         getpie1();
//         // 使用刚指定的配置项和数据显示图表。
//         //myChart.setOption(option);
//         window.addEventListener("resize",function(){
//             myChart1.resize();
//         });
//     }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// })
//
