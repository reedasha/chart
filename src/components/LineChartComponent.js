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
        const values = [{
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
        values.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
        const today = new Date()

        let dateArray = [];
        let scoreArray = [];

        values.forEach(element => {
            const date = new Date(element.date);
            date.getMonth() === today.getMonth() ? dateArray.push('Today') : dateArray.push(dateFormat(date, 'd mmmm yyyy'))
            scoreArray.push(element.value)
        });

        this.setState({
            Data: {
                labels: dateArray,
                datasets:[
                    {
                        label: 'Cash Runway',
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
                    options = {this.state.Options}   height={300}
                    width={700}/>
            </div>
        )
    }
}