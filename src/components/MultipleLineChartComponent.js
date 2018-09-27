import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './style.css';
// import axios from 'axios';

import dateFormat from 'dateformat';

const options = {
    maintainAspectRatio: false,
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
            offset: true,
            gridLines: {
                drawOnChartArea: false,
                color: "black",
                tickMarkLength: 10,
            },
            ticks: {
                lineHeight: 24,
                fontSize: 18,
                padding: 10
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
                padding: 10
            }

        }]
    },
}
export default class LineChartComponent extends Component

{
    constructor(props) {
        super(props);
        this.state ={
            Data: {}
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
                        "key": 1538021349.625,
                        "value": -900
                    }
                ]
            },
            {
                "accountName": "ForPr.Application",
                "values": [
                    {
                        "key": 1538021349.625,
                        "value": -4830.5
                    },
                    {
                        "key": 1535342949.625,
                        "value": -4830.5
                    },
                    {
                        "key": 1532664549.625,
                        "value": -42.5
                    }
                ]
            },
            {
                "accountName": "Import Test Account",
                "values": [
                    {
                        "key": 1538021349.625,
                        "value": -6546657
                    }
                ]
            },
            {
                "accountName": "Abdy",
                "values": [
                    {
                        "key": 1538021349.625,
                        "value": 13125225.5
                    }
                ]
            }
        ]
        let nameArray = [];
        let dateArray = [];
        let scoreArray = [];
        values.forEach(element => {
            nameArray.push(element.accountName);
            element['values'].forEach(data => {
                dateArray.push(dateFormat(new Date(data.key * 1000), 'd mmmm yyyy'))
                scoreArray.push(data.value)
            })

        });

        dateArray.sort()
        this.setState({
            Data: {
                labels: dateArray,
                datasets:[
                    {
                        label: 'A',
                        data: scoreArray ,
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(130,255,151,0.6)',
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
                        steppedLine: true,
                    },
                    {
                        label: 'B',
                        data: scoreArray ,
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(230,255,151,0.6)',
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
                        steppedLine: true
                    }
                ],
            },
        });
      // })
    }

    render()
    {
        return(
            <div class="chart">
                <h1>Cash Snapshot</h1>
                <Line
                    data = {this.state.Data}
                    options = {options}   height={300}
                    width={700}/>
            </div>
        )
    }
}