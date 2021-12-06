import React from 'react';
import './widget2.css';
import './Logo.js';
import Logo from './Logo.js';

class Widget2 extends React.Component {
    _isMounted = false;
    constructor(props) {
        var date = new Date();
        var dateOffSet = (24 * 60 * 60 * 1000) * 7;
        var dateFrom = new Date();
        dateFrom.setTime(dateFrom.getTime() - dateOffSet);
        var dateString = "";
        var dateStringFrom = "";
        dateString = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        dateStringFrom = dateFrom.getDate() + "." + (dateFrom.getMonth() + 1) + "." + date.getFullYear();
        super(props);
        this.dateString = dateString;
        this.dateStringFrom = dateStringFrom;

        this.state = {
            post: [],
        };
    }


    componentDidMount() {
        this._isMounted = true;
        fetch(`https://data.football-api.com/v3/matches?comp_id=1221&from_date=${this.dateStringFrom}&to_date=${this.dateString}&Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b        `)
            .then((response) => response.json())
            .then((result) => {
                if (this._isMounted) {
                    this.setState({
                        post: result,

                    })
                }
            })


    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (

            <div className="table-responsive">
                <table className="tableau_style2">
                    <caption className="title_last_match">Résultats 3 derniers jours</caption>
                    <thead>

                        {this.state.post.reverse().slice(0, 4).map((post, index) => (
                            <tr key={`list-elem-${index}`} className="row_result" >
                                <td className="local_logo"> <Logo team_name={post.localteam_name} widht="25px" height="25px" /></td>
                                <td className="local_name">{post.localteam_name}</td>
                                <td className="local_team_score">{post.localteam_score}</td>
                                <td className="vs">vs</td>
                                <td className="visitor_team_score">{post.visitorteam_score}</td>
                                <td className="visitor_name">{post.visitorteam_name}</td>
                                <td className="visitor_logo"><Logo team_name={post.visitorteam_name} widht="25px" height="25px" /></td>
                                <td className="horloge"><Logo team_name="horloge" widht="15px" height="15px" /></td>
                                <td className="match_time">{post.time}</td>
                                <td className="match_day">{post.formatted_date}</td>


                                <td className="more_infos">
                                    {this.state.post[index].events.map((post, index1) => (

                                        <div key={`list-elem-${index1}`}>{post.minute}"<Logo team_name={post.type} weight="20px" height="20px" /> : {post.player}
                                        </div>


                                    ))}
                                </td>

                            </tr>
                        ))}
                    </thead>
                </table>
            </div>

        )
    }
}

export default Widget2;