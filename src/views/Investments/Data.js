import React, {useEffect} from 'react';
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

// init the module
Indicators(Highcharts);
DragPanes(Highcharts);
AnnotationsAdvanced(Highcharts);
PriceIndicator(Highcharts);
FullScreen(Highcharts);
StockTools(Highcharts);

var data = [
    [1491226200000, 143.71, 144.12, 143.05, 143.7, 19985700],
    [1491312600000, 143.25, 144.89, 143.17, 144.77, 19891400],
    [1491399000000, 144.22, 145.46, 143.81, 144.02, 27717900],
    [1491485400000, 144.29, 144.52, 143.45, 143.66, 21149000],
    [1491571800000, 143.73, 144.18, 143.27, 143.34, 16672200],
    [1491831000000, 143.6, 143.88, 142.9, 143.17, 18933400],
    [1491917400000, 142.94, 143.35, 140.06, 141.63, 30379400],
    [1492003800000, 141.6, 142.15, 141.01, 141.8, 20350000],
    [1492090200000, 141.91, 142.38, 141.05, 141.05, 17822900],
    [1492435800000, 141.48, 141.88, 140.87, 141.83, 16582100],
    [1492522200000, 141.41, 142.04, 141.11, 141.2, 14697500],
    [1492608600000, 141.88, 142, 140.45, 140.68, 17328400],
    [1492695000000, 141.22, 142.92, 141.16, 142.44, 23319600],
    [1492781400000, 142.44, 142.68, 141.85, 142.27, 17320900],
    [1493040600000, 143.5, 143.95, 143.18, 143.64, 17134300],
    [1493127000000, 143.91, 144.9, 143.87, 144.53, 18871500],
    [1493213400000, 144.47, 144.6, 143.38, 143.68, 20041200],
    [1493299800000, 143.92, 144.16, 143.31, 143.79, 14246300],
    [1493386200000, 144.09, 144.3, 143.27, 143.65, 20860400],
    [1493645400000, 145.1, 147.2, 144.96, 146.58, 33602900],
    [1493731800000, 147.54, 148.09, 146.84, 147.51, 45352200],
    [1493818200000, 145.59, 147.49, 144.27, 147.06, 45697000],
    [1493904600000, 146.52, 147.14, 145.81, 146.53, 23371900],
    [1493991000000, 146.76, 148.98, 146.76, 148.96, 27327700],
    [1494250200000, 149.03, 153.7, 149.03, 153.01, 48752400],
    [1494336600000, 153.87, 154.88, 153.45, 153.99, 39130400],
    [1494423000000, 153.63, 153.94, 152.11, 153.26, 25805700],
    [1494509400000, 152.45, 154.07, 152.31, 153.95, 27255100],
    [1494595800000, 154.7, 156.42, 154.67, 156.1, 32527000],
    [1494855000000, 156.01, 156.65, 155.05, 155.7, 26009700],
    [1494941400000, 155.94, 156.06, 154.72, 155.47, 20048500],
    [1495027800000, 153.6, 154.57, 149.71, 150.25, 50767700],
    [1495114200000, 151.27, 153.34, 151.13, 152.54, 33568200],
    [1495200600000, 153.38, 153.98, 152.63, 153.06, 26960800],
    [1495459800000, 154, 154.58, 152.91, 153.99, 22966400],
    [1495546200000, 154.9, 154.9, 153.31, 153.8, 19918900],
    [1495632600000, 153.84, 154.17, 152.67, 153.34, 19178000],
    [1495719000000, 153.73, 154.35, 153.03, 153.87, 19235600],
    [1495805400000, 154, 154.24, 153.31, 153.61, 21927600],
    [1496151000000, 153.42, 154.43, 153.33, 153.67, 20126900],
    [1496237400000, 153.97, 154.17, 152.38, 152.76, 24451200],
    [1496323800000, 153.17, 153.33, 152.22, 153.18, 16404100],
    [1496410200000, 153.58, 155.45, 152.89, 155.45, 27770700],
    [1496669400000, 154.34, 154.45, 153.46, 153.93, 25331700],
    [1496755800000, 153.9, 155.81, 153.78, 154.45, 26624900],
    [1496842200000, 155.02, 155.98, 154.48, 155.37, 21069600],
    [1496928600000, 155.25, 155.54, 154.4, 154.99, 21250800],
    [1497015000000, 155.19, 155.19, 146.02, 148.98, 64882700],
    [1497274200000, 145.74, 146.09, 142.51, 145.42, 72307300],
    [1497360600000, 147.16, 147.45, 145.15, 146.59, 34165400],
    [1497447000000, 147.5, 147.5, 143.84, 145.16, 31531200],
    [1497533400000, 143.32, 144.48, 142.21, 144.29, 32165400],
    [1497619800000, 143.78, 144.5, 142.2, 142.27, 50361100],
    [1497879000000, 143.66, 146.74, 143.66, 146.34, 32541400],
    [1497965400000, 146.87, 146.87, 144.94, 145.01, 24900100],
    [1498051800000, 145.52, 146.07, 144.61, 145.87, 21265800],
    [1498138200000, 145.77, 146.7, 145.12, 145.63, 19106300],
    [1498224600000, 145.13, 147.16, 145.11, 146.28, 35439400],
    [1498483800000, 147.17, 148.28, 145.38, 145.82, 25692400],
    [1498570200000, 145.01, 146.16, 143.62, 143.73, 24761900],
    [1498656600000, 144.49, 146.11, 143.16, 145.83, 22082400],
    [1498743000000, 144.71, 145.13, 142.28, 143.68, 31499400],
    [1498829400000, 144.45, 144.96, 143.78, 144.02, 23024100],
    [1499088600000, 144.88, 145.3, 143.1, 143.5, 14277800],
    [1499261400000, 143.69, 144.79, 142.72, 144.09, 21569600],
    [1499347800000, 143.02, 143.5, 142.41, 142.73, 24128800],
    [1499434200000, 142.9, 144.75, 142.9, 144.18, 19201700],
    [1499693400000, 144.11, 145.95, 143.37, 145.06, 21090600],
    [1499779800000, 144.73, 145.85, 144.38, 145.53, 19781800],
    [1499866200000, 145.87, 146.18, 144.82, 145.74, 24884500],
    [1499952600000, 145.5, 148.49, 145.44, 147.77, 25199400],
    [1500039000000, 147.97, 149.33, 147.33, 149.04, 20132100],
    [1500298200000, 148.82, 150.9, 148.57, 149.56, 23793500],
    [1500384600000, 149.2, 150.13, 148.67, 150.08, 17868800],
    [1500471000000, 150.48, 151.42, 149.95, 151.02, 20923000],
    [1500557400000, 151.5, 151.74, 150.19, 150.34, 17243700],
    [1500643800000, 149.99, 150.44, 148.88, 150.27, 26252600],
    [1500903000000, 150.58, 152.44, 149.9, 152.09, 21493200],
    [1500989400000, 151.8, 153.84, 151.8, 152.74, 18853900],
    [1501075800000, 153.35, 153.93, 153.06, 153.46, 15781000],
    [1501162200000, 153.75, 153.99, 147.3, 150.56, 32476300],
    [1501248600000, 149.89, 150.23, 149.19, 149.5, 17213700],
    [1501507800000, 149.9, 150.33, 148.13, 148.73, 19845900],
    [1501594200000, 149.1, 150.22, 148.41, 150.05, 35368600],
    [1501680600000, 159.28, 159.75, 156.16, 157.14, 69936800],
    [1501767000000, 157.05, 157.21, 155.02, 155.57, 27097300],
    [1501853400000, 156.07, 157.4, 155.69, 156.39, 20559900],
    [1502112600000, 157.06, 158.92, 156.67, 158.81, 21870300],
    [1502199000000, 158.6, 161.83, 158.27, 160.08, 36205900],
    [1502285400000, 159.26, 161.27, 159.11, 161.06, 26131500],
    [1502371800000, 159.9, 160, 154.63, 155.32, 40804300],
    [1502458200000, 156.6, 158.57, 156.07, 157.48, 26257100],
    [1502717400000, 159.32, 160.21, 158.75, 159.85, 22122700],
    [1502803800000, 160.66, 162.2, 160.14, 161.6, 29465500],
    [1502890200000, 161.94, 162.51, 160.15, 160.95, 27671600],
    [1502976600000, 160.52, 160.71, 157.84, 157.86, 27940600],
    [1503063000000, 157.86, 159.5, 156.72, 157.5, 27428100],
    [1503322200000, 157.5, 157.89, 155.11, 157.21, 26368500],
    [1503408600000, 158.23, 160, 158.02, 159.78, 21604600],
    [1503495000000, 159.07, 160.47, 158.88, 159.98, 19399100],
    [1503581400000, 160.43, 160.74, 158.55, 159.27, 19818900],
    [1503667800000, 159.65, 160.56, 159.27, 159.86, 25480100],
    [1503927000000, 160.14, 162, 159.93, 161.47, 25966000],
    [1504013400000, 160.1, 163.12, 160, 162.91, 29516900],
    [1504099800000, 163.8, 163.89, 162.61, 163.35, 27269600],
    [1504186200000, 163.64, 164.52, 163.48, 164, 26785100],
    [1504272600000, 164.8, 164.94, 163.63, 164.05, 16591100],
    [1504618200000, 163.75, 164.25, 160.56, 162.08, 29468500],
    [1504704600000, 162.71, 162.99, 160.52, 161.91, 21651700],
    [1504791000000, 162.09, 162.24, 160.36, 161.26, 21928500],
    [1504877400000, 160.86, 161.15, 158.53, 158.63, 28611500],
    [1505136600000, 160.5, 162.05, 159.89, 161.5, 31580800],
    [1505223000000, 162.61, 163.96, 158.77, 160.86, 71714000],
    [1505309400000, 159.87, 159.96, 157.91, 159.65, 44907400],
    [1505395800000, 158.99, 159.4, 158.09, 158.28, 23760700],
    [1505482200000, 158.47, 160.97, 158, 159.88, 49114600],
    [1505741400000, 160.11, 160.5, 158, 158.67, 28269400],
    [1505827800000, 159.51, 159.77, 158.44, 158.73, 20810600],
    [1505914200000, 157.9, 158.26, 153.83, 156.07, 52951400],
    [1506000600000, 155.8, 155.8, 152.75, 153.39, 37511700],
    [1506087000000, 151.54, 152.27, 150.56, 151.89, 46645400],
    [1506346200000, 149.99, 151.83, 149.16, 150.55, 44387300],
    [1506432600000, 151.78, 153.92, 151.69, 153.14, 36660000],
    [1506519000000, 153.8, 154.72, 153.54, 154.23, 25504200],
    [1506605400000, 153.89, 154.28, 152.7, 153.28, 22005500],
    [1506691800000, 153.21, 154.13, 152, 154.12, 26299800],
    [1506951000000, 154.26, 154.45, 152.72, 153.81, 18698800],
    [1507037400000, 154.01, 155.09, 153.91, 154.48, 16230300],
    [1507123800000, 153.63, 153.86, 152.46, 153.48, 20163800],
    [1507210200000, 154.18, 155.44, 154.05, 155.39, 21283800],
    [1507296600000, 154.97, 155.49, 154.56, 155.3, 17407600],
    [1507555800000, 155.81, 156.73, 155.49, 155.84, 16262900],
    [1507642200000, 156.06, 158, 155.1, 155.9, 15617000],
    [1507728600000, 155.97, 156.98, 155.75, 156.55, 16905600],
    [1507815000000, 156.35, 157.37, 155.73, 156, 16125100],
    [1507901400000, 156.73, 157.28, 156.41, 156.99, 16394200],
    [1508160600000, 157.9, 160, 157.65, 159.88, 24121500],
    [1508247000000, 159.78, 160.87, 159.23, 160.47, 18997300],
    [1508333400000, 160.42, 160.71, 159.6, 159.76, 16374200],
    [1508419800000, 156.75, 157.08, 155.02, 155.98, 42584200],
    [1508506200000, 156.61, 157.75, 155.96, 156.25, 23974100],
    [1508765400000, 156.89, 157.69, 155.5, 156.17, 21984300],
    [1508851800000, 156.29, 157.42, 156.2, 157.1, 17757200],
    [1508938200000, 156.91, 157.55, 155.27, 156.41, 21207100],
    [1509024600000, 157.23, 157.83, 156.78, 157.41, 17000500],
    [1509111000000, 159.29, 163.6, 158.7, 163.05, 44454200],
    [1509370200000, 163.89, 168.07, 163.72, 166.72, 44700800],
    [1509456600000, 167.9, 169.65, 166.94, 169.04, 36046800],
    [1509543000000, 169.87, 169.94, 165.61, 166.89, 33637800],
    [1509629400000, 166.6, 168.5, 165.28, 168.11, 41393400],
    [1509715800000, 174, 174.26, 171.12, 172.5, 59398600],
    [1509978600000, 172.37, 174.99, 171.72, 174.25, 35026300],
    [1510065000000, 173.91, 175.25, 173.6, 174.81, 24361500],
    [1510151400000, 174.66, 176.24, 174.33, 176.24, 24409500],
    [1510237800000, 175.11, 176.1, 173.14, 175.88, 29482600],
    [1510324200000, 175.11, 175.38, 174.27, 174.67, 25145500],
    [1510583400000, 173.5, 174.5, 173.4, 173.97, 16982100],
    [1510669800000, 173.04, 173.48, 171.18, 171.34, 24782500],
    [1510756200000, 169.97, 170.32, 168.38, 169.08, 29158100],
    [1510842600000, 171.18, 171.87, 170.3, 171.1, 23637500],
    [1510929000000, 171.04, 171.39, 169.64, 170.15, 21899500],
    [1511188200000, 170.29, 170.56, 169.56, 169.98, 16262400],
    [1511274600000, 170.78, 173.7, 170.78, 173.14, 25131300],
    [1511361000000, 173.36, 175, 173.05, 174.96, 25588900],
    [1511533800000, 175.1, 175.5, 174.65, 174.97, 14026700],
    [1511793000000, 175.05, 175.08, 173.34, 174.09, 20716800],
    [1511879400000, 174.3, 174.87, 171.86, 173.07, 26428800],
    [1511965800000, 172.63, 172.92, 167.16, 169.48, 41666400],
    [1512052200000, 170.43, 172.14, 168.44, 171.85, 41527200],
    [1512138600000, 169.95, 171.67, 168.5, 171.05, 39759300],
    [1512397800000, 172.48, 172.62, 169.63, 169.8, 32542400],
    [1512484200000, 169.06, 171.52, 168.4, 169.64, 27350200],
    [1512570600000, 167.5, 170.2, 166.46, 169.01, 28560000],
    [1512657000000, 169.03, 170.44, 168.91, 169.32, 25673300],
    [1512743400000, 170.49, 171, 168.82, 169.37, 23355200],
    [1513002600000, 169.2, 172.89, 168.79, 172.67, 35273800],
    [1513089000000, 172.15, 172.39, 171.46, 171.7, 19409200],
    [1513175400000, 172.5, 173.54, 172, 172.27, 23818400],
    [1513261800000, 172.4, 173.13, 171.65, 172.22, 20476500],
    [1513348200000, 173.63, 174.17, 172.46, 173.97, 40169300],
    [1513607400000, 174.88, 177.2, 174.86, 176.42, 29421100],
    [1513693800000, 175.03, 175.39, 174.09, 174.54, 27436400],
    [1513780200000, 174.87, 175.42, 173.25, 174.35, 23475600],
    [1513866600000, 174.17, 176.02, 174.1, 175.01, 20949900],
    [1513953000000, 174.68, 175.42, 174.5, 175.01, 16114600],
    [1514298600000, 170.8, 171.47, 169.68, 170.57, 33185500],
    [1514385000000, 170.1, 170.78, 169.71, 170.6, 21498200],
    [1514471400000, 171, 171.85, 170.48, 171.08, 16480200],
    [1514557800000, 170.52, 170.59, 169.22, 169.23, 25884400],
    [1514903400000, 170.16, 172.3, 169.26, 172.26, 25555900],
    [1514989800000, 172.53, 174.55, 171.96, 172.23, 29517900],
    [1515076200000, 172.54, 173.47, 172.08, 173.03, 22434600],
    [1515162600000, 173.44, 175.37, 173.05, 175, 23660000],
    [1515421800000, 174.35, 175.61, 173.93, 174.35, 20567800],
    [1515508200000, 174.55, 175.06, 173.41, 174.33, 21584000],
    [1515594600000, 173.16, 174.3, 173, 174.29, 23959900],
    [1515681000000, 174.59, 175.49, 174.49, 175.28, 18667700],
    [1515767400000, 176.18, 177.36, 175.65, 177.09, 25226000],
    [1516113000000, 177.9, 179.39, 176.14, 176.19, 29565900],
    [1516199400000, 176.15, 179.25, 175.07, 179.1, 34386800],
    [1516285800000, 179.37, 180.1, 178.25, 179.26, 31193400],
    [1516372200000, 178.61, 179.58, 177.41, 178.46, 32425100],
    [1516631400000, 177.3, 177.78, 176.6, 177, 27108600],
    [1516717800000, 177.3, 179.44, 176.82, 177.04, 32689100],
    [1516804200000, 177.25, 177.3, 173.2, 174.22, 51105100],
    [1516890600000, 174.51, 174.95, 170.53, 171.11, 41529000],
    [1516977000000, 172, 172, 170.06, 171.51, 39143000],
    [1517236200000, 170.16, 170.16, 167.07, 167.96, 50640400],
    [1517322600000, 165.53, 167.37, 164.7, 166.97, 46048200],
    [1517409000000, 166.87, 168.44, 166.5, 167.43, 32478900],
    [1517495400000, 167.17, 168.62, 166.76, 167.78, 47230800],
    [1517581800000, 166, 166.8, 160.1, 160.5, 86593800],
    [1517841000000, 159.1, 163.88, 156, 156.49, 72738500],
    [1517927400000, 154.83, 163.72, 154, 163.03, 68243800],
    [1518013800000, 163.09, 163.4, 159.07, 159.54, 51608600],
    [1518100200000, 160.29, 161, 155.03, 155.15, 54390500],
    [1518186600000, 157.07, 157.89, 150.24, 156.41, 70672600],
    [1518445800000, 158.5, 163.89, 157.51, 162.71, 60819500],
    [1518532200000, 161.95, 164.75, 161.65, 164.34, 32549200],
    [1518618600000, 163.04, 167.54, 162.88, 167.37, 40644900],
    [1518705000000, 169.79, 173.09, 169, 172.99, 51147200],
    [1518791400000, 172.36, 174.82, 171.77, 172.43, 40176100],
    [1519137000000, 172.05, 174.26, 171.42, 171.85, 33930500],
    [1519223400000, 172.83, 174.12, 171.01, 171.07, 37471600],
    [1519309800000, 171.8, 173.95, 171.71, 172.5, 30991900],
    [1519396200000, 173.67, 175.65, 173.54, 175.5, 33812400],
    [1519655400000, 176.35, 179.39, 176.21, 178.97, 38162200],
    [1519741800000, 179.1, 180.48, 178.16, 178.39, 38928100],
    [1519828200000, 179.26, 180.62, 178.05, 178.12, 37782100],
    [1519914600000, 178.54, 179.78, 172.66, 175, 48802000],
    [1520001000000, 172.8, 176.3, 172.45, 176.21, 38454000],
    [1520260200000, 175.21, 177.74, 174.52, 176.82, 28401400],
    [1520346600000, 177.91, 178.25, 176.13, 176.67, 23788500],
    [1520433000000, 174.94, 175.85, 174.27, 175.03, 31703500],
    [1520519400000, 175.48, 177.12, 175.07, 176.94, 23774100],
    [1520605800000, 177.96, 180, 177.39, 179.98, 32185200],
    [1520861400000, 180.29, 182.39, 180.21, 181.72, 32207100],
    [1520947800000, 182.59, 183.5, 179.24, 179.97, 31693500],
    [1521034200000, 180.32, 180.52, 177.81, 178.44, 29368400],
    [1521120600000, 178.5, 180.24, 178.07, 178.65, 22743800],
    [1521207000000, 178.65, 179.12, 177.62, 178.02, 39404700],
    [1521466200000, 177.32, 177.47, 173.66, 175.3, 33446800],
    [1521552600000, 175.24, 176.8, 174.94, 175.24, 19649400],
    [1521639000000, 175.04, 175.09, 171.26, 171.27, 36338100],
    [1521725400000, 170, 172.68, 168.6, 168.85, 41490800],
    [1521811800000, 168.39, 169.92, 164.94, 164.94, 41028800],
    [1522071000000, 168.07, 173.1, 166.44, 172.77, 37541200],
    [1522157400000, 173.68, 175.15, 166.92, 168.34, 40922600],
    [1522243800000, 167.25, 170.02, 165.19, 166.48, 41668500],
    [1522330200000, 167.81, 171.75, 166.9, 167.78, 38398500],
    [1522675800000, 166.64, 168.94, 164.47, 166.68, 37586800],
    [1522762200000, 167.64, 168.75, 164.88, 168.39, 30278000],
    [1522848600000, 164.88, 172.01, 164.77, 171.61, 34605500],
    [1522935000000, 172.58, 174.23, 172.08, 172.8, 26933200],
    [1523021400000, 170.97, 172.48, 168.2, 168.38, 35005300],
    [1523280600000, 169.88, 173.09, 169.85, 170.05, 29017700],
    [1523367000000, 173, 174, 171.53, 173.25, 28408600],
    [1523453400000, 172.23, 173.92, 171.7, 172.44, 22431600],
    [1523539800000, 173.41, 175, 173.04, 174.14, 22889300],
    [1523626200000, 174.78, 175.84, 173.85, 174.73, 25124300],
    [1523885400000, 175.03, 176.19, 174.83, 175.82, 21578400],
    [1523971800000, 176.49, 178.94, 176.41, 178.24, 26509000],
    [1524058200000, 177.81, 178.82, 176.88, 177.84, 20754500],
    [1524144600000, 173.76, 175.39, 172.66, 172.8, 34808800],
    [1524231000000, 170.6, 171.22, 165.43, 165.72, 65491100],
    [1524490200000, 166.83, 166.92, 164.09, 165.24, 36515500],
    [1524576600000, 165.67, 166.33, 161.22, 162.94, 33692000],
    [1524663000000, 162.62, 165.42, 162.41, 163.65, 28382100],
    [1524749400000, 164.12, 165.73, 163.37, 164.22, 27963000],
    [1524835800000, 164, 164.33, 160.63, 162.32, 35655800],
    [1525095000000, 162.13, 167.26, 161.84, 165.26, 42427400],
    [1525181400000, 166.41, 169.2, 165.27, 169.1, 53569400],
    [1525267800000, 175.23, 177.75, 173.8, 176.57, 66539400],
    [1525354200000, 175.88, 177.5, 174.44, 176.89, 34068200],
    [1525440600000, 178.25, 184.25, 178.17, 183.83, 56201300],
    [1525699800000, 185.18, 187.67, 184.75, 185.16, 42451400],
    [1525786200000, 184.99, 186.22, 183.67, 186.05, 28402800],
    [1525872600000, 186.55, 187.4, 185.22, 187.36, 23211200],
    [1525959000000, 187.74, 190.37, 187.65, 190.04, 27989300],
    [1526045400000, 189.49, 190.06, 187.45, 188.59, 26212200],
    [1526304600000, 189.01, 189.53, 187.86, 188.15, 20778800],
    [1526391000000, 186.78, 187.07, 185.1, 186.44, 23695200],
    [1526477400000, 186.07, 188.46, 186, 188.18, 19183100],
    [1526563800000, 188, 188.91, 186.36, 186.99, 17294000],
    [1526650200000, 187.19, 187.81, 186.13, 186.31, 18297700],
    [1526909400000, 188, 189.27, 186.91, 187.63, 18400800],
    [1526995800000, 188.38, 188.88, 186.78, 187.16, 15240700],
    [1527082200000, 186.35, 188.5, 185.76, 188.36, 20058400],
    [1527168600000, 188.77, 188.84, 186.21, 188.15, 23234000],
    [1527255000000, 188.23, 189.65, 187.65, 188.58, 17461000],
    [1527600600000, 187.6, 188.75, 186.87, 187.9, 22514100],
    [1527687000000, 187.72, 188, 186.78, 187.5, 18690500],
    [1527773400000, 187.22, 188.23, 186.14, 186.87, 27482800],
    [1527859800000, 187.99, 190.26, 187.75, 190.24, 23442500],
    [1528119000000, 191.64, 193.42, 191.35, 191.83, 26266200],
    [1528205400000, 193.07, 193.94, 192.36, 193.31, 21566000],
    [1528291800000, 193.63, 194.08, 191.92, 193.98, 20933600],
    [1528378200000, 194.14, 194.2, 192.34, 193.46, 21347200],
    [1528464600000, 191.17, 192, 189.77, 191.7, 26656800],
    [1528723800000, 191.35, 191.97, 190.21, 191.23, 18308500],
    [1528810200000, 191.39, 192.61, 191.15, 192.28, 16911100],
    [1528896600000, 192.42, 192.88, 190.44, 190.7, 21638400],
    [1528983000000, 191.55, 191.57, 190.22, 190.8, 21610100],
    [1529069400000, 190.03, 190.16, 188.26, 188.84, 61719200],
    [1529328600000, 187.88, 189.22, 187.2, 188.74, 18484900],
    [1529415000000, 185.14, 186.33, 183.45, 185.69, 33578500],
    [1529501400000, 186.35, 187.2, 185.73, 186.5, 20628700],
    [1529587800000, 187.25, 188.35, 184.94, 185.46, 25711900],
    [1529674200000, 186.12, 186.15, 184.7, 184.92, 27200400],
    [1529933400000, 183.4, 184.92, 180.73, 182.17, 31663100],
    [1530019800000, 182.99, 186.53, 182.54, 184.43, 24569200],
    [1530106200000, 185.23, 187.28, 184.03, 184.16, 25285300],
    [1530192600000, 184.1, 186.21, 183.8, 185.5, 17365200],
    [1530279000000, 186.29, 187.19, 182.91, 185.11, 22737700],
    [1530538200000, 183.82, 187.3, 183.42, 187.18, 17731300],
    [1530624600000, 187.79, 187.95, 183.54, 183.92, 13954800],
    [1530797400000, 185.26, 186.41, 184.28, 185.4, 16604200],
    [1530883800000, 185.42, 188.43, 185.2, 187.97, 17485200],
    [1531143000000, 189.5, 190.68, 189.3, 190.58, 19756600],
    [1531229400000, 190.71, 191.28, 190.18, 190.35, 15939100],
    [1531315800000, 188.5, 189.78, 187.61, 187.88, 18831500],
    [1531402200000, 189.53, 191.41, 189.31, 191.03, 18041100],
    [1531488600000, 191.08, 191.84, 190.9, 191.33, 12513900],
    [1531747800000, 191.52, 192.65, 190.42, 190.91, 15043100],
    [1531834200000, 189.75, 191.87, 189.2, 191.45, 15534500],
    [1531920600000, 191.78, 191.8, 189.93, 190.4, 16393400],
    [1532007000000, 189.69, 192.55, 189.69, 191.88, 20286800],
    [1532093400000, 191.78, 192.43, 190.17, 191.44, 20676200],
    [1532352600000, 190.68, 191.96, 189.56, 191.61, 15989400],
    [1532439000000, 192.45, 193.66, 192.05, 193, 18697900],
    [1532525400000, 193.06, 194.85, 192.43, 194.82, 16709900],
    [1532611800000, 194.61, 195.96, 193.61, 194.21, 19076000],
    [1532698200000, 194.99, 195.19, 190.1, 190.98, 24024000],
    [1532957400000, 191.9, 192.2, 189.07, 189.91, 21029500],
    [1533043800000, 190.3, 192.14, 189.34, 190.29, 39373000],
    [1533130200000, 199.13, 201.76, 197.31, 201.5, 67935700],
    [1533216600000, 200.58, 208.38, 200.35, 207.39, 62404000],
    [1533303000000, 207.03, 208.74, 205.48, 207.99, 33447400],
    [1533562200000, 208, 209.25, 207.07, 209.07, 25425400],
    [1533648600000, 209.32, 209.5, 206.76, 207.11, 25587400],
    [1533735000000, 206.05, 207.81, 204.52, 207.25, 22525500],
    [1533821400000, 207.28, 209.78, 207.2, 208.88, 23469200],
    [1533907800000, 207.36, 209.1, 206.67, 207.53, 24611200],
    [1534167000000, 207.7, 210.95, 207.7, 208.87, 25869100],
    [1534253400000, 210.16, 210.56, 208.26, 209.75, 20748000],
    [1534339800000, 209.22, 210.74, 208.33, 210.24, 28807600],
    [1534426200000, 211.75, 213.81, 211.47, 213.32, 28500400],
    [1534512600000, 213.44, 217.95, 213.16, 217.58, 35427000],
    [1534771800000, 218.1, 219.18, 215.11, 215.46, 30287700],
    [1534858200000, 216.8, 217.19, 214.03, 215.04, 26159800],
    [1534944600000, 214.1, 216.36, 213.84, 215.05, 19018100],
    [1535031000000, 214.65, 217.05, 214.6, 215.49, 18883200],
    [1535117400000, 216.6, 216.9, 215.11, 216.16, 18476400],
    [1535376600000, 217.15, 218.74, 216.33, 217.94, 20525100],
    [1535463000000, 219.01, 220.54, 218.92, 219.7, 22776800],
    [1535549400000, 220.15, 223.49, 219.41, 222.98, 27254800],
    [1535635800000, 223.25, 228.26, 222.4, 225.03, 48793800],
    [1535722200000, 226.51, 228.87, 226, 227.63, 43340100],
    [1536067800000, 228.41, 229.18, 226.63, 228.36, 27390100],
    [1536154200000, 228.99, 229.67, 225.1, 226.87, 33333000],
    [1536240600000, 226.23, 227.35, 221.3, 223.1, 34290000],
    [1536327000000, 221.85, 225.37, 220.71, 221.3, 37619800],
    [1536586200000, 220.95, 221.85, 216.47, 218.33, 39516500],
    [1536672600000, 218.01, 224.3, 216.56, 223.85, 35749000],
    [1536759000000, 224.94, 225, 219.84, 221.07, 49278700],
    [1536845400000, 223.52, 228.35, 222.57, 226.41, 41706400],
    [1536931800000, 225.75, 226.84, 222.52, 223.84, 31999300],
    [1537191000000, 222.15, 222.95, 217.27, 217.88, 37195100],
    [1537277400000, 217.79, 221.85, 217.12, 218.24, 31571700],
    [1537363800000, 218.5, 219.62, 215.3, 218.37, 27123800],
    [1537450200000, 220.24, 222.28, 219.15, 220.03, 26608800],
    [1537536600000, 220.78, 221.36, 217.29, 217.66, 96246700],
    [1537795800000, 216.82, 221.26, 216.63, 220.79, 27693400],
    [1537882200000, 219.75, 222.82, 219.7, 222.19, 24554400],
    [1537968600000, 221, 223.75, 219.76, 220.42, 23984700],
    [1538055000000, 223.82, 226.44, 223.54, 224.95, 30181200],
    [1538141400000, 224.79, 225.84, 224.02, 225.74, 22929400],
    [1538400600000, 227.95, 229.42, 226.35, 227.26, 23600800],
    [1538487000000, 227.25, 230, 226.63, 229.28, 24788200],
    [1538573400000, 230.05, 233.47, 229.78, 232.07, 28654800],
    [1538659800000, 230.78, 232.35, 226.73, 227.99, 32042000],
    [1538746200000, 227.96, 228.41, 220.58, 224.29, 33580500],
    [1539005400000, 222.21, 224.8, 220.2, 223.77, 29663900],
    [1539091800000, 223.64, 227.27, 222.25, 226.87, 26891000],
    [1539178200000, 225.46, 226.35, 216.05, 216.36, 41990600],
    [1539264600000, 214.52, 219.5, 212.32, 214.45, 53124400],
    [1539351000000, 220.42, 222.88, 216.84, 222.11, 40337900],
    [1539610200000, 221.16, 221.83, 217.27, 217.36, 30791000],
    [1539696600000, 218.93, 222.99, 216.76, 222.15, 29184000],
    [1539783000000, 222.3, 222.64, 219.34, 221.19, 22885400],
    [1539869400000, 217.86, 219.74, 213, 216.02, 32581300],
    [1539955800000, 218.06, 221.26, 217.43, 219.31, 33078700],
    [1540215000000, 219.79, 223.36, 218.94, 220.65, 28792100],
    [1540301400000, 215.83, 223.25, 214.7, 222.73, 38767800],
    [1540387800000, 222.6, 224.23, 214.54, 215.09, 40925500],
    [1540474200000, 217.71, 221.38, 216.75, 219.8, 29855800],
    [1540560600000, 215.9, 220.19, 212.67, 216.3, 47258400],
    [1540819800000, 219.19, 219.69, 206.09, 212.24, 45935500],
    [1540906200000, 211.15, 215.18, 209.27, 213.3, 36660000],
    [1540992600000, 216.88, 220.45, 216.62, 218.86, 38358900],
    [1541079000000, 219.05, 222.36, 216.81, 222.22, 58323200],
    [1541165400000, 209.55, 213.65, 205.43, 207.48, 91328700],
    [1541428200000, 204.3, 204.39, 198.17, 201.59, 66163700],
    [1541514600000, 201.92, 204.72, 201.69, 203.77, 31882900],
    [1541601000000, 205.97, 210.06, 204.13, 209.95, 33424400],
    [1541687400000, 209.98, 210.12, 206.75, 208.49, 25362600],
    [1541773800000, 205.55, 206.01, 202.25, 204.47, 34365800],
    [1542033000000, 199, 199.85, 193.79, 194.17, 51135500],
    [1542119400000, 191.63, 197.18, 191.45, 192.23, 46882900],
    [1542205800000, 193.9, 194.48, 185.93, 186.8, 60801000],
    [1542292200000, 188.39, 191.97, 186.9, 191.41, 46478800],
    [1542378600000, 190.5, 194.97, 189.46, 193.53, 36928300],
    [1542637800000, 190, 190.7, 184.99, 185.86, 41925300],
    [1542724200000, 178.37, 181.47, 175.51, 176.98, 67825200],
    [1542810600000, 179.73, 180.27, 176.55, 176.78, 31124200],
    [1542983400000, 174.94, 176.6, 172.1, 172.29, 23624000],
    [1543242600000, 174.24, 174.95, 170.26, 174.62, 44998500],
    [1543329000000, 171.51, 174.77, 170.88, 174.24, 41387400],
    [1543415400000, 176.73, 181.29, 174.93, 180.94, 46062500],
    [1543501800000, 182.66, 182.8, 177.7, 179.55, 41770000],
    [1543588200000, 180.29, 180.33, 177.03, 178.58, 39531500],
    [1543847400000, 184.46, 184.94, 181.21, 184.82, 40802500],
    [1543933800000, 180.95, 182.39, 176.27, 176.69, 41344300],
    [1544106600000, 171.76, 174.78, 170.42, 174.72, 43098400],
    [1544193000000, 173.49, 174.49, 168.3, 168.49, 42281600],
    [1544452200000, 165, 170.09, 163.33, 169.6, 62026000],
    [1544538600000, 171.66, 171.79, 167, 168.63, 47281700],
    [1544625000000, 170.4, 171.92, 169.02, 169.1, 35627700],
    [1544711400000, 170.49, 172.57, 169.55, 170.95, 31898600],
    [1544797800000, 169, 169.08, 165.28, 165.48, 40703700],
    [1545057000000, 165.45, 168.35, 162.73, 163.94, 44287900],
    [1545143400000, 165.38, 167.53, 164.39, 166.07, 33841500],
    [1545229800000, 166, 167.45, 159.09, 160.89, 49047300],
    [1545316200000, 160.4, 162.11, 155.3, 156.83, 64773000],
    [1545402600000, 156.86, 158.16, 149.63, 150.73, 95744600],
    [1545661800000, 148.15, 151.55, 146.59, 146.83, 37169200],
    [1545834600000, 148.3, 157.23, 146.72, 157.17, 58582500],
    [1545921000000, 155.84, 156.77, 150.07, 156.15, 53117100],
    [1546007400000, 157.5, 158.52, 154.55, 156.23, 42291400],
    [1546266600000, 158.53, 159.36, 156.48, 157.74, 35003500],
    [1546439400000, 154.89, 158.85, 154.23, 157.92, 37039700],
    [1546525800000, 143.98, 145.72, 142, 142.19, 91312200],
    [1546612200000, 144.53, 148.55, 143.8, 148.26, 58607100],
    [1546871400000, 148.7, 148.83, 145.9, 147.93, 54777800],
    [1546957800000, 149.56, 151.82, 148.52, 150.75, 41025300],
    [1547044200000, 151.29, 154.53, 149.63, 153.31, 45099100],
    [1547130600000, 152.5, 153.97, 150.86, 153.8, 35780700],
    [1547217000000, 152.88, 153.7, 151.51, 152.29, 27023200],
    [1547476200000, 150.85, 151.27, 149.22, 150, 32439200],
    [1547562600000, 150.27, 153.39, 150.05, 153.07, 28710900],
    [1547649000000, 153.08, 155.88, 153, 154.94, 30569700],
    [1547735400000, 154.2, 157.66, 153.26, 155.86, 29821200],
    [1547821800000, 157.5, 157.88, 155.98, 156.82, 33751000],
    [1548167400000, 156.41, 156.73, 152.62, 153.3, 30394000],
    [1548253800000, 154.15, 155.14, 151.7, 153.92, 23130600],
    [1548340200000, 154.11, 154.48, 151.74, 152.7, 25441500],
    [1548426600000, 155.48, 158.13, 154.32, 157.76, 33535500],
    [1548685800000, 155.79, 156.33, 153.66, 156.3, 26192100],
    [1548772200000, 156.25, 158.13, 154.11, 154.68, 41587200],
    [1548858600000, 163.25, 166.15, 160.23, 165.25, 61109800],
    [1548945000000, 166.11, 169, 164.56, 166.44, 40739600],
    [1549031400000, 166.96, 168.98, 165.93, 166.52, 32668100],
    [1549290600000, 167.41, 171.66, 167.28, 171.25, 31495500],
    [1549377000000, 172.86, 175.08, 172.35, 174.18, 36101600],
    [1549463400000, 174.65, 175.57, 172.85, 174.24, 28239600],
    [1549549800000, 172.4, 173.94, 170.34, 170.94, 31741700],
    [1549636200000, 168.99, 170.66, 168.42, 170.41, 23820000],
    [1549895400000, 171.05, 171.21, 169.25, 169.43, 20993400],
    [1549981800000, 170.1, 171, 169.7, 170.89, 22283500],
    [1550068200000, 171.39, 172.48, 169.92, 170.18, 22490200],
    [1550154600000, 169.71, 171.26, 169.38, 170.8, 21835700],
    [1550241000000, 171.25, 171.7, 169.75, 170.42, 24626800],
    [1550586600000, 169.71, 171.44, 169.49, 170.93, 18972800],
    [1550673000000, 171.19, 173.32, 170.99, 172.03, 26114400],
    [1550759400000, 171.8, 172.37, 170.3, 171.06, 17249700],
    [1550845800000, 171.58, 173, 171.38, 172.97, 18913200],
    [1551105000000, 174.16, 175.87, 173.95, 174.23, 21873400],
    [1551191400000, 173.71, 175.3, 173.17, 174.33, 17070200],
    [1551277800000, 173.21, 175, 172.73, 174.87, 27835400],
    [1551364200000, 174.32, 174.91, 172.92, 173.15, 28215400],
    [1551450600000, 174.28, 175.15, 172.89, 174.97, 25886200],
    [1551709800000, 175.69, 177.75, 173.97, 175.85, 27436200],
    [1551796200000, 175.94, 176, 174.54, 175.53, 19737400],
    [1551882600000, 174.67, 175.49, 173.94, 174.52, 20810400],
    [1551969000000, 173.87, 174.44, 172.02, 172.5, 24796400],
    [1552055400000, 170.32, 173.07, 169.5, 172.91, 23999400],
    [1552311000000, 175.49, 179.12, 175.35, 178.9, 32011000],
    [1552397400000, 180, 182.67, 179.37, 180.91, 32467600],
    [1552483800000, 182.25, 183.3, 180.92, 181.71, 31032500],
    [1552570200000, 183.9, 184.1, 182.56, 183.73, 23579500],
    [1552656600000, 184.85, 187.33, 183.74, 186.12, 39042900],
    [1552915800000, 185.8, 188.39, 185.79, 188.02, 26219800],
    [1553002200000, 188.35, 188.99, 185.92, 186.53, 31646400],
    [1553088600000, 186.23, 189.49, 184.73, 188.16, 31035200],
    [1553175000000, 190.02, 196.33, 189.81, 195.09, 51034200],
    [1553261400000, 195.34, 197.69, 190.78, 191.05, 42407700],
    [1553520600000, 191.51, 191.98, 186.6, 188.74, 43845300],
    [1553607000000, 191.66, 192.88, 184.58, 186.79, 49800500],
    [1553693400000, 188.75, 189.76, 186.55, 188.47, 29848400],
    [1553779800000, 188.95, 189.56, 187.53, 188.72, 20780400],
    [1553866200000, 189.83, 190.08, 188.54, 189.95, 23548400]
  ];
  
  var ohlc = [],
    volume = [],
    dataLength = data.length,
    groupingUnits = [
      [
        "week", // unit name
        [1] // allowed multiples
      ],
      ["month", [1, 2, 3, 4, 6]]
    ],
    i = 0;
  
  for (i; i < dataLength; i += 1) {
    ohlc.push([
      data[i][0], // the date
      data[i][1], // open
      data[i][2], // high
      data[i][3], // low
      data[i][4] // close
    ]);
  
    volume.push([
      data[i][0], // the date
      data[i][5] // the volume
    ]);
  }
  const options = {
    rangeSelector: {
      selected: 1
    },
  
    title: {
      text: "AAPL Real data"
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

export default function Data() {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <div>
        <div className = "text-center">
            <h2>Sample real time data for understanding!</h2>
            <p>
                Click the explore button to view any stock you wish and see our tailored advisor how to observe trends.
            </p>
        </div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
    <div>
        <p>Generally upward trending price of stocks</p>
    </div>
  </div>
  }
  