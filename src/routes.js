import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';

import Home from './components/Home/home'
import Layout from './hoc/Layout/layout'
import NewsArticles from './components/Articles/Post/index';
import VideoArticles from './components/Articles/Videos';
import News from './components/Articles/Post/news';
import Videos from './components/Articles/Videos/videos';

class Routes extends Component {
    render(){
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news" exact component={News} /> 
                    <Route path="/videos" exact component={Videos} /> 
                    <Route path="/articles/:id" exact component={NewsArticles} /> 
                    <Route path="/videos/:id" exact component={VideoArticles} /> 
                </Switch>
            </Layout>
        )
    }
}

export default Routes;