import React from "react";
import { Line,Bar,Pie } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import dayChart from './Chart/daychart';
import monthChart from './Chart/monthchart';
import yearChart from './Chart/yearchart';

export default class Chart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            statuschart: {},
            monthchart: {},
            datamonth:[
                6175941,
                4810453,
                3530667,
                2065951,
                6056298,
                9772191,
                5900421,
                5223142,
                8234532,
                9928128,
                6792451,
                8231376,
                6159412,
                4104523,
                3506067,
                2061951,
                6056298,
                9072191,
                8900421,
                5234142,
                8345382,
                9281328,
                6792141,
                8234176,
                5890421,
                5224142,
                8245382,
                9281328,
                7921451,
                8231376,
                ],
                
        }
    }


    componentDidMount(){
        fetch("/chartstatus")
        .then((res)=> res.json())
        .then((row) => this.setState({statuschart: row}))
        
    }


    render(){
        return(
            <div>
            <div style={{backgroundColor:"white", marginTop:"2vw"}}>
                <Line
                    height= {400}
                    data={dayChart(this.state.datamonth)}
                    options={{
                        title:{
                            display: true,
                            text: "Line Chart Day Statistic", 
                            fontSize: 25
                        },
                        maintainAspectRatio: false
                    }}
                />
            </div>
            <div className="row" style={{width:"100%", margin:"0px", marginTop:"5vw"}}>
                    <Paper className="col-5" style={{backgroundColor:"white" , height:'50vw'}}>
                        <Bar
                            type="horizontalBar"
                            height= {400}
                            data={monthChart(this.state.dataoveryear)}
                            options={{
                                title:{
                                    display: true,
                                    text: "Bar Chart Month Statistic", 
                                    fontSize: 25
                                },
                                maintainAspectRatio: false
                            }}
                        />
                    </Paper>
                    <div className="col-2">

                    </div>
                    <Paper className="col-5" style={{backgroundColor:"white", height:'50vw'}}>
                        <Pie
                            height = {400}
                            data={yearChart()}
                            options={{
                                title:{
                                    display: true,
                                    text: "Pie Chart StatusOrders Statistic", 
                                    fontSize: 25
                                },
                                maintainAspectRatio: false
                            }}
                        />

                    </Paper>
            </div>
            </div>
        )
    }
}