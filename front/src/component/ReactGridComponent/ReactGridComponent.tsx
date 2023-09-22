import _ from 'lodash'
import { FC, useEffect, useState } from 'react'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap'
import { Layout, Layouts, Responsive, WidthProvider } from 'react-grid-layout'
import HorizonBarComponent from '../HorizonBarComponent/HorizonBarComponent'
import PieComponent from '../PieComponent/PieComponent'
import StackLineComponent from '../StackLineComponent/StackLineComponent'
import VerticalBarComponent from '../VerticalBarComponent/VerticalBarComponent'
import './ReactGridComponent.less'
import BreadCrumbComponent from '../../header/BreadCrumbComponent/BreadCrumbComponent'
import { useLocation } from 'react-router-dom'
import SecondHorizonBarComponent from '../SecondHorizonBarComponent/SecondHorizonBarComponent'
import PieForGender from '../PieComponent/PieForGender'
import HorizonBarForAge from '../HorizonBarComponent/HorizonBarForAge'

interface ReactGridComponentProps {
  domElements: any[]
  className?: string
  rowHeight?: number
  onLayoutChange?: (currentLayout: Layout[], layouts: Layouts) => void
  cols?: any
  breakpoints?: any
}

const ReactGridComponent: FC<ReactGridComponentProps> = (props: ReactGridComponentProps) => {
  const location = useLocation()
  const ResponsiveReactGridLayout = WidthProvider(Responsive)
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>("lg")
  const [compactType, setCompactType] = useState<string | null>("vertical")
  const [mounted, setMounted] = useState(false)
  const [toolbox, setToolbox] = useState<{ [index: string]: any[] }>({
    lg: []
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const onBreakpointChange = (breakpoint: any) => {
    setCurrentBreakpoint(breakpoint)
    setToolbox({
      ...toolbox,
      [breakpoint]: toolbox[breakpoint] || toolbox[currentBreakpoint] || []
    })
  }

  const onCompactTypeChange = () => {
    let oldCompactType = ""

    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
          ? null
          : "horizontal"
    setCompactType(compactType)
  }

  const [count, setCount] = useState<number>(4)
  const [layouts, setLayouts] = useState<ReactGridLayout.Layouts>({
    lg: _.map(_.range(0,4), function (i, list) {
      return {
        x: i%2,
        y: 0,
        w: 1,
        h: 1,
        i: i.toString()
      }
    })
  })

  const [map, setMap] = useState(new Map([
    [0, 'Gender'],
    [1, 'Age'],
    [2, 'D'],
    [3, 'B'],
    [4, 'Gender'],
    [5, 'Age']
  ]) )
  const updateMap = (k: number, v: string) => {
    setMap(new Map(map.set(k, v)))
  }

  const onLayoutChange = (currentLayout: Layout[], layouts: Layouts) => {
    //
  }

  const onAddItemA = () => {
    onAddItem()
    updateMap(count, "A")
  }

  const showGenderPie = () => {
    onAddItem()
    updateMap(count, "Gender")
  }

  const showAgeChart = () => {
    onAddItem()
    updateMap(count, "Age")
  }

  const onAddItemB = () => {
    onAddItem()
    updateMap(count, "B")
  }

  const onAddItemC = () => {
    onAddItem()
    updateMap(count, "C")
  }
  const onAddItemD = () => {
    onAddItem()
    updateMap(count, "D")
  }

  const onAddItem = () => {
    setLayouts({
      lg: [...layouts.lg, {
        w: 1,
        h: 1,
        x: (count) % 2,
        y: 1,
        i: `${count + 1}`
      }]
    })

    setCount(count + 1)
  }

  return (
    <>
      <BreadCrumbComponent path={useLocation().pathname}/>
      <div>
      <Dropdown as={ButtonGroup}>
        <Button >...</Button>

        <Dropdown.Toggle split id="dropdown-split-basic" />

        <Dropdown.Menu variant='dark'>
          <Dropdown.Item onClick={showGenderPie}>Gender</Dropdown.Item>
          <Dropdown.Item onClick={showAgeChart}>Age</Dropdown.Item>
          <Dropdown.Item onClick={showAgeChart}>chart3</Dropdown.Item>
          <Dropdown.Item onClick={onAddItemB}>Orgnazition</Dropdown.Item>
          <Dropdown.Item onClick={onAddItemD}>addSecondHorizonBar</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
    <div className="mb-4">
      <ResponsiveReactGridLayout
      {...props}
        layouts={layouts}
        measureBeforeMount={false}
        useCSSTransforms={true}
        preventCollision={!compactType}
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        isDraggable= {false}
        cols={{lg: 2, md: 2, sm: 2, xs: 2, xxs: 2 }}
      >
        {
          layouts['lg'].map((item, index) => {
            return (
              <div
                key={item.i}
              >
                {(!map.get(index) || 'A' === map.get(index)) && (<PieForGender />)}
                {'B' === map.get(index) && (<StackLineComponent />)}
                {'C' === map.get(index) && (<HorizonBarComponent />)}
                {'D' === map.get(index) && (<SecondHorizonBarComponent />)}
                {'Gender' === map.get(index) && (<PieForGender />)}
                {'Age' === map.get(index) && (<HorizonBarForAge />)}
              </div>
            )
          })
        }

      </ResponsiveReactGridLayout>
    </div>
    </>
  )
}
ReactGridComponent.defaultProps = {
  className: 'layout',
  rowHeight: 390,
  cols: { lg: 2, md: 2, sm: 2, xs: 2, xxs: 2 },
  breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }
}

export default ReactGridComponent
