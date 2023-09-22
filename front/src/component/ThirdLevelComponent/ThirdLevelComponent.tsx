import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import BreadCrumbComponent from '../../header/BreadCrumbComponent/BreadCrumbComponent';
import './ThirdLevelComponent.less';
import CaseDetail from './CaseDetail'

interface ThirdLevelComponentProps { }

const ThirdLevelComponent: FC<ThirdLevelComponentProps> = () => {
  return (
    <>
      <BreadCrumbComponent path={useLocation().pathname} />
      <CaseDetail />
    </>

  )
};

export default ThirdLevelComponent;
