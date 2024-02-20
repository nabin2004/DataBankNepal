// import React, { useEffect } from 'react';
// // import {ChartGeo} from 'chartjs-chart-geo';
// import { ChartGeo } from 'chartjs-chart-geo';
// import { Chart } from 'chart.js';

// const Map = () => {
//     useEffect(() => {
//         fetch('https://unpkg.com/world-atlas/countries-50m.json')
//             .then((r) => r.json())
//             .then((data) => {
//                 const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;

//                 const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
//                     type: 'choropleth',
//                     data: {
//                         labels: countries.map((d) => d.properties.name),
//                         datasets: [{
//                             label: 'Countries',
//                             data: countries.map((d) => ({ feature: d, value: Math.random() })),
//                         }]
//                     },
//                     options: {
//                         showOutline: true,
//                         showGraticule: true,
//                         plugins: {
//                             legend: {
//                                 display: false
//                             },
//                         },
//                         scales: {
//                             projection: {
//                                 axis: 'x',
//                                 projection: 'equalEarth'
//                             }
//                         }
//                     }
//                 });
//             });
//     }, []);

//     return <canvas id="canvas" />;
// };

// export default Map;
