import React, {Component} from 'react';
import axios from "axios";
import { SERVER_URL } from "../../../config";
import style from "./videos_list.css";
import Button from '../Button/button'; 
import VideosListTemplate from './videos_template';


class VideosList extends Component {

    state = {
        teams : [],
        videos: [],
        start : this.props.start,
        end : this.props.start + this.props.amount,
        amount : this.props.amount
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end);
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end);
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

        axios.get(`${SERVER_URL}/videos?_start=${start}&_end=${end}`)
        .then(res => {
            this.setState({
                videos : [...this.state.videos,...res.data],
                start,
                end
            });
        });
    }

    rendeTitle = (title) => {
        return  title ? 
            <h3><strong>NBA</strong> Videos</h3>
            : 
            "";
    }

    rendeLoadMore = (display) => {
        return  display ? 
            <Button
                type= "loadmore"
                loadMore = {() => this.loadMore() }
                cta = "Load More Button"
            ></Button>
        : 
        <Button
            type= "linkTo"
            linkTo="/videos"
            cta = "More Videos"
        ></Button>;
    }

    renderVideos = type => {
        let template = null;
        switch(type){
            case ("card"):
                template = <VideosListTemplate data={this.state.videos} teams={this.state.teams} />
                break;
            default:
                template = null;
        }
        return template;
    }

    render() {
        return (
            <div className={style.video_list_wrapper}>
                {this.rendeTitle(this.props.title)}
                {this.renderVideos(this.props.type)}
                {this.rendeLoadMore(this.props.loadmore)}
            </div>
        )
    }
}

export default VideosList;