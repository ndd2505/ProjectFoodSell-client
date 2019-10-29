import React from "react";
import { Line,Bar,Pie } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import dayChart from './daychart';
import monthChart from './monthchart';
import yearChart from './yearchart';

export default class Chart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            datayear:[
                61759412,
                48104523
                ],
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
                dataday:[
                    112343,
                    101200,
                    101230,
                    500000,
                    104560,
                    134500,
                    166000,
                    152540,
                    175400,
                    190000,
                    113400,
                    146400,
                    126120,
                    107886,
                    195600,
                    114000,
                    940000,
                    119000,
                    900000,
                    634500,
                    112300,
                    198000,
                    141000,
                    160000,
                    ],
                
        }
    }


    render(){
        return(
            <div>
            <div style={{backgroundColor:"white", marginTop:"2vw"}}>
                <Line
                    
                    height= {400}
                    data={dayChart(this.state.dataday)}
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
                    <Paper className="col-5" style={{backgroundColor:"white"}}>
                        <Bar
                            type="horizontalBar"
                            height={400}
                            data={monthChart(this.state.datamonth)}
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
                    <Paper className="col-5" style={{backgroundColor:"white"}}>
                        <Pie
                            height = {400}
                            data={yearChart(this.state.datayear)}
                            options={{
                                title:{
                                    display: true,
                                    text: "Pie Chart Year Statistic", 
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