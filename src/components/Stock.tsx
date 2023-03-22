import { FC, useState, useEffect } from "react";
import { Card, Typography, Statistic } from "antd";
import type { ISocketMessage } from "../interfaces/stock.interface";
import useWebSocket from "react-use-websocket";
import dayjs from "dayjs";
const { Title } = Typography;
export const Stock: FC = () => {
  const WS_URL = "wss://wstest.fxempire.com?token=btctothemoon";

  const [message, setMessages] = useState<ISocketMessage>({
    last: 0,
    change: 0,
    percentChange: 0,
    lastUpdate: new Date().toISOString(),
  });
  const [isNegative, setNegative] = useState(false);
  const { last, change, percentChange, lastUpdate } = message;

  const onMessage = (event: MessageEvent) => {
    const newMsg = JSON.parse(event.data);
    const stockData = newMsg["s-aapl"];
    setNegative(stockData.last > message.last);
    setMessages(stockData);
  };

  const { sendJsonMessage } = useWebSocket(WS_URL, {
    onMessage,
  });

  useEffect(() => {
    sendJsonMessage({ type: "SUBSCRIBE", instruments: ["s-aapl"] });
  }, [sendJsonMessage]);

  const color = isNegative ? "red" : "green";
  const arrow = isNegative ? "🡇" : "🡅";
  return (
    <Card>
      <Title>AAPL (Nasdaq - US)</Title>
      <Title color={color} level={2}> <b>{last}</b></Title>
        <Statistic
          value={change}
          precision={2}
          prefix={arrow}
          valueStyle={{ color: color }}
          suffix={`(${percentChange.toFixed(2)}%)`}
        />
      <Title level={3}>{dayjs(lastUpdate).format("DD/MM/YYYY hh:mm:ss")}</Title>
    </Card>
  );
};
