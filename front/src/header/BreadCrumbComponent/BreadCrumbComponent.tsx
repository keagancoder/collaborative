import { FC } from 'react'
import { Breadcrumb, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { BsFillClipboard2DataFill, BsFillGrid3X2GapFill, BsFillHouseFill } from 'react-icons/bs'
import './BreadCrumbComponent.less'

interface BreadCrumbComponentProps {
  path: string
}

interface ToolTipProps {
  comment: string
}
const tooltip = (props: ToolTipProps) =>
(<Tooltip id="tooltip">
  {props.comment}
</Tooltip>)
  
const BreadCrumbComponent: FC<BreadCrumbComponentProps> = (prop: BreadCrumbComponentProps) => {
  //TODO add generic
  return (
    <div className="BreadCrumbComponent">
      <Breadcrumb>
        <OverlayTrigger placement="bottom" overlay={tooltip({ comment: 'Homepage' })}  >
          <Breadcrumb.Item href="/" active={'/' === prop.path}>
            <BsFillHouseFill />
          </Breadcrumb.Item>
        </OverlayTrigger>

        {('/thirdLevel' === prop.path || '/secondLevel' === prop.path) && (
          <OverlayTrigger placement="bottom" overlay={tooltip({ comment: 'PersonalGrid' })}  >
            <Breadcrumb.Item href="/secondLevel" active={'/secondLevel' === prop.path}>
              <BsFillGrid3X2GapFill />
            </Breadcrumb.Item>
          </OverlayTrigger>
        )
        }

        {'/thirdLevel' === prop.path && (
          <OverlayTrigger placement="bottom" overlay={tooltip({ comment: 'PersonalForm' })}  >
            <Breadcrumb.Item href="/thirdLevel" active={'/thirdLevel' === prop.path}><BsFillClipboard2DataFill /></Breadcrumb.Item>
          </OverlayTrigger>
        )
        }
      </Breadcrumb>
    </div>
  )
}

export default BreadCrumbComponent
