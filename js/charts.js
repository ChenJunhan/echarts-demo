(function() {

  // 趋势图与曲线图切换
  $('.tab li').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $($(this).data('name')).siblings().css('display', 'none');
    $($(this).data('name')).css('display', 'block');

    if ($(this).data('name') == '#curve') {
      initCharts('heartRateCurveChart', options.heartRateCurveOption);
      initCharts('bloodPressureCurveChart', options.bloodPressureCurveOption);
      initCharts('bloodOxygenCurveChart', options.bloodOxygenCurveOption);
    }

  });;

  var heartRateData = [],      // 心率数据
      bloodPressureData = [],  // 血压数据
      bloodOxygenData = [];    // 血氧数据
  
  // 模拟数据
  for(var i = 10; i < 60; i++) {
    heartRateData.push(['2019-01-05 00:' + i + ':03', random(40, 60)]);
    bloodPressureData.push(['2019-01-05 00:' + i + ':03', random(120, 140)]);
    bloodOxygenData.push(['2019-01-05 00:' + i + ':03', random(90, 100)]);
  }

  var options = {

    // 心率趋势图
    heartRateTrendOption: {         
      tooltip: {                 // 提示框样式
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.7)',
        borderWidth: '1',
        borderColor :'#0096FF',
        textStyle:{
          color:'#464646'
        }
      },
      xAxis: {
        type: 'time',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLabel: {    //标签设置
            color: "rgba(70,70,70,0.6)",
            fontSize: "12",
            // 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
            formatter: function (value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var date = new Date(value);
                var hour =  date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
                var minute =  date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
                var texts = [hour,minute];
                return texts.join(':');
            }
        },
        axisLine: { //x轴颜色
            show: false,
            lineStyle: {
                color: "#fff"
            }
        }
      },
      //x轴分割
      dataZoom: [{
        type: 'inside',
        zoomLock:true,
        start: 0,
        end: 50
      }],
      //y轴
      yAxis: {
        type: 'value',
        show: true,
        min: 20,
        max: 200,
        splitNumber: 8,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,150,255,0.1)',
                width: 1
            }
        },
        axisLine: { //y轴颜色
            lineStyle: {
                color: "#fff"
            }
        },
        axisTick: {
            show: false //是否显示y轴刻度
        },
        axisLabel: { //强制显示
            interval: 0,
            textStyle: { //y轴标签颜色
                color: "rgba(70,70,70,0.6)"
            }
        }
      },
      //大小边距调整
      grid: {
        left: "10%",
        right: "5%",
        top: "10%",
        bottom: "20",
        containLabel: false
      },
      //数据
      series: [
        //心率
        {
          roam: 'move',
          name: '心率',
          type: 'line',        // 折线图
          symbol: 'circle',    // 小圆点标记
          data: heartRateData, // 动态data
          lineStyle:{
            width: 1
          },
          labelLine: {
            normal: {
                show: false
            }
          },
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1,
                type: 'solid',
                shadowColor : 'rgba(0,0,0,0)', //默认透明
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3
              },
              color: "#ea4a4a"  //颜色设置
            }
          }
        }
      ]
    },

    // 血压趋势图
    bloodPressureTrendOption: {         
      tooltip: {                 // 提示框样式
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.7)',
        borderWidth: '1',
        borderColor :'#0096FF',
        textStyle:{
          color:'#464646'
        }
      },
      xAxis: {
        type: 'time',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLabel: {    //标签设置
            color: "rgba(70,70,70,0.6)",
            fontSize: "12",
            // 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
            formatter: function (value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var date = new Date(value);
                var hour =  date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
                var minute =  date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
                var texts = [hour,minute];
                return texts.join(':');
            }
        },
        axisLine: { //x轴颜色
          show: false,
          lineStyle: {
              color: "#fff"
          }
        }
      },
      //x轴分割
      dataZoom: [{
        type: 'inside',
        zoomLock:true,
        start: 0,
        end: 50
      }],
      //y轴
      yAxis: {
        type: 'value',
        show: true,
        min: 40,
        max: 200,
        splitNumber: 8,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,150,255,0.1)',
                width: 1
            }
        },
        axisLine: { //y轴颜色
            lineStyle: {
                color: "#fff"
            }
        },
        axisTick: {
            show: false //是否显示y轴刻度
        },
        axisLabel: { //强制显示
            interval: 0,
            textStyle: { //y轴标签颜色
                color: "rgba(70,70,70,0.6)"
            }
        }
      },
      //大小边距调整
      grid: {
        left: "10%",
        right: "5%",
        top: "10%",
        bottom: "20",
        containLabel: false
      },
      //数据
      series: [
        // 高压
        {
          roam: 'move',
          name: '高压',
          type: 'line',        // 折线图
          symbol: 'circle',    // 小圆点标记
          data: bloodPressureData, // 动态data
          lineStyle:{
            width: 1
          },
          labelLine: {
            normal: {
                show: false
            }
          },
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1,
                type: 'solid',
                shadowColor : 'rgba(0,0,0,0)', //默认透明
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3
              },
              color: "#BB79FF"  //颜色设置
            }
          }
        },
        // 低压
        {
          roam: 'move',
          name: '低压',
          type: 'line',        // 折线图
          symbol: 'circle',    // 小圆点标记
          data: heartRateData, // 动态data
          lineStyle:{
            width: 1
          },
          labelLine: {
            normal: {
                show: false
            }
          },
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1,
                type: 'solid',
                shadowColor : 'rgba(0,0,0,0)', //默认透明
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3
              },
              color: "#ea4a4a"  //颜色设置
            }
          }
        }
      ]
    },

    // 血氧趋势图
    bloodOxygenTrendOption: {         
      tooltip: {                 // 提示框样式
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.7)',
        borderWidth: '1',
        borderColor :'#0096FF',
        textStyle:{
          color:'#464646'
        }
      },
      xAxis: {
        type: 'time',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLabel: {    //标签设置
            color: "rgba(70,70,70,0.6)",
            fontSize: "12",
            // 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
            formatter: function (value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var date = new Date(value);
                var hour =  date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
                var minute =  date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
                var texts = [hour,minute];
                return texts.join(':');
            }
        },
        axisLine: { //x轴颜色
            show: false,
            lineStyle: {
                color: "#fff"
            }
        }
      },
      //x轴分割
      dataZoom: [{
        type: 'inside',
        zoomLock:true,
        start: 0,
        end: 50
      }],
      //y轴
      yAxis: {
        type: 'value',
        show: true,
        min: 50,
        max: 100,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,150,255,0.1)',
                width: 1
            }
        },
        axisLine: { //y轴颜色
            lineStyle: {
                color: "#fff"
            }
        },
        axisTick: {
            show: false //是否显示y轴刻度
        },
        axisLabel: { //强制显示
            interval: 0,
            textStyle: { //y轴标签颜色
                color: "rgba(70,70,70,0.6)"
            }
        }
      },
      //大小边距调整
      grid: {
        left: "10%",
        right: "5%",
        top: "10%",
        bottom: "20",
        containLabel: false
      },
      //数据
      series: [
        // 血氧
        {
          roam: 'move',
          name: '血氧浓度(%)',
          type: 'line',        // 折线图
          symbol: 'circle',    // 小圆点标记
          data: bloodOxygenData, // 动态data
          lineStyle:{
            width: 1
          },
          labelLine: {
            normal: {
                show: false
            }
          },
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1,
                type: 'solid',
                shadowColor : 'rgba(0,0,0,0)', //默认透明
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3
              },
              color: "#ea4a4a"  //颜色设置
            }
          }
        }
      ]
    },

    // 心率曲线图
    heartRateCurveOption: {         
      xAxis: {
        type: 'time',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLabel: {    //标签设置
            color: "rgba(70,70,70,0.6)",
            fontSize: "12",
            // 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
            formatter: function (value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var date = new Date(value);
                var hour =  date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
                var minute =  date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
                var texts = [hour,minute];
                return texts.join(':');
            }
        },
        axisLine: { //x轴颜色
            show: false,
            lineStyle: {
                color: "#fff"
            }
        }
      },
      //y轴
      yAxis: {
        type: 'value',
        show: true,
        min: 20,
        max: 200,
        splitNumber: 8,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,150,255,0.1)',
                width: 1
            }
        },
        axisLine: { //y轴颜色
            lineStyle: {
                color: "#fff"
            }
        },
        axisTick: {
            show: false //是否显示y轴刻度
        },
        axisLabel: { //强制显示
            interval: 0,
            textStyle: { //y轴标签颜色
                color: "rgba(70,70,70,0.6)"
            }
        }
      },
      //大小边距调整
      grid: {
        left: "10%",
        right: "5%",
        top: "10%",
        bottom: "20",
        containLabel: false
      },
      //数据
      series: [
        //心率
        {
          roam: 'move',
          name: '心率',
          type: 'line',        // 折线图
          symbol: 'none',      // 取消小圆点标记
          data: heartRateData, // 动态data
          lineStyle:{
            width: 1
          },
          labelLine: {
            normal: {
                show: false
            }
          },
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1,
                type: 'solid',
                shadowColor : 'rgba(0,0,0,0)', //默认透明
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3
              },
              color: "#ea4a4a"  //颜色设置
            }
          }
        }
      ]
    },

    // 血压曲线图
    bloodPressureCurveOption: {         
      xAxis: {
        type: 'time',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLabel: {    //标签设置
            color: "rgba(70,70,70,0.6)",
            fontSize: "12",
            // 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
            formatter: function (value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var date = new Date(value);
                var hour =  date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
                var minute =  date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
                var texts = [hour,minute];
                return texts.join(':');
            }
        },
        axisLine: { //x轴颜色
          show: false,
          lineStyle: {
              color: "#fff"
          }
        }
      },
      //y轴
      yAxis: {
        type: 'value',
        show: true,
        min: 40,
        max: 200,
        splitNumber: 8,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,150,255,0.1)',
                width: 1
            }
        },
        axisLine: { //y轴颜色
            lineStyle: {
                color: "#fff"
            }
        },
        axisTick: {
            show: false //是否显示y轴刻度
        },
        axisLabel: { //强制显示
            interval: 0,
            textStyle: { //y轴标签颜色
                color: "rgba(70,70,70,0.6)"
            }
        }
      },
      //大小边距调整
      grid: {
        left: "10%",
        right: "5%",
        top: "10%",
        bottom: "20",
        containLabel: false
      },
      //数据
      series: [
        // 高压
        {
          roam: 'move',
          name: '高压',
          type: 'line',        // 折线图
          symbol: 'none',    // 取消小圆点标记
          data: bloodPressureData, // 动态data
          lineStyle:{
            width: 1
          },
          labelLine: {
            normal: {
                show: false
            }
          },
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1,
                type: 'solid',
                shadowColor : 'rgba(0,0,0,0)', //默认透明
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3
              },
              color: "#BB79FF"  //颜色设置
            }
          }
        },
        // 低压
        {
          roam: 'move',
          name: '低压',
          type: 'line',        // 折线图
          symbol: 'none',    // 小圆点标记
          data: heartRateData, // 动态data
          lineStyle:{
            width: 1
          },
          labelLine: {
            normal: {
                show: false
            }
          },
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1,
                type: 'solid',
                shadowColor : 'rgba(0,0,0,0)', //默认透明
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3
              },
              color: "#ea4a4a"  //颜色设置
            }
          }
        }
      ]
    },

    // 血氧趋势图
    bloodOxygenCurveOption: {         
      xAxis: {
        type: 'time',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLabel: {    //标签设置
            color: "rgba(70,70,70,0.6)",
            fontSize: "12",
            // 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
            formatter: function (value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var date = new Date(value);
                var hour =  date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
                var minute =  date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
                var texts = [hour,minute];
                return texts.join(':');
            }
        },
        axisLine: { //x轴颜色
            show: false,
            lineStyle: {
                color: "#fff"
            }
        }
      },
      //y轴
      yAxis: {
        type: 'value',
        show: true,
        min: 50,
        max: 100,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,150,255,0.1)',
                width: 1
            }
        },
        axisLine: { //y轴颜色
            lineStyle: {
                color: "#fff"
            }
        },
        axisTick: {
            show: false //是否显示y轴刻度
        },
        axisLabel: { //强制显示
            interval: 0,
            textStyle: { //y轴标签颜色
                color: "rgba(70,70,70,0.6)"
            }
        }
      },
      //大小边距调整
      grid: {
        left: "10%",
        right: "5%",
        top: "10%",
        bottom: "20",
        containLabel: false
      },
      //数据
      series: [
        // 血氧
        {
          roam: 'move',
          name: '血氧浓度(%)',
          type: 'line',        // 折线图
          symbol: 'none',    // 小圆点标记
          data: bloodOxygenData, // 动态data
          lineStyle:{
            width: 1
          },
          labelLine: {
            normal: {
                show: false
            }
          },
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1,
                type: 'solid',
                shadowColor : 'rgba(0,0,0,0)', //默认透明
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3
              },
              color: "#ea4a4a"  //颜色设置
            }
          }
        }
      ]
    },
  }

  initCharts('heartRateTrendChart', options.heartRateTrendOption);
  initCharts('bloodPressureTrendChart', options.bloodPressureTrendOption);
  initCharts('bloodOxygenTrendChart', options.bloodOxygenTrendOption);

  // 产生随机数
  function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
  }

  // 初始化echarts实例
  function initCharts(chartIdName, option) {
    var myChart = echarts.init(document.getElementById(chartIdName)); 
    myChart.setOption(option);   // 使用刚指定的配置项和数据显示图表。
  }
})();
