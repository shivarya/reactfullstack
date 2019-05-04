import React from 'react';
import style from './videos_list.css'

import { Link } from "react-router-dom";
import CardInfo from '../CardInfo/card_info';

const VideosListTemplate = props => {
    return props.data.map((item,i) => (
        <Link to={`/videos/${item.id}`} key={i}>
            <div className={style.videos_list_item_wrapper}>
                <div 
                    className={style.left}
                    style = {{
                        background: `url(/images/videos/${item.image})`
                    }}
                >
                    <div></div>
                </div>
                <div className={style.right}>
                    <CardInfo 
                        teams= {props.teams}
                        team_id= {item.team}
                        date= {item.date}
                    />
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    ))
}

export default VideosListTemplate;