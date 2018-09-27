import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './style.css';
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
                "key": "Interest Income",
                "value": -400
            },
            {
                "key": "Other Revenue",
                "value": -200
            },
            {
                "key": "Sales",
                "value": 10958.5
            }
        ]
        let nameArray = [];
        let dateArray = [];
        let scoreArray = [];
        values.forEach(element => {
            nameArray.push(element.key);
            scoreArray.push(element.value);
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