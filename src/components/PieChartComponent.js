import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import './style.css';
// import axios from 'axios';
import 'chartjs-plugin-labels'

const options = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            maintainAspectRatio: true,
            responsive: true,
            legend: {
                display:false
            },
            plugins: {
                labels: [{
                    render: function (args) {
                        return args.label + ' - ' + args.percentage + "%";
                    },
                    fontColor: '#000',
                    position: 'outside',
                    fontSize: 14,
                    textMargin: 5,
                    overlap: true,

                }]
            }
        }
export default class PieChartComponent extends Component
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
        const values = [
            {
                "key": "Interest Income",
                "value": -800
            },
            {
                "key": "Interest Income",
                "value": -400
            },
        ]
        let nameArray = [];
        let scoreArray = [];

        values.forEach(element => {
            nameArray.push(element.key)
            scoreArray.push(element.value)
        });

        this.setState({
            Data: {
                labels: nameArray,
                datasets:[
                    {
                        data: scoreArray ,
                        backgroundColor:[
                            'rgba(173,255,47,0.6)',
                            'rgba(0,128,0,0.6)',
                            'rgba(130,255,151,0.6)',
                            'rgba(0, 255, 0,0.6)',
                            'rgba(60,179,113,0.6)',
                            'rgba(0,255,131,0.6)'
                        ],
                    }
                ],
            }
        });
         // })
    }

    render()
    {
        return(
            <div class="chart">
                <h1>Income Breakout</h1>
                <div class="chartCanvas">
                    <Pie
                        data={this.state.Data}
                             options={options}
                        height={80}
                        width={100}
                    />
                </div>
            </div>
        )
    }
}