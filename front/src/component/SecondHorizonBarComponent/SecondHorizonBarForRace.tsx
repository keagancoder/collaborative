import EChartsReact from 'echarts-for-react';
import { FC } from 'react';
import { EventParams } from '../../types';
import './SecondHorizonBarComponent.less';

interface SecondHorizonBarComponentProps { }

const SecondHorizonBarForRace: FC<SecondHorizonBarComponentProps> = () => {

  const option = {
      title: {
        text: 'Race'
      },
      xAxis: {
           type: 'category',
           data: ['Yellow', 'White', 'Black']
         },
         yAxis: {
           type: 'value'
         },
      series: [
        {
          type: 'bar',
          data: [3, 14, 16, 3, 4, 1, 1]
        },
        {
        type: 'line',
        data: [3, 14, 16, 3, 4, 1, 1]
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

export default SecondHorizonBarForRace;
