import { FC } from 'react'
import { Breadcrumb, Image, OverlayTrigger, Tooltip } from 'react-bootstrap'
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
            <BsFillHouseFill fontSize={'25px'}/>
          </Breadcrumb.Item>
        </OverlayTrigger>

        {
        // ('/detail' === prop.path || '/sumbit' === prop.path) && 
        (
          <OverlayTrigger placement="bottom" overlay={tooltip({ comment: 'personal detail' })}  >
            <Breadcrumb.Item href="/detail" active={'/detail' === prop.path}>
              <BsFillGrid3X2GapFill fontSize={'25px'}/>
            </Breadcrumb.Item>
          </OverlayTrigger>
        )
        }

        {
        // '/sumbit' === prop.path && 
        (
          <OverlayTrigger placement="bottom" overlay={tooltip({ comment: 'sumbit form' })}  >
            <Breadcrumb.Item href="/sumbit" active={'/sumbit' === prop.path}>
              <BsFillClipboard2DataFill fontSize={'25px'}/>
              </Breadcrumb.Item>
          </OverlayTrigger>
        )
        }
      </Breadcrumb>
    </div>
  )
}

export default BreadCrumbComponent
