import React, { Component } from 'react';
import { SERVER_URL } from "../../../config";
import axios from "axios";

import style from '../articles.css'
import Header from './header';
import VideosRelated from '../../widgets/VideosList/videos_related';

class VideoArticles extends Component {

    state = {
        article: {},
        team: {},
        teams: [],
        related: []
    }

    componentWillMount(){
        axios.get(`${SERVER_URL}/videos?id=${this.props.match.params.id}`)
        .then(res =>{
            let article = res.data[0];
            axios.get(`${SERVER_URL}/teams?id=${article.team}`)
            .then(res => {               
                this.setState({
                    article,
                    team:res.data[0]
                })
                this.getRelated();
            });
        })
    }

    getRelated = () => {
        axios.get(`${SERVER_URL}/teams`)
        .then(res => {               
            let teams = res.data;
            axios.get(`${SERVER_URL}/videos?q=${this.state.team.city}&_limit=3`)
            .then(res => {
                this.setState({
                    teams,
                    related:res.data
                })
            })
        });
    }

    render(){
        const team = this.state.team;
        const article = this.state.article;
        return (
            <div className={style.article_wrapper}>
                <Header teamData= {team}/>
                <div className={style.video_wrapper}>
                    <h1>{article.title}</h1>
                    <iframe
                        title="videoplayer"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${article.url}`}
                    >

                    </iframe>
                </div>
                <VideosRelated
                    data={this.state.related}
                    teams={this.state.teams}
                />
            </div>
        )
    }
}

export default VideoArticles;