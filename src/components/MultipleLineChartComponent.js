import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import './style.css';
// import axios from 'axios';


export default class PieChartComponent extends Component
{
    constructor(props) {
        super(props);
        this.state ={
            Data: {},
            Options: {}
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
                    }
                ],
            },
            Options: {
                maintainAspectRatio: true,
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true
                    }
                },
                plugins: {
                    labels: {
                        render: 'label',
                        fontColor: '#000',
                        position: 'outside'
                    }
                }
            }
        });
        // })
    }

    render()
    {
        return(
            <div class="chart">
                <h1>Income Breakout</h1>
                <Pie
                    data={this.state.Data}
                    options={this.state.Options}
                />
            </div>
        )
    }
}