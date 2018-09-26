import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './style.css';
import dateFormat from 'dateformat';
// import axios from 'axios';

export default class LineChartComponent extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            Data: {},
            Options: {}
        }
    }

    componentDidMount() {
        // axios.get(`http://localhost:8000/api/charts`)
        //     .then(res => {
        const football =   [{
                                "date": "2018-09-24T15:53:47.497+06:00",
                                "value": 4.5
                            },
                            {
                                "date": "2018-08-24T15:53:47.497+06:00",
                                "value": 6
                            },
                            {
                                "date": "2018-07-24T15:53:47.497+06:00",
                                "value": 7
                            },
                            {
                                "date": "2018-06-24T15:53:47.497+06:00",
                                "value": 8
                            },
                            {
                                "date": "2018-05-24T15:53:47.497+06:00",
                                "value": 9
                            },
                            {
                                "date": "2018-04-24T15:53:47.497+06:00",
                                "value": 9.5
                            }];
        const football2 =   [{
            "date": "2018-09-24T15:53:47.497+06:00",
            "value": 4
        },
            {
                "date": "2018-08-24T15:53:47.497+06:00",
                "value": 6
            },
            {
                "date": "2018-07-24T15:53:47.497+06:00",
                "value": 2
            },
            {
                "date": "2018-06-24T15:53:47.497+06:00",
                "value": 8
            },
            {
                "date": "2018-05-24T15:53:47.497+06:00",
                "value": 5
            },
            {
                "date": "2018-04-24T15:53:47.497+06:00",
                "value": 9.5
            }];
        const football3 =   [{
            "date": "2018-09-24T15:53:47.497+06:00",
            "value": 1
        },
            {
                "date": "2018-08-24T15:53:47.497+06:00",
                "value": 23
            },
            {
                "date": "2018-07-24T15:53:47.497+06:00",
                "value": 5
            },
            {
                "date": "2018-06-24T15:53:47.497+06:00",
                "value": 2
            },
            {
                "date": "2018-05-24T15:53:47.497+06:00",
                "value": 4
            },
            {
                "date": "2018-04-24T15:53:47.497+06:00",
                "value": 9.5
            }];

        football.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
        const today = new Date()

        let fistDate = [];
        let firstScore = [];

        let secondDate = [];
        let secondScore = [];

        let thirdDate = [];
        let thirdScore = [];
        football.forEach(element => {
            const date = new Date(element.date);
            date.getMonth() === today.getMonth() ? fistDate.push('Today') : fistDate.push(dateFormat(date, 'd mmmm yyyy'))
            firstScore.push(element.value)
        });
        football2.forEach(element => {
            const date = new Date(element.date);
            date.getMonth() === today.getMonth() ? secondDate.push('Today') : secondDate.push(dateFormat(date, 'd mmmm yyyy'))
            secondScore.push(element.value)
        });
        football3.forEach(element => {
            const date = new Date(element.date);
            date.getMonth() === today.getMonth() ? thirdDate.push('Today') : thirdDate.push(dateFormat(date, 'd mmmm yyyy'))
            thirdScore.push(element.value)
        });

        this.setState({
            Data: {
                datasets:[
                    {
                        label: 'Bank of America',
                        data: firstScore ,
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
                        label: 'Unicredit group',
                        data: secondScore ,
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
                        label: 'Citigroup',
                        data: thirdScore ,
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
                    }
                ]
            },
            Options: {
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    display: true,
                    labels: {
                        usePointStyle: true,
                        fontSize: 18,
                        fontStyle:'bold',
                        fontColor:'#363532',
                        padding: 24,
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
                            padding: 12,
                            labelOffset: 20
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
                            stepSize: 1,
                            fontSize: 18,
                            padding: 20,
                            labelOffset: 20
                        }

                    }]
                },
            }
        });
        // })
    }

    render()
    {
        return(
            <div class="chart">
                <h1>Cash Runway(# of Month)</h1>
                <h3>Based on Expenses and Cost of Sale from 2 months prior</h3>
                <Line
                    data = {this.state.Data}
                    options = {this.state.Options}   height={10}
                    width={30}/>
            </div>
        )
    }
}