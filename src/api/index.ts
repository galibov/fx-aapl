import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type { IChartData, IStockParams } from '../interfaces/stock.interface';
import dayjs from 'dayjs';
const BASE_URL = 'https://fxempire.com/api/v1/en/stocks/chart';
export const fxApi = createApi({
  reducerPath: 'stockApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (builder) => ({
      getChartData: builder.query<IChartData[], IStockParams>(
          {
              query: ({period, startTime, endTime}) => ({
                  url: `/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${period}&Precision=Minutes&StartTime=${startTime}&EndTime=${endTime}%${dayjs().format(
                    "YYYY"
                  )}:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`,
                  method: 'GET',
              }),
          },
      ),
  }),
});

export const {useLazyGetChartDataQuery} = fxApi;
