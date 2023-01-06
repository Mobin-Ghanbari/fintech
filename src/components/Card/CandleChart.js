import React from "react";
import { Card, CardBody } from "reactstrap";
import {
  VictoryAxis,
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
} from "victory";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
function Candle() {
  return (
    <Card className="my-4 rounded-3 shadow border-0">
      <TradingViewWidget
        symbol="NASDAQ:AAPL"
        theme={Themes.LIGHT}
        locale="fr"
        width="100%"
        height="380"
      />
    </Card>
  );
}

export default Candle;
