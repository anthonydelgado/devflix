/**
 * Created by user on 4/27/17.
 */
import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {

    const imageURL = video.snippet.thumbnails.high.url;

    return (
        <div className="card hoverable" onClick={() => onVideoSelect(video)}>
            <div className="card-image">
                <img src={imageURL} />
                <span className="card-title truncate">
                        {video.snippet.title}
                    </span>
                <a className="btn-floating halfway-fab waves-effect waves-light light-blue accent-3">
                    <i className="material-icons">play_arrow</i>
                </a>
            </div>
            <div className="card-content">
                <p>{video.snippet.title}</p>
            </div>
        </div>
    )
};

export default VideoListItem;
