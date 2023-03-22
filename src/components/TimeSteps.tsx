import { FC, useState } from "react";
import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import {TimeStepsEnum} from "../interfaces/stock.interface";

interface ITimeStepsProps {
  onStepClick: (value: TimeStepsEnum) => void;
}
export const TimeSteps: FC<ITimeStepsProps> = ({onStepClick}) => {
  const timeSteps = [
    {
      value: TimeStepsEnum.OneMinute,
      label: "1 Minute",
    },
    {
      value: TimeStepsEnum.FiveMinutes,
      label: "5 Minutes",
    },
    {
      value: TimeStepsEnum.OneHour,
      label: "1 Hour",
    },
    {
      value: TimeStepsEnum.OneWeek,
      label: "1 Week",
    },
  ];
  const [timeStep, setTimeStep] = useState(timeSteps[0].value);

  const stepChanged = ({ target: { value } }: RadioChangeEvent) => {
    setTimeStep(value);
    if (value) {
      onStepClick(value.toString());
    }
  };
  return (
    <div>
      <Radio.Group
        options={timeSteps}
        onChange={stepChanged}
        value={timeStep}
        optionType="button"
      />
    </div>
  );
};
