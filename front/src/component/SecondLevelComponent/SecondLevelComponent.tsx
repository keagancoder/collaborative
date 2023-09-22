import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import BreadCrumbComponent from '../BreadCrumbComponent/BreadCrumbComponent';
import './SecondLevelComponent.less';
import {
  Card,
  Col
} from 'antd';
import Table, {Operators, DateOperators} from '../table/Table';
import { data } from './SecondLevelComponentAPI';

interface SecondLevelComponentProps { 
  dataList: data[]
}

const SecondLevelComponent: FC<SecondLevelComponentProps> = () => {

  // state: SecondLevelComponentProps = {
  //   dataList: []
  // }
  return (
    <>
      <BreadCrumbComponent path={useLocation().pathname} />
      <div className="SecondLevelComponent">
        SecondLevelComponent Component

        <Card bordered={false}>
          
          <div>
            {/* <Table
            bordered
            freezeHeader={false}
            className=''
            key={''}
            // rowSelection={}
            rowKey={''}
            scroll={{x:"max-content"}}
            sticky={true}
            // components={}
            // dataSource={[]}
            pagination={false}
            // onChange={}
            showSorterTooltip={{mouseEnterDelay: 2}}
            ></Table> */}
          </div>

        </Card>
      </div>
    </>

  )
};

export default SecondLevelComponent;
