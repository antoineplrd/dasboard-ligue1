import React from 'react';


import club1 from '../images/AS_Saint-Etienne.png';
import club2 from '../images/FC_Nantes_logo.png';
import club3 from '../images/FC-Metz.png';
import club4 from '../images/Girondins_de_Bordeaux.png';
import club5 from '../images/Logo_AS_Monaco_FC.png';
import club6 from '../images/Logo_Clermont_Foot.png';
import club7 from '../images/Logo_estac_troyes.png';
import club8 from '../images/Logo_FC_Lorient.png';
import club9 from '../images/Logo_LOSC_Lille.png';
import club10 from '../images/Logo_OGC_Nice.svg.png';
import club11 from '../images/Logo_Olympique_de_Marseille.svg.png';
import club12 from '../images/Logo_RC_Lens.png';
import club13 from '../images/Logo_SCO_Angers.png';
import club14 from '../images/Logo_Stade_Brestois.png';
import club15 from '../images/Logo_Stade_de_Reims.png';
import club16 from '../images/Logo_Stade_Rennais.png';
import club17 from '../images/Montpellier_Herault.png';
import club18 from '../images/Olympique_lyonnais_logo.png';
import club19 from '../images/Paris_Saint-Germain_Logo.svg.png';
import club20 from '../images/Racing_Club_de_Strasbourg.png';
import horloge from '../images/horloge.png';
import position from '../images/position.png';
import horloge1 from '../images/Image3.png';
import loca from '../images/locali.png';
import pin1 from '../images/pin1.png';
import pin2 from '../images/pin2.png';
import goal from '../images/ballon_foot.svg';
import red_card from '../images/carton_rouge.jpg';
import yellow_card from '../images/carton_jaune.jpg';
import subst from '../images/subs.svg';




class Logo extends React.Component {

    logo(team_name, widht, height) {
        if (team_name === "Paris SG" || team_name === "PSG") {
            return (
                club19
            )
        }
        else if (team_name === "Lens") {
            return (
                club12
            )
        }
        else if (team_name === "Nice") {
            return (
                club10
            )
        }
        else if (team_name === "Marseille") {
            return (
                club11
            )
        }
        else if (team_name === "Rennes") {
            return (
                club16
            )
        }
        else if (team_name === "Angers") {
            return (
                club13
            )
        }
        else if (team_name === "Nantes") {
            return (
                club2
            )
        }
        else if (team_name === "Monaco") {
            return (
                club5
            )
        }
        else if (team_name === "Lyon") {
            return (
                club18
            )
        }
        else if (team_name === "Lille") {
            return (
                club9
            )
        }
        else if (team_name === "Lorient") {
            return (
                club8
            )
        }
        else if (team_name === "Montpellier") {
            return (
                club17
            )
        }
        else if (team_name === "Clermont") {
            return (
                club6
            )
        }
        else if (team_name === "Troyes") {
            return (
                club7
            )
        }
        else if (team_name === "Reims") {
            return (
                club15
            )
        }
        else if (team_name === "Bordeaux") {
            return (
                club4
            )
        }
        else if (team_name === "Brest") {
            return (
                club14
            )
        }
        else if (team_name === "Metz") {
            return (
                club3
            )
        }
        else if (team_name === "St Etienne" || team_name === "Saint-Etienne") {
            return (
                club1
            )
        }
        else if (team_name === "Strasbourg") {
            return (
                club20
            )
        }
        else if (team_name === "horloge") {
            return (
                horloge
            )
        }
        else if (team_name === "position") {
            return (
                position
            )
        }
        else if (team_name === "horloge1") {
            return (
                horloge1
            )
        }
        else if (team_name === "loca") {
            return (
                loca
            )
        }
        else if (team_name === "pin1") {
            return (
                pin1
            )
        }
        else if (team_name === "pin2") {
            return (
                pin2
            )
        }
        else if (team_name === "goal") {
            return (
                goal
            )
        }
        else if (team_name === "yellowcard") {
            return (
                yellow_card
            )
        }
        else if (team_name === "redcard") {
            return (
                red_card
            )
        }
        else if (team_name === "subst") {
            return (
                subst
            )
        }
    }
    render() {
        return (
            <img src={this.logo(this.props.team_name, this.props.widht, this.props.height)} width={this.props.widht} height={this.props.height} alt="" />
        )
    }

}
export default Logo;