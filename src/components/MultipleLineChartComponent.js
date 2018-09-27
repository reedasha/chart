import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
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
        let scoreArray = [];
        values.forEach(element => {
            nameArray.push(element.key);
            scoreArray.push(element.value);
        });
        this.setState({
            Data: {
                labels: nameArray,
                datasets:[
                    {
                        label:'Test',
                        data: scoreArray ,
                        backgroundColor:[
                            'rgba(173,255,47,0.6)',
                            'rgba(0,128,0,0.6)',
                            'rgba(130,255,151,0.6)',
                            'rgba(0, 255, 0,0.6)',
                            'rgba(60,179,113,0.6)',
                            'rgba(0,255,131,0.6)'
                        ],
        const values = {
            "Revenue bank": {
                "2018-09-24T15:53:42.257+06:00": -900
            },
            "ForPr.Application": {
                "2018-09-24T15:53:42.257+06:00": -4830.5,
                "2018-08-24T15:53:42.257+06:00": -4830.5,
                "2018-07-24T15:53:42.257+06:00": 500,
                "2018-07-24T15:53:42.257+06:00": -42.5
            },
            "Abdy": {
                "2018-09-24T15:53:42.257+06:00": 145984
            }
        }

        let nameArray = [];
        let dateArray = [];
        let scoreArray = [];

        const today = new Date();
        for(const name in values) {
            nameArray.push(name)
            debugger
            for(const elem in values[name]) {
                const date = new Date(elem)
                date.getMonth() === today.getMonth() ? ((dateArray.includes('Today')) ? '' : dateArray.push('Today')) : 
                                                    dateArray.push(dateFormat(date, 'd mmmm yyyy'))
                scoreArray.push(values[name][elem])
             }
        }
        debugger

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