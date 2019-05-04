import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../../config";
import style from "./news_list.css";
import Button from '../Button/button';
import CardInfo from '../CardInfo/card_info';

class NewsList extends Component {

    state = {
        teams : [],
        news : [],
        start : this.props.start,
        end : this.props.start + this.props.amount,
        amount : this.props.amount
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end);
    }

    renderNews = type => {
        let template = null;
        switch(type){
            case ("card"):
                template = this.state.news.map((item,i) => {
                    return (
                        <CSSTransition
                            classNames = {{
                                enter:style.newslist_wrapper,
                                enterActive: style.newslist_wrapper_enter
                            }}
                            timeout = {500}
                            key = {i}
                        >
                            <div className={style.newslist_item} >
                                <Link to={`articles/${item.id}`}>
                                    <CardInfo 
                                        teams={this.state.teams}
                                        team_id= {item.team}
                                        date = {item.date}
                                    />
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </CSSTransition>
                    );
                });
                break;
            case ("featured"):
                template = this.state.news.map((item,i) => {
                    return (
                        <CSSTransition
                            classNames = {{
                                enter:style.newslist_wrapper,
                                enterActive: style.newslist_wrapper_enter
                            }}
                            timeout = {500}
                            key = {i}
                        >
                        <Link to={`articles/${item.id}`}>
                            <div className={style.flex_wrapper} >                                
                                    <div className={style.left}
                                        style = {{
                                            background: `url(/images/articles/${item.image})`
                                        }}
                                    >
                                    <div></div>
                                    </div>
                                    <div className={style.right}>
                                        <CardInfo 
                                            teams={this.state.teams}
                                            team_id= {item.team}
                                            date = {item.date}
                                        />
                                        <h1>{item.title}</h1>
                                    </div>
                                </div>
                            </Link>
                        </CSSTransition>
                    );
                });
                break;
            default:
                template = null;
        }
        return template;
    }

    request = (start,end) => {
        if(this.state.teams.length < 1){
            axios.get(`${SERVER_URL}/teams`)
            .then(res => {
                this.setState({
                    teams : res.data
                });
            });
        }

        axios.get(`${SERVER_URL}/articles?_start=${start}&_end=${end}`)
        .then(res => {
            this.setState({
                news : [...this.state.news,...res.data],
                start,
                end
            });
        });
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end);
    }

    render() {
        return (
            <div>
                <TransitionGroup
                    component = 'div'
                    className = 'list'
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                <Button
                    type= "loadmore"
                    loadMore = {() => this.loadMore() }
                    cta = "Load More Button"
                >

                </Button>
            </div>
        )
    }
}

export default NewsList;