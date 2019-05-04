import React, { Component } from 'react';
import { SERVER_URL } from "../../../config";
import axios from "axios";

import style from '../articles.css'
import Header from './header';

class NewsArticles extends Component {

    state = {
        article: {},
        team: {}
    }

    componentWillMount(){
        axios.get(`${SERVER_URL}/articles?id=${this.props.match.params.id}`)
        .then(res =>{
            let article = res.data[0];
            axios.get(`${SERVER_URL}/teams?id=${article.team}`)
            .then(res => {               
                this.setState({
                    article,
                    team:res.data[0]
                })
            });
        })
    }

    render(){
        const team = this.state.team;
        const article = this.state.article;
        return (
            <div className={style.article_wrapper}>
                <Header
                    teamData= {team}
                    date= {article.date}
                    author= {article.author}
                />
                <div className={style.article_body}>
                    <h1>{article.title}</h1>
                    <div className={style.article_image}
                        style={{
                            background:`url('/images/articles/${article.image}')`
                        }}
                    >
                    </div>
                    <div className={style.body_text}>
                        {article.body}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsArticles;