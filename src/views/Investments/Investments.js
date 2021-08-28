// import React from 'react';

// export default function Investemnts() {
//   // eslint-disable-next-line react/react-in-jsx-scope
//   return (
//   <div>
//       HELLO
//   </div>
//   );
// }

import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Charts, ChartContainer, ChartRow, YAxis, LineChart } from "react-timeseries-charts";
import { TimeSeries, TimeRange } from "pondjs";


// IgrFinancialChartModule.register();

export default function Investments() {
    var yahooFinance = require('yahoo-finance');

    const data = {
        name: "traffic",
        columns: ["time", "in", "out"],
        points: [
            [1400425947000, 52, 41],
            [1400425948000, 18, 45],
            [1400425949000, 26, 49],
            [1400425950000, 93, 81],
        ]
    };
    
    const series1 = new TimeSeries(data);

    const series2 = new TimeSeries(data);



//     useEffect(() => {
//         var SYMBOL = 'AAPL';

// yahooFinance.historical({
//   symbol: SYMBOL,
//   from: '2012-01-01',
//   to: '2012-12-31',
//   period: 'd'
// }).then(function (quotes) {
//     console.log(quotes)
// //   console.log(util.format(
// //     '=== %s (%d) ===',
// //     SYMBOL,
// //     quotes.length
// //   ).cyan);
// //   if (quotes[0]) {
// //     console.log(
// //       '%s\n...\n%s',
// //       JSON.stringify(quotes[0], null, 2),
// //       JSON.stringify(quotes[quotes.length - 1], null, 2)
// //     );
// //   } else {
// //     console.log('N/A');
// //   }
// });
//       }, []);
    

    
        return (
        <div className="container sample" >
            <ChartContainer timeRange={series1.timerange()} width={800}>
    <ChartRow height="200">
        <YAxis id="axis1" label="AUD" min={0.5} max={1.5} width="60" type="linear" format="$,.2f"/>
        <Charts>
            <LineChart axis="axis1" series={series1}/>
            <LineChart axis="axis2" series={series2}/>
        </Charts>
        <YAxis id="axis2" label="Euro" min={0.5} max={1.5} width="80" type="linear" format="$,.2f"/>
    </ChartRow>
</ChartContainer>
        </div>
        );
    }

  

