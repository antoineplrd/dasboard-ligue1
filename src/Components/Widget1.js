import React from 'react';
import './widget1.css';
import './Logo.js';
import Logo from './Logo.js';


class Widget1 extends React.Component {

    _isMonted = false;

    constructor(props) {
        super(props);
        this.state = {
            post: [],
        };
    }

    componentDidMount() {
        this._isMounted = true;
        fetch("https://data.football-api.com/v3/standings/1221?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b        ")
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


            <div id="table-wrapper">
                <div className="title_classement">Classement Championnat</div>
                <div id="table-scroll">
                    <div className="table-responsive">
                        <table responsive="true" className="tableau-style">

                            <thead className="table_title">
                                <tr>
                                    <th className="th_pos">Pos</th>
                                    <th></th>
                                    <th className="th_team"><strong>Team</strong></th>
                                    <th className="th_chiffre"><strong>W</strong></th>
                                    <th className="th_chiffre"><strong>D</strong></th>
                                    <th className="th_chiffre"><strong>L</strong></th>
                                    <th className="th_chiffre"><strong>Ga</strong></th>
                                    <th className="th_chiffre"><strong>Pts</strong> </th>
                                </tr>
                            </thead>
                            <tbody className="row_info">
                                {this.state.post.map((post, index) => (
                                    <tr key={`list-elem-${index}`} >
                                        <td className="position">{post.position}</td>
                                        <td className="team_logo"><Logo team_name={post.team_name} widht="22px" height="22px" /></td>
                                        <td className="team_name_W1">{post.team_name}</td>
                                        <td className="information">{post.overall_w}</td>
                                        <td className="information">{post.overall_d}</td>
                                        <td className="information">{post.overall_l}</td>
                                        <td className="information">{post.gd}</td>
                                        <td className="information">{post.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div >
                </div>
            </div>
        )

    }
}

export default Widget1;