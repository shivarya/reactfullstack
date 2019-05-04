import React from 'react';
import VideosList from '../../widgets/VideosList/videos_list';

const Videos = () => {
    return (
        <div>
            <VideosList
                type = "card"
                title= {true}
                loadmore = {true}
                start = {0}
                amount = {9}
            />
        </div>
    )
}

export default Videos;