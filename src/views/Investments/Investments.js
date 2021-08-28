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
// import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
// import StocksHistory from './StocksHistory';

IgrFinancialChartModule.register();

export default function Investments() {
    var yahooFinance = require('yahoo-finance');

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

    
    
    const data = [5, 6 , 7, 8, 8, 345 ,4,3 ,24, 2,22,424,4 , 24, 2,42,424 ,5,6]

    

    
        return (
        <div className="container sample" >
            <div className="container" >
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    thickness={2}
                    chartTitle="Google vs Microsoft Changes"
                    subtitle="Between 2013 and 2017"
                    yAxisMode="PercentChange"
                    yAxisTitle="Percent Changed"
                    negativeOutlines="rgb(213, 94, 0)"
                    negativeBrushes="Transparent"
                    brushes="Transparent"
                    zoomSliderType="None"
                    dataSource={data}/>
            </div>
        </div>
        );
    }

  

