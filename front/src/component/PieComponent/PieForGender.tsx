import EChartsReact from 'echarts-for-react';
import { FC } from 'react';
import './PieComponent.less';
import { EventParams } from '../../types';

interface PieComponentProps { }

const PieForGender: FC<PieComponentProps> = () => {
  const option = {
    title: {
      text: 'Gender'
    },
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
          { value: 26, name: 'female' },
          { value: 29, name: 'male' },
          { value: 11, name: 'others' },
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

export default PieForGender;
