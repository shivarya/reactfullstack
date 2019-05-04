import React from 'react';
import style from './videos_list.css';
import VideosListTemplate from './videos_template';

const VideosRelated = props => (        
    <div className={style.related_wrapper}>
        <VideosListTemplate 
            data={props.data}
            teams={props.teams}
        />
    </div>
)


export default VideosRelated;