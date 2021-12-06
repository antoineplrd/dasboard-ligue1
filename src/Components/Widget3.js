import React from 'react';
import './Widget3.css';
import './Logo.js';

import {
    BarChart, ResponsiveContainer, Legend, LabelList, Tooltip, Bar, XAxis, YAxis,
    CartesianGrid
} from 'recharts';


class Widget3 extends React.Component {

    _isMounted = false;
    constructor(props) {
        super(props);

        this.state = {
            post: [],
        };
    }

    componentDidMount() {
        this._isMounted = true;
        fetch("https://football98.p.rapidapi.com/ligue1/scorers", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "football98.p.rapidapi.com",
                "x-rapidapi-key": "3685a79f54msh29c76be0f40710cp1df765jsn975bada232b4"
            }
        })
            .then(response => response.json())
            .then((result) => {
                if (this._isMounted) {
                    this.setState({ post: result })
                }
            })
            .catch(err => {
                console.error(err);
            });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {

        return (
            <div>
                <div className="text-center font-weight-bold">Graphe meilleurs buteurs du championnat</div>
                <ResponsiveContainer width={'100 %'} height={200}>
                    <BarChart layout="vertical" data={this.state.post.slice(0, 8)} margin={{
                        top: 5,
                        right: 20,
                        bottom: 5,
                    }} >
                        <CartesianGrid />
                        <XAxis type="number" />
                        <YAxis dataKey="player_name" fontSize={0} type="category" scale="band" stroke="#02153C" />
                        <Legend />
                        <Tooltip />
                        <Bar dataKey="player_goals" name="Buts" barSize={40} stackId="a" fill="#02153C" label={{ position: 'right' }}>
                            <LabelList dataKey="player_name" position="insideRight" style={{ fill: "white" }} fontSize={10} />
                        </Bar>

                    </BarChart>
                </ResponsiveContainer>
            </div>

        )

    }
}

export default Widget3;