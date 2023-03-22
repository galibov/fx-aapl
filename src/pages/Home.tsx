import { FC, useEffect } from "react";
import { Chart } from "../components/Chart";
import { HistoryTable } from "../components/HistoryTable";
import { Stock } from "../components/Stock";
import { Tabs, Col, Row } from "antd";
import type { TabsProps } from "antd";
import { TimeSteps } from "../components/TimeSteps";
import { TimeStepsEnum } from "../interfaces/stock.interface";
import { useLazyGetChartDataQuery } from "../api";
import { timeStepsMap } from "../utils/timeMap";


export const Home: FC = () => {
  const [getChartData, { data }] = useLazyGetChartDataQuery();
  const components: TabsProps["items"] = [
    {
      key: "chart",
      label: "Chart",
      children: <Chart chartData={data} />,
    },
    {
      key: "historyTable",
      label: "History",
      children: <HistoryTable tableData={data} />,
    },
  ];

  const handleStepClick = (value: TimeStepsEnum) => {
    getChartData({
      period: timeStepsMap[value].period,
      startTime: timeStepsMap[value].start,
      endTime: timeStepsMap[value].end,
    }).catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    getChartData({
      period: timeStepsMap[TimeStepsEnum.OneMinute].period,
      startTime: timeStepsMap[TimeStepsEnum.OneMinute].start,
      endTime: timeStepsMap[TimeStepsEnum.OneMinute].end,
    })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Row justify={"center"}>
        <Col className="center" span={8}>
          <Stock />
        </Col>
      </Row>
      <br />
      <Row justify={"center"}>
        <Col className="center" span={12}>
          <TimeSteps onStepClick={handleStepClick} />
        </Col>
      </Row>
      <br />
      <Row justify={"center"}>
        <Col className="center" span={12}>
          <Tabs defaultActiveKey="1" items={components} />
        </Col>
      </Row>
    </div>
  );
};
