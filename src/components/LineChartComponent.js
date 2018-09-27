import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './style.css';
import dateFormat from 'dateformat';
// import axios from 'axios';

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
                padding: 14
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
                padding: 14
            }

        }]
    },
}

export default class LineChartComponent extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            Data: {}
        }
    }

    componentDidMount() {
        // axios.get(`http://localhost:8000/api/charts`)
        //     .then(res => {
        const values = [
            {
                "key": 1538021360.401,
                "value": 1
            },
            {
                "key": 1535342960.401,
                "value": 7
            },
            {
                "key": 1532664560.401,
                "value": 8.3
            },
            {
                "key": 1530072560.401,
                "value": 11
            },
            {
                "key": 1527394160.401,
                "value": 19.5
            }
        ]
        values.sort((a,b) => (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0));

        const today = new Date()

        let dateArray = [];
        let scoreArray = [];

        values.forEach(element => {
            const date = new Date(element.key * 1000);
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
                    options = {options}   height={300}
                    width={700}/>
            </div>
        )
    }
}