import React from 'react'
import { Card, CardBody } from 'reactstrap'
import {
  VictoryAxis,
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme
} from 'victory'

function Candle () {
  return (
    <Card className='my-4 rounded-3 shadow border-0'>
      <CardBody>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: 70 }}
          scale={{ x: 'time' }}
          width={840}
        >
          <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`} />
          <VictoryAxis dependentAxis domain={{ x: [0, 3], y: [0, 10] }} />
          <VictoryCandlestick
            candleColors={{ positive: '#09982D', negative: '#c43a31' }}
            data={[
              { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
              {
                x: new Date(2016, 6, 2),
                open: 10,
                close: 15,
                high: 20,
                low: 5
              },
              {
                x: new Date(2016, 6, 3),
                open: 15,
                close: 20,
                high: 22,
                low: 10
              },
              {
                x: new Date(2016, 6, 4),
                open: 20,
                close: 10,
                high: 25,
                low: 7
              },
              { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 }
            ]}
            candleWidth={5}
          />
        </VictoryChart>
      </CardBody>
    </Card>
  )
}

export default Candle
