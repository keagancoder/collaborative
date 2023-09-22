import EChartsReact from 'echarts-for-react';
import { FC } from 'react';
import './PieComponent.less';
import { EventParams } from '../../types';

interface PieComponentProps { }

const PieComponent: FC<PieComponentProps> = () => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
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

export default PieComponent;
