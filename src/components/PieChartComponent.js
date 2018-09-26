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
        const values = {
            "Interest Income": -400,
            "Other Revenue": -200,
            "Sales": 1054.5
        };
        let nameArray = [];
        let scoreArray = [];
        for(const elem in values) {
            nameArray.push(elem)
            scoreArray.push(values[elem])
         }
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