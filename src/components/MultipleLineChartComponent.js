import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './style.css';
// import axios from 'axios';

import dateFormat from 'dateformat';

const options = {
    maintainAspectRatio: true,
    cubicInterpolationMode: 'monotone',
    responsive: true,
    // scaleFontColor: 'red',
    legend: {
        position: 'bottom',
        display: true,
        labels: {
            usePointStyle: true,
            fontSize: 18,
            fontStyle:'bold',
            fontColor:'#363532',
            padding: 12,
        }
    },
    scales: {
        xAxes: [{
            borderWidth: 1,
        borderColor: 'red',
            offset: true,
            gridLines: {
                drawOnChartArea: true,
                // color: 'green',
                // zeroLineColor: 'orange',
                tickMarkLength: 10,
                // zeroLineColor: 'black'
            },
            ticks: {
                lineHeight: 24,
                fontSize: 18,
                padding: 10,
            }
        }],
        yAxes: [{
            scaleLabel:{
                display:true,
            },
            gridLines: {
                drawOnChartArea: false,
                color: "black",
                tickMarkLength: 10,
            },
            ticks: {
                fontSize: 18,
                padding: 10,
                callback: function(value, index, values) {
                    return '$' + value/1000 + 'K';
                }
            }

        }]
    },
}
export default class LineChartComponent extends Component

{
    constructor(props) {
        super(props);
        this.state ={
            Data: {},
            size: 3
        }
    }

    componentDidMount() {
        // axios.get(`http://localhost:8000/api/charts`)
        //     .then(res => {

        // const values = res.values
        const values = [
            {
                "accountName": "Revenue bank",
                "values": [
                    {
                        "key": 1538021360.401,
                        "value": 40000
                    },
                    {
                        "key": 1535342960.401,
                        "value": 45000
                    },
                    {
                        "key": 1532664560.401,
                        "value": 60000
                    },
                    {
                        "key": 1530072560.401,
                        "value": 38400
                    },
                    {
                        "key": 1527394160.401,
                        "value": 12300
                    }
                ]
            },
            {
                "accountName": "ForPr.Application",
                "values": [
                    {
                        "key": 1538021360.401,
                        "value": 50000
                    },
                    {
                        "key": 1535342960.401,
                        "value": 70000
                    },
                    {
                        "key": 1532664560.401,
                        "value": 70500
                    },
                    {
                        "key": 1530072560.401,
                        "value": 67000
                    },
                    {
                        "key": 1527394160.401,
                        "value": 45000
                    }
                ]
            },
            {
                "accountName": "Import Test Account",
                "values": [
                    {
                        "key": 1538021360.401,
                        "value": 70000
                    },
                    {
                        "key": 1535342960.401,
                        "value": 90000
                    },
                    {
                        "key": 1532664560.401,
                        "value": 90800
                    },
                    {
                        "key": 1530072560.401,
                        "value": 45090
                    },
                    {
                        "key": 1527394160.401,
                        "value": 24890
                    }
                ]
            },
            {
                "accountName": "Abdy",
                "values": [
                    {
                        "key": 1538021360.401,
                        "value": 10010
                    },
                    {
                        "key": 1535342960.401,
                        "value": 20000
                    },
                    {
                        "key": 1532664560.401,
                        "value": 12030
                    },
                    {
                        "key": 1530072560.401,
                        "value": 40020
                    },
                    {
                        "key": 1527394160.401,
                        "value": 80000
                    }
                ]
            }
        ]
        let nameArray = [];
        let dateArray = [];
        let scoreArray = [];
        let bankOfAmerica = [];
        let uniCreditGroup = [];
        let citiGroup = [];
        const today = new Date()
        values.forEach(element => {
            nameArray.push(element.accountName);
            let rowDate = [];
            let rowValue = [];
            element['values'].forEach(data => {
                const date = new Date(data.key * 1000);
                if (!dateArray.includes(dateFormat(date, 'd mmm yyyy'))) {
                    date.getMonth() === today.getMonth() ? 
                                        (!dateArray.includes('Today') ? dateArray.push('Today') : '') 
                                        : dateArray.push(dateFormat(new Date(data.key * 1000), 'd mmm yyyy'))
                }
                //dateArray.push(dateFormat(new Date(data.key * 1000), 'd mmm yyyy'))
                rowValue.push(data.value);
                // scoreArray.push(data.value);
                // bankOfAmerica.push(data.value);
                // uniCreditGroup.push(data.value * (-1.5) + 20000000);
                // citiGroup.push(data.value + 50000000);
            })
            //dateArray.push(rowDate);
            scoreArray.push(rowValue);


        });

        dateArray.sort();
        
        //this.setState = {size: 3}
        this.setState({
            Data: {
                labels: dateArray,
                datasets:[
                    {
                        label: nameArray[0],
                        data: scoreArray[0] ,
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: 'rgb(115, 188, 131)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderWidth: 4,
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgb(115, 188, 131)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 3,
                        pointHoverRadius: 8,
                        pointHoverBackgroundColor: 'rgba(130,255,151,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 10,
                        pointHitRadius: 10,
                        //steppedLine: true,
                    },
                    {
                        label: nameArray[1],
                        data: scoreArray[1] ,
                        fill: false,
                        lineTension: 0,
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: 'rgb(61, 247, 9)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderWidth: 4,
                        borderDashOffset: 0.0,
                        //borderJoinStyle: 'miter',
                        pointBorderColor: 'rgb(61, 247, 9)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 3,
                        pointHoverRadius: 8,
                        pointHoverBackgroundColor: 'rgba(130,255,151,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 10,
                        pointHitRadius: 10,
                        //steppedLine: true
                    },
                    {
                        label: nameArray[2],
                        data: scoreArray[2] ,
                        fill: false,
                        lineTension: 0,
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: 'rgba(130,255,160,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderWidth: 4,
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(130,255,151,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 3,
                        pointHoverRadius: 8,
                        pointHoverBackgroundColor: 'rgba(130,255,151,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 10,
                        pointHitRadius: 10,
                        //steppedLine: true
                    },
                    {
                        label: nameArray[3],
                        data: scoreArray[3] ,
                        fill: false,
                        lineTension: 0,
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: 'rgba(230,255,60,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderWidth: 4,
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(230,255,60,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 3,
                        pointHoverRadius: 8,
                        pointHoverBackgroundColor: 'rgba(130,255,151,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 10,
                        pointHitRadius: 10,
                        //steppedLine: true
                    }
                ],
            },
        });
      // })
    }

    render()
    {
        // let rows = [];
        // for (var i = 0; i < this.state.size; i++){
        //     let rowID = `row${i}`
        //     let cell = []
        //     for (var idx = 0; idx < this.state.size; idx++){
        //         let cellID = `cell${i}-${idx}`
        //         cell.push(<td key={cellID} id={cellID}></td>)
        //     }
        //     rows.push(<tr key={i} id={rowID}>{cell}</tr>)
        // }
        // return(
        //     <div className="container">
        //         <div className="row">
        //             <div className="col s12 board">
        //                 <table id="simple-board">
        //                     <tbody>
        //                     {rows}
        //                     </tbody>
        //                 </table>
        //             </div>
        //         </div>
        //     </div>
        // )

        return(
            <div class="chart">
                <h1>Cash Snapshot</h1>
                <Line
                    data = {this.state.Data}
                    options = {options}   height={500}
                    width={700}/>
            </div>
        )
    }
}