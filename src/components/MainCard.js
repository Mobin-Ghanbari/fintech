import React from "react";
import { Row, Col, Container } from "reactstrap";
import Candle from "./Card/CandleChart";
import Activity from "./Card/Activity";
import AnalystSetting from "./Card/AnalystSetting";
import CoinWorth from "./Card/coinWorth/CoinWorth";
import MemberCard from "./Card/memberCard/MemberCard";
import Portfoli from "./Card/Portfoli";
import SignalCard from "./Card/SignalCard";
import WelcomeCard from "./Card/WelcomeCard";
import Chat from "./chat/Chat";
import BarCard from "./Card/barCard/BarCard";
import RecentOrder from "./Card/orders/RecentOrder";

function MainCard() {
  return (
    <Container fluid className="bg-light">
      <Container className="pt-3">
        <div className="fw-bold fs-6 mb-3 ms-2">Dashboard</div>
        <Row className="d-flex flex-wrap ">
          <Col xl="4">
            <WelcomeCard />
            <Portfoli />
            <Activity />
          </Col>
          <Col xl="8">
            <Row>
              <SignalCard />
            </Row>
            <BarCard />
            <Candle />
          </Col>
        </Row>
        <Row className="gy-3">
          <Col xl="4">
            <MemberCard />
          </Col>
          <Col xl="4">
            <Chat />
          </Col>
          <Col xl="4">
            <AnalystSetting />
          </Col>
        </Row>
        <Row>
          <Col>
            <CoinWorth />
          </Col>
        </Row>
        <Row>
          <Col>
            <RecentOrder />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MainCard;
