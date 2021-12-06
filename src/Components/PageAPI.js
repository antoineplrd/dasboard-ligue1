import React from 'react';
import { useState, useEffect } from 'react';
import './PageAPI.css';
import Axios from 'axios';


function PageAPI() {

    const [Team1, SetTeam1] = useState("");
    const [Team2, SetTeam2] = useState("");
    const [ScoreTeam1, SetScoreTeam1] = useState(0);
    const [ScoreTeam2, SetScoreTeam2] = useState(0);
    const [Place, SetPlace] = useState("");
    const [ListMatchs, SetListMatchs] = useState([]) // [] car on return une array

    const addMatch = () => {
        Axios.post('https://dashboard-ligue1.herokuapp.com/addMatch', {
            Team1: Team1,
            Team2: Team2,
            ScoreTeam1: ScoreTeam1,
            ScoreTeam2: ScoreTeam2,
            Place: Place,
        }).then((response) => {
            alert(" match ajouté");
            SetListMatchs([...ListMatchs, { _id: response.data.id, Team1: Team1, Team2: Team2, ScoreTeam1: ScoreTeam1, ScoreTeam2: ScoreTeam2, Place: Place }]);

            //on fait appelle à cette fonction afin d'envoyer à notre setlistmatchs le dernier ajout 
            Axios.get('https://dashboard-ligue1.herokuapp.com/readMatch')
                .then((response) => {
                    SetListMatchs(response.data);
                })
                .catch(() => {
                    console.log("erreur pour afficher l'API");
                });

            // ... list matchs correspond a tous les matchs dans la database + on ajoute celui qu'on vient de saisir à l'ecran
        });
    };


    //useEffect fonction qui ce lance a chaque fois qu'on ouvre/ raffraichi une page

    useEffect(() => {
        Axios.get('https://dashboard-ligue1.herokuapp.com/readMatch')
            .then((response) => {
                SetListMatchs(response.data);
            })
            .catch(() => {
                console.log("erreur pour afficher l'API");
            });
    }, []);

    const modifierMatch = (id) => {
        const newTeam1 = prompt("Entrer la nouvelle équipe 1: ");
        const newTeam2 = prompt("Entrer la nouvelle équipe 2: ");
        const newScoreTeam1 = prompt("Entrer score équipe 1: ");
        const newScoreTeam2 = prompt("Entrer score équipe 2: ");
        const newPlace = prompt("Entrer le nouvel emplacement du match: ");



        Axios.put('https://dashboard-ligue1.herokuapp.com/updateMatch', {
            newTeam1: newTeam1,
            newTeam2: newTeam2,
            newScoreTeam1: newScoreTeam1,
            newScoreTeam2: newScoreTeam2,
            newPlace: newPlace,
            id: id,
        }).then(() => {
            SetListMatchs(
                ListMatchs.map((valeur) => {
                    return valeur._id === id ?
                        { _id: id, Team1: newTeam1, Team2: newTeam2, ScoreTeam1: newScoreTeam1, ScoreTeam2: newScoreTeam2, Place: newPlace } : valeur;
                })
            );
        });
    };


    const supprimerMatch = (id) => {

        Axios.delete(`https://dashboard-ligue1.herokuapp.com/deleteMatch/${id}`).then(() => {
            SetListMatchs(
                ListMatchs.filter((valeur) => {
                    return valeur._id !== id;
                })
            );
        });
        alert(" match supprimé");
    };

    return (
        <div className="global">
            <div className="design">

                <input type="text" placeholder="Nom équipe 1 ..."
                    onChange={(event) => {
                        SetTeam1(event.target.value);
                    }}
                />  <br /><br />

                <input type="text" placeholder="Nom équipe 2 ..."
                    onChange={(event) => {
                        SetTeam2(event.target.value);
                    }}
                />  <br /><br />
                <input type="number" placeholder="But équipe 1 ..."
                    onChange={(event) => {
                        SetScoreTeam1(event.target.value);
                    }}
                />  <br /><br />


                <input type="number" placeholder="But equipe 2 ..."
                    onChange={(event) => {
                        SetScoreTeam2(event.target.value);
                    }}
                />  <br /><br />

                <input type="text" placeholder="Emplacement du match ..."
                    onChange={(event) => {
                        SetPlace(event.target.value);
                    }}
                />  <br /><br />
            </div>
            <button id="btn2" onClick={addMatch}> Ajouter un Match </button>



            <div className="ListMatchs">
                {ListMatchs.map((valeur, index) => {
                    return (
                        <div className="MatchContainer" key={`list-elem-${index}`}>
                            <div className="Matchs">

                                <div className="size">Team 1 : {valeur.Team1} </div>
                                <div className="size">Team 2 : {valeur.Team2}</div>
                                <div className="size">But {valeur.Team1} : {valeur.ScoreTeam1} </div>
                                <div className="size">But {valeur.Team2} : {valeur.ScoreTeam2} </div>
                                <div className="size">Emplacement match: {valeur.Place} </div>
                            </div>
                            <button onClick={() => {
                                modifierMatch(valeur._id);
                            }}>Update</button>

                            <button id="btn" onClick={() => {
                                supprimerMatch(valeur._id);
                            }}>X</button>

                        </div>
                    );
                })}
            </div>
        </div>
    )


}


export default PageAPI;