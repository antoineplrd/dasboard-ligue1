import React from 'react';
import './Widget5.css';
import './Logo.js';
import teamId from './teamId';
import Logo from './Logo.js';


class Widget5 extends React.Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            post: [],
            post1: [],
            post3: [],

        };
    }

    componentDidMount() {
        this._isMounted = true;
        fetch("http://localhost:3001/readMatch")
            .then((response) => response.json())
            .then((result) => {
                if (this._isMounted) {
                    this.setState({ post3: result })

                    fetch(`https://data.football-api.com/v3/teams/${new teamId().teamid(result[0].Team1)}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b        `)
                        .then((response) => response.json())
                        .then((result) => {
                            if (this._isMounted) {
                                this.setState({ post: result })
                            }
                        })
                    fetch(`https://data.football-api.com/v3/teams/${new teamId().teamid(result[0].Team2)}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b        `)
                        .then((response) => response.json())
                        .then((result) => {
                            if (this._isMounted) {
                                this.setState({ post1: result })
                            }
                        })
                }

            })


    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="container-bg" >
                <div className="container-fluid mb-4 w-100" >
                    {this.state.post.map((post, index) => (
                        <div className="team1" key={`list-elem-${index}`}>
                            <div className="row pb-2">
                                <div className="col-12 text-center">{post.squad[1].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                            </div>
                            <div className="row pb-2">
                                <div className="col-3 text-center">{post.squad[2].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-3 text-center">{post.squad[3].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-3 text-center">{post.squad[4].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-3 text-center">{post.squad[5].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                            </div>
                            <div className="row pb-2">
                                <div className="col-4 text-center">{post.squad[8].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-4 text-center">{post.squad[9].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-4 text-center">{post.squad[10].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                            </div>
                            <div className="row pb-1">
                                <div className="col-4 text-center">{post.squad[11].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-4 text-center">{post.squad[12].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-4 text-center">{post.squad[13].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="container-fluid mt-4 w-100">
                    {this.state.post1.map((post1, index) => (

                        <div className="team2" key={`list-elem-${index}`}>
                            <div className="row pb-2">
                                <div className="col-4 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[13].name}</div>
                                <div className="col-4 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[12].name}</div>
                                <div className="col-4 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[11].name}</div>
                            </div>
                            <div className="row">
                                <div className="col-4 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[9].name}</div>
                                <div className="col-4 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[8].name}</div>
                                <div className="col-4 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[7].name}</div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[6].name}</div>
                                <div className="col-3 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[5].name}</div>
                                <div className="col-3 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[4].name}</div>
                                <div className="col-3 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[3].name}</div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[1].name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        )

    }
}

export default Widget5;