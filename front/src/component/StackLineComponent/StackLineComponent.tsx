import React, { FC, useState } from 'react';
import './StackLineComponent.less';
import EChartsReact from 'echarts-for-react';
import { EventParams, Org } from '../../types';
import getOrgs from '../../service/mockData/getOrgs';

interface StackLineComponentProps {}

const StackLineComponent: FC<StackLineComponentProps> = () => {
  const [orgs, setOrgs] = useState<Org[]>([])
  const [orgNames, setOrgNames] = useState<string[]>([])
  if (orgNames.length === 0) {
    let temp: string[] = []
      getOrgs.data.forEach((item:Org) => {
        if (temp.indexOf(item.name) === -1)
          {
            temp.push(item.name)
          }
        setOrgNames(temp)
      })
  }

  const option = {
    title: {
      text: 'Orgnaztion Statistics'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['orgnaztion visited times']
    },

    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: orgNames
    },
    yAxis: {
      type: 'value'
    },
    series: 
    [
      {
        name: 'orgnaztion visited times',
        type: 'line',
        stack: 'Total',
        data: 
        [120, 132, 101, 134, 90, 230, 210, 222, 23, 58]
      },
      // {
      //   name: 'Union Ads',
      //   type: 'line',
      //   stack: 'Total',
      //   data: [220, 182, 191, 234, 290, 330, 310]
      // },
      // {
      //   name: 'Video Ads',
      //   type: 'line',
      //   stack: 'Total',
      //   data: [150, 232, 201, 154, 190, 330, 410]
      // },
      // {
      //   name: 'Direct',
      //   type: 'line',
      //   stack: 'Total',
      //   data: [320, 332, 301, 334, 390, 330, 320]
      // },
      // {
      //   name: 'Search Engine',
      //   type: 'line',
      //   stack: 'Total',
      //   data: [820, 932, 901, 934, 1290, 1330, 1320]
      // }
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
      {orgNames.length > 0 && (<EChartsReact option={option}
        onEvents={onEvents}
      />)}
    </>
  )
}
export default StackLineComponent;
