import React from 'react';
import FontAwesome from "react-fontawesome";
import style from "./card_info.css";

const CardInfo = (props) => {
    const getTeamName = (team_id) => {
        let data = props.teams.find((item) => {
            return item.id === team_id
        })
        if(data){
            return data.name;
        }
    }

    return (
        <div className={style.card_info}>
            <span className={style.team_name}>{getTeamName(props.team_id)}</span>
            <span className={style.date}>
                <FontAwesome name="clock-o" /> {props.date}
            </span>
        </div>
    )
}

export default CardInfo;