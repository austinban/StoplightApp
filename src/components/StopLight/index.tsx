import { useEffect, useState } from 'react'
import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

export type Color = 'red' | 'yellow' | 'green'
export interface LightObject {
  colors?: Color[]
  time: number
}

type OwnProps = {
  lights: LightObject[]
  lightSchema?: Color[]
}

const colorArray: Color[] = ['green', 'yellow', 'red']

const StopLight = ({ lights, lightSchema = colorArray }: OwnProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      incrementLight()
    }, lights[activeIndex].time)

    return () => clearTimeout(timeout)
  }, [activeIndex])

  const incrementLight = () =>
    setActiveIndex((prevState) => (prevState + 1) % lights.length)

  const renderLight = (color: Color) => (
    <div
      key={color}
      className={cx('light', color, {
        active: lights[activeIndex]?.colors?.includes(color),
      })}
    />
  )

  return (
    <div className={cx('wrapper')}>
      {lightSchema.map((c) => renderLight(c))}
    </div>
  )
}

export default StopLight
