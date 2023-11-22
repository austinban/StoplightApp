import React, { useState } from 'react'
import Header from 'components/Header'
import Button from 'components/Button'
import StopLight, { LightObject, Color } from 'components/StopLight'
import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

const lightSequence: LightObject[] = [
  { colors: ['green'], time: 3000 },
  { colors: ['yellow'], time: 1000 },
  { colors: ['red'], time: 2000 },
]

const emergencyLightSequence: LightObject[] = [
  { colors: ['red'], time: 1000 },
  { time: 1000 },
]

const christmasSequence: LightObject[] = [
  { colors: ['green'], time: 200 },
  { colors: ['yellow'], time: 200 },
  { colors: ['red'], time: 200 },
  { colors: ['green'], time: 200 },
  { colors: ['yellow'], time: 200 },
  { colors: ['red'], time: 200 },
  { time: 500 },
  { colors: ['green', 'red'], time: 1000 },
  { time: 500 },
  { colors: ['green', 'red'], time: 1000 },
  { time: 500 },
]

const christmasSchema: Color[] = [
  'green',
  'green',
  'green',
  'yellow',
  'yellow',
  'yellow',
  'red',
  'red',
  'red',
]

function App() {
  const [activeSequence, setActiveSequence] = useState(lightSequence)

  const toggleSequence = (sequence: LightObject[]) => {
    activeSequence === sequence
      ? setActiveSequence(lightSequence)
      : setActiveSequence(sequence)
  }

  const getSchema = (): Color[] | undefined =>
    activeSequence === christmasSequence ? christmasSchema : undefined

  const renderButtons = () => (
    <>
      <Button
        type={
          activeSequence === emergencyLightSequence ? 'secondary' : undefined
        }
        onClick={() => toggleSequence(emergencyLightSequence)}
      >
        Emergency
      </Button>
      <Button
        type={activeSequence === christmasSequence ? 'secondary' : undefined}
        onClick={() => toggleSequence(christmasSequence)}
      >
        Merry Christmas
      </Button>
    </>
  )

  return (
    <Header fullHeight>
      <div className={cx('wrapper')}>
        <StopLight
          key={JSON.stringify(activeSequence) + JSON.stringify(getSchema())}
          lightSchema={getSchema()}
          lights={activeSequence}
        />
        {renderButtons()}
      </div>
    </Header>
  )
}

export default App
