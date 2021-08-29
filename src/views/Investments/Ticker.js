import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { Charts, ChartContainer, ChartRow, YAxis, LineChart } from "react-timeseries-charts";
import { TimeSeries, TimeRange } from "pondjs";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Indicators from "highcharts/indicators/indicators-all.js";
import DragPanes from "highcharts/modules/drag-panes.js";
import AnnotationsAdvanced from "highcharts/modules/annotations-advanced.js";
import PriceIndicator from "highcharts/modules/price-indicator.js";
import FullScreen from "highcharts/modules/full-screen.js";
import StockTools from "highcharts/modules/stock-tools.js";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import Button from "@material-ui/core/Button";
import axios from 'axios';
import moment from 'moment'



// init the module
Indicators(Highcharts);
DragPanes(Highcharts);
AnnotationsAdvanced(Highcharts);
PriceIndicator(Highcharts);
FullScreen(Highcharts);
StockTools(Highcharts);

export default function Ticker() {
    // eslint-disable-next-line react/react-in-jsx-scope
    const [textFieldValue, setTextFieldValue] = useState('');
    const [startDate, setStartDate] = useState("03/21/2018");
    const [endDate, setEndDate] = useState("03/24/2021");

    const [stockData, setStockData] = useState(null);

    const handleStartDateChange = (e) => {
        const beginDate = moment(e).format('MM/DD/YYYY')
        console.log(e);
        setStartDate(beginDate);
    }

    const handleEndDateChange = (e) => {
        const endingDate = moment(e).format('MM/DD/YYYYY')
        console.log(e);
        setEndDate(endingDate);
    }


    const handleSubmit = (e) => {
        const dict = {
            "ticker": textFieldValue,
            "start": startDate,
            "end": endDate
        }
        if (startDate > endDate) {
            return;
        }
        e.preventDefault();
        axios.post("http://api.day-zero.xyz/stock", dict)
    .then(response => {
        console.log(response.data)
        console.log(response.data[0])
        const data = JSON.parse(response.data)
        console.log(data);
        console.log(data["pricing"])
        console.log(data.pricing)
        var ohlc = [],
        volume = [],
        groupingUnits = [
          [
            "week", // unit name
            [1] // allowed multiples
          ],
          ["month", [1, 2, 3, 4, 6]]
        ],
        i = 0;

        // setStockData(response.data["pricing"]);
        // console.log(response.data["pricing"])
        const dataLength = data["pricing"].length;
      
      for (i; i < dataLength; i += 1) {
        ohlc.push([
          stockData[i][0], // the date
          stockData[i][1], // open
          stockData[i][2], // high
          stockData[i][3], // low
          stockData[i][4] // close
        ]);
      
        volume.push([
            stockData[i][0], // the date
            stockData[i][5] // the volume
        ]);
      }
      const options = {
        rangeSelector: {
          selected: 1
        },
      
        title: {
          text: textFieldValue + " stock"
        },
      
        yAxis: [
          {
            labels: {
              align: "right",
              x: -3
            },
            title: {
              text: "OHLC"
            },
            height: "60%",
            lineWidth: 2,
            resize: {
              enabled: true
            }
          },
          {
            labels: {
              align: "right",
              x: -3
            },
            title: {
              text: "Volume"
            },
            top: "65%",
            height: "35%",
            offset: 0,
            lineWidth: 2
          }
        ],
      
        tooltip: {
          split: true
        },
      
        series: [
          {
            type: "candlestick",
            name: "AAPL",
            data: ohlc,
            dataGrouping: {
              units: groupingUnits
            }
          },
          {
            type: "column",
            name: "Volume",
            data: volume,
            yAxis: 1,
            dataGrouping: {
              units: groupingUnits
            }
          }
        ]
    };
    setStockData(options);

    });
    }
    return <div>
        <div>
            <form onSubmit = {handleSubmit}>
                <TextField value={textFieldValue} onChange={(e) => setTextFieldValue(e.target.value) } label = "Ticker (Eg: GOOGL)"/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={startDate}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

    <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={endDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
    <Button className = "primary" onClick = {handleSubmit}>Submit</Button>
            </form>
        </div>{stockData === null ? null : <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={stockData}
    />}
    
  </div>
  }
  