export interface IChartData {
    Close: number;
    Date: string;
    High: number;
    Low: number;
    Open: number;
    StartDate: string;
    StartTime: string;
    Volume: number;
}

export interface ISocketMessage {
    last: number;
    change: number;
    percentChange: number;
    lastUpdate: string;
}

export interface IStockParams {
    startTime: string,
    endTime: string,
    period: string
}

export enum TimeStepsEnum {
    OneMinute = "1_minute",
    FiveMinutes = "5_minutes",
    OneHour = "1_hour",
    OneWeek = "1_week",
}