
import dayjs from "dayjs";
import { TimeStepsEnum } from "../interfaces/stock.interface";
const lastDay = dayjs().add(-1, "day").format("MM/DD/YYYY");
const today = dayjs().format("MM/DD/YYYY");

export const timeStepsMap = {
  [TimeStepsEnum.OneMinute]: {
    start: lastDay,
    end: today,

    period: "1",
    format: (date: string) => dayjs(date).format("HH:mm"),
  },
  [TimeStepsEnum.FiveMinutes]: {
    start: lastDay,
    end: today,

    period: "5",
    format: (date: string) => dayjs(date).format("HH:mm"),
  },
  [TimeStepsEnum.OneHour]: {
    start: lastDay,
    end: today,

    period: "60",
    format: (date: string) => dayjs(date).format("HH:mm"),
  },
  [TimeStepsEnum.OneWeek]: {
    start: dayjs().add(-30, "day").format("MM/DD/YYYY"),
    end: today,

    period: "10080",
    format: (date: string) => dayjs(date).format("MM/DD/YYYY"),
  },
};