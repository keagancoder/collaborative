import EChartsReact from 'echarts-for-react';
import { FC } from 'react';
import { EventParams } from '../../types';
import './VerticalBarComponent.less';

interface VerticalBarComponentProps { }

const VerticalBarComponent: FC<VerticalBarComponentProps> = () => {
  const data: number[] = [];
  for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
  }

  const option = {
    xAxis: {
      max: 'dataMax'
    },
    yAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E'],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 2 // only the largest 3 bars will be displayed
    },
    series: [
      {
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data: data,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ],
    legend: {
      show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
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

export default VerticalBarComponent;
