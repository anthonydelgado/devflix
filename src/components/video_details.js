/**
 * Created by user on 4/27/17.
 */
import React from 'react';

const VideoDetail = ({video, autoplay}) => {


    if(!video){
        return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        );
    }

    const videoID = video.id.videoId;
    const url = `//www.youtube.com/embed/${videoID}?rel=0&autoplay=${autoplay}`;



    return (

      <div className="col s12 m8">

          <div className="video-container">
              <iframe width={853} height={480} src={url} frameBorder={0} allowFullScreen />
          </div>
          <h4 className="truncate">{video.snippet.title}</h4>
          <p className="flow-text">

              {video.snippet.description}
          </p>


          <div className="card-panel grey lighten-5 z-depth-1">
              <div className="row valign-wrapper">
                  <div className="col s2">
                      <img src="https://pbs.twimg.com/profile_images/855289906121236480/fwP8WtrG.jpg"  className="circle responsive-img" />
                  </div>
                  <div className="col s10">
            <span className="black-text">
                <h5>Meet the Instructor</h5>
              <strong>Gerard Adams</strong> is an American serial entrepreneur, millennial branding expert, philanthropist, TEDx speaker and business executive. Adams is best known as co-founder of Elite Daily, which sold to the Daily Mail in 2015 for $50 million.
            </span>
                  </div>
              </div>
          </div>

      </div>
  )

};

export default VideoDetail;