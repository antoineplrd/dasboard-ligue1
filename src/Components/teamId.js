import React from "react";


class teamId extends React.Component {

    teamid(team_name) {
        if (team_name === "Paris SG" || team_name === "PSG") {
            return (
                "10061"
            )
        }
        else if (team_name === "Lens") {
            return (
                "9998"
            )
        }
        else if (team_name === "Nice") {
            return (
                "10033"
            )
        }
        else if (team_name === "Marseille") {
            return (
                "10042"
            )
        }
        else if (team_name === "Rennes") {
            return (
                "10122"
            )
        }
        else if (team_name === "Angers") {
            return (
                "9831"
            )
        }
        else if (team_name === "Nantes") {
            return (
                "10031"
            )
        }
        else if (team_name === "Monaco") {
            return (
                "10020"
            )
        }
        else if (team_name === "Lyon") {
            return (
                "10040"
            )
        }
        else if (team_name === "Lille") {
            return (
                "10004"
            )
        }
        else if (team_name === "Lorient") {
            return (
                "10007"
            )
        }
        else if (team_name === "Montpellier") {
            return (
                "10024"
            )
        }
        else if (team_name === "Clermont") {
            return (
                "9896"
            )
        }
        else if (team_name === "Troyes") {
            return (
                "10140"
            )
        }
        else if (team_name === "Reims") {
            return (
                "10073"
            )
        }
        else if (team_name === "Bordeaux") {
            return (
                "9875"
            )
        }
        else if (team_name === "Brest") {
            return (
                "9880"
            )
        }
        else if (team_name === "Metz") {
            return (
                "10018"
            )
        }
        else if (team_name === "St Etienne" || team_name === "Saint-Etienne") {
            return (
                "10085"
            )
        }
        else if (team_name === "Strasbourg") {
            return (
                "10124"
            )
        }
    }

    render() {
        return (
            this.teamid(this.props.team_name)
        )
    }
}
export default teamId;