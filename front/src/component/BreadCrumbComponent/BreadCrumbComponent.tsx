import { FC } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import './BreadCrumbComponent.less';

interface BreadCrumbComponentProps {
  path: string
}

const BreadCrumbComponent: FC<BreadCrumbComponentProps> = (prop: BreadCrumbComponentProps) => {
  //TODO add generic
  return (
    <div className="BreadCrumbComponent">
      <Breadcrumb>
        <Breadcrumb.Item href="/" active={'/' === prop.path}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="/secondLevel" active={'/secondLevel' === prop.path}>
          SecondLevelPage
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/thirdLevel" active={'/thirdLevel' === prop.path}>ThirdLevelPage</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
};

export default BreadCrumbComponent;
