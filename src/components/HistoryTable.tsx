import { FC } from "react";
import { Table, Typography } from "antd";
import type { IChartData } from "../interfaces/stock.interface";
import type { ColumnsType } from "antd/es/table";
const { Title } = Typography;
interface IHistoryTable {
  tableData: IChartData[];
}
export const HistoryTable: FC<IHistoryTable> = ({tableData}) => {
  const columns: ColumnsType<IChartData> = [
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
      sorter: (a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime(),
    },
    {
      title: "Open",
      dataIndex: "Open",
      key: "Open",
      align: "center",
    },
    {
      title: "High",
      dataIndex: "High",
      key: "High",
      align: "center",
    },
    {
      title: "Low",
      dataIndex: "Low",
      key: "Low",
      align: "center",
    },
  ];

  return (
    <div>
      <Title>History AAPL</Title>
      <Table
        rowKey="Date"
        dataSource={tableData}
        pagination={{ pageSize: 10 }}
        columns={columns}
      />
    </div>
  );
};
