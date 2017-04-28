/**
 * Created by user on 4/27/17.
 */
import React from 'react';
import VideoListItem from './video_list_items';

const VideoList = (props) => {

    const videoItems = props.videos.map((video, onVideoSelect) => {

        return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            video={video}
            key={video.etag} />

    });

    return (
        <div className="col s12 m4">

            {videoItems}

        </div>
    )
};

export default VideoList;