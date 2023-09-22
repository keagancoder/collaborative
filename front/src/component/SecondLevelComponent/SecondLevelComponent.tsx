import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import BreadCrumbComponent from '../BreadCrumbComponent/BreadCrumbComponent';
import './SecondLevelComponent.less';

interface SecondLevelComponentProps { }

const SecondLevelComponent: FC<SecondLevelComponentProps> = () => {
  return (
    <>
      <BreadCrumbComponent path={useLocation().pathname} />
      <div className="SecondLevelComponent">
        SecondLevelComponent Component
      </div>
    </>

  )
};

export default SecondLevelComponent;
