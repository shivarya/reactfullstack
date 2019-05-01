import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';

const Home = () => {
    return (
        <NewsSlider 
            type="featured"
            start = {0}
            end = {4}
            settings = {{
                dots: false
            }}
        />
    )
}

export default Home;