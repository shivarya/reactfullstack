import React from 'react';
import NewsList from '../../widgets/NewsList/news_list';
import NewsSlider from '../../widgets/NewsSlider/slider';

const News = () => {
    return (
        <div>
            <NewsSlider
                type = "featured"
                start = {0}
                end = {3}
                settings = {{
                    dots: false
                }}
            />
            <NewsList 
                type = "featured"
                loadmore = {true}
                start = {0}
                amount = {6}
            />
        </div>
    )
}

export default News;