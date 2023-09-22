import EChartsReact from 'echarts-for-react';
import { FC } from 'react';
import { EventParams } from '../../types';
import './HorizonBarComponent.less';

interface HorizonBarComponentProps { }

const HorizonBarForAge: FC<HorizonBarComponentProps> = () => {

  const option = {
    title: {
      text: 'Age'
    },
    xAxis: {
      type: 'category',
      data: ['(0,20]', '(20,30]', '(30,40]', '(40,50]', '(50,60]', '(60,70]', '(700,120]']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [3, 14, 16, 3, 4, 1, 1],
        type: 'bar'
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

export default HorizonBarForAge;
