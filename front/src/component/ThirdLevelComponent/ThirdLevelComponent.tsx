import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import BreadCrumbComponent from '../../header/BreadCrumbComponent/BreadCrumbComponent';
import './ThirdLevelComponent.less';

interface ThirdLevelComponentProps { }

const ThirdLevelComponent: FC<ThirdLevelComponentProps> = () => {
  return (
    <>
      <BreadCrumbComponent path={useLocation().pathname} />
      <div className="ThirdLevelComponent">
        ThirdLevelComponent Component
      </div>
    </>

  )
};

export default ThirdLevelComponent;
