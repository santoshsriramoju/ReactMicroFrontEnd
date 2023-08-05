
import * as echarts from 'echarts';

var myChart = echarts.init(document.getElementById('linechart-dev'));

myChart.setOption({
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150],
      type: 'line'
    }
  ]
  });