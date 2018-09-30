import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './style.css';
// import axios from 'axios';

import dateFormat from 'dateformat';

const options = {
    maintainAspectRatio: true,
    cubicInterpolationMode: 'monotone',
    responsive: true,
    legend: {
        position: 'bottom',
        display: true,
        labels: {
            usePointStyle: true,
            fontSize: 18,
            fontStyle:'bold',
            padding: 12,
        }
    },
    scales: {
        xAxes: [{
            offset: true,
            gridLines: {
                drawOnChartArea: true,
                tickMarkLength: 10,
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
                }rowValue.push(data.value);
            })
            scoreArray.push(rowValue);


        });

        dateArray.sort();

        const colors = [
            'rgb(173,255,47)',
            'rgb(0,128,0)',
            'rgb(130,255,151)',
            'rgb(0, 255, 0)',
            'rgb(60,179,113)',
            'rgb(0,255,131)'
        ];

        for(let i = 0; i < nameArray.length; i++) {
            debugger
            this.setState(prevState =>({
                Data: {
                    labels: dateArray,
                    datasets:[ ...prevState.Data.datasets,
                        {
                            label: nameArray[i],
                            data: scoreArray[i] ,
                            fill: false,
                            lineTension: 0.1,
                            borderColor: colors[i],
                            borderCapStyle: 'butt',
                            backgroundColor: 'white',
                            borderDash: [],
                            borderWidth: 4,
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: colors[i],
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 3,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: colors[i],
                            pointHoverBorderColor: 'rgb(220,220,220)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 10,
                            pointHitRadius: 10
                        }]
                    }
            }))
        }
    }

    render()
    {
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