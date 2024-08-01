import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '25/07/2024', receipt: 2000 },
    { date: '26/07/2024', receipt: 800 },
    { date: '27/07/2024', receipt: 1000 },
    { date: '28/07/2024', receipt: 1500 },
    { date: '29/07/2024', receipt: 1200 },
    { date: '30/07/2024', receipt: 1800 },
    { date: '31/07/2024', receipt: 2000 },
  ])
})
