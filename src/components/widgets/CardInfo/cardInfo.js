import React from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

import styles from './cardInfo.css'

const CardInfo = (props) =>{

    const teamName = (teams,team) =>{
        let data = teams.find((item)=>{                 
            return (
                parseInt(item.id, 10) === team
            )
        });
        if(data){
            return data.name
        }
    }

    const formatDate = (date) => {
        moment.suppressDeprecationWarnings = true;   
        return moment(date).format('MM-DD-YYYY');
    }
    return(
        <div className={styles.cardNfo}>
            <span className={styles.teamName}>
                {teamName(props.teams,props.team)}
            </span>
            <span className={styles.date}>
                <FontAwesome name="clock-o"/>
                {" "+formatDate(props.date)}
            </span>
        </div>
    )
}

export default CardInfo;