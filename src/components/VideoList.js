import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    //We have access to the videos array and we will pass each video item to the VideoListItem component
    const videoItem = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video = {video} />;
    });

    return(
        <ul className="col-md-4 list-group" >
            { videoItem }
        </ul>
    );
};

export default VideoList;