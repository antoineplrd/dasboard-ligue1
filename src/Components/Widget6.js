import React from 'react';
import './Widget6.css';
import './Logo.js';
import Logo from './Logo.js';


class Widget6 extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);

        this.state = {
            post: [],
        };
    }

    componentDidMount() {
        this._isMounted = true;
        fetch("http://localhost:3001/readMatch")
            .then((response) => response.json())
            .then((result) => {
                if (this._isMounted) {
                    this.setState({ post: result })
                }
            })

    }
    componentWillUnmount() {
        this._isMounted = false;
    }


    render() {

        return (

            <div className="background_live">
                {this.state.post.slice(0, 1).map((post, index) => (
                    <div key={index}>
                        <div className="match_direct">Match en direct</div>
                        <div className="logo_score"><span className="logo_dom"><Logo team_name={post.Team1} widht="70px" height="70px" /></span>
                            <span className="score_live">{post.ScoreTeam1} - {post.ScoreTeam2}</span>
                            <span className="logo_dom"><Logo team_name={post.Team2} widht="70px" height="70px" /></span></div>
                        <div className="live"><span className="logo_live">Live</span></div>
                        <div className="infos"><Logo team_name="horloge1" widht="20px" height="20px" /> <span className="timer">34"</span>
                            <Logo team_name="loca" widht="20px" height="20px" /> <span className="place">{post.Place}</span></div>
                    </div>


                ))}
            </div>



        )

    }
}

export default Widget6;