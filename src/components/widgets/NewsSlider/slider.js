import React,{ Component } from "react";
import axios from "axios";
import SliderTemplates from "./slider_templates";

class Slider extends Component {

    state = {
        news : []
    }

    componentWillMount(){
        axios.get(`http://localhost:3001/articles?_start=${this.props.start}&_end=${this.props.end}`)
        .then(res => {
            this.setState({
                news : res.data
            })
        });
    }

    render() {
        return (
            <SliderTemplates 
                settings = {this.props.settings}
                type={this.props.type} 
                data={this.state.news} 
            />
        );
    }
}

export default Slider;