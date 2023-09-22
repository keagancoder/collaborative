import React, { FC } from 'react';
import './SecondHorizonBarComponent.less';
import EChartsReact from 'echarts-for-react';
import { EventParams } from '../../types';

interface SecondHorizonBarComponentProps {}

// it is the same as HorizonBarComponent !!!
const SecondHorizonBarComponent: FC<SecondHorizonBarComponentProps> = () => {
  const categories = (function () {
    let now = new Date();
    let res = [];
    let len = 10;
    while (len--) {
      res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
      now = new Date(+now - 2000);
    }
    return res;
  })();
  const categories2 = (function () {
    let res = [];
    let len = 10;
    while (len--) {
      res.push(10 - len - 1);
    }
    return res;
  })();
  const data: number[] = (function () {
    let res = [];
    let len = 10;
    while (len--) {
      res.push(Math.round(Math.random() * 1000));
    }
    return res;
  })();
  const data2: number[] = (function () {
    let res = [];
    let len = 0;
    while (len < 10) {
      res.push(+(Math.random() * 10 + 5).toFixed(1));
      len++;
    }
    return res;
  })();

  const option = {
    title: {
      text: 'Dynamic Data'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: categories
      },
      {
        type: 'category',
        boundaryGap: true,
        data: categories2
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: 'Price',
        max: 30,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      {
        type: 'value',
        scale: true,
        name: 'Order',
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name: 'Dynamic Bar',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data
      },
      {
        name: 'Dynamic Line',
        type: 'line',
        data: data2
      }
    ]
  };

  const onChartClick = (params: EventParams) => {
    switch (params.name) {
      case 'Email':
        //TODO add new page
        console.log('jumping..')
        break
      case 'Search Engine':
        //TODO add new page
        console.log('jumping...')
        break
      default:
        break
    }
  }

  const onEvents = {
    click: onChartClick
  }
  return (
    <>
      <EChartsReact option={option}
        onEvents={onEvents}
      />
    </>
  )
};

export default SecondHorizonBarComponent;
