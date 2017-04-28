// Import React
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import NarBar from './components/navbar'
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyC9gJsKcp-ATOebxdLjY49_Qr0QscpTmIY';


//Create a new component that produces HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            autoplay: 0
        };

        this.videoSearch('gerard+adams')

    }

    videoSearch(term){

        //Search YOUTUBE
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // this.setState({ videos });
            this.setState({
                selectedVideo: videos[0],
                videos: videos
            });
            console.log(videos);
        });

    }
    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div className="row">
                <NarBar />
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetail
                    video={this.state.selectedVideo}
                    autoplay={this.state.autoplay} />
                <VideoList
                    onVideoSelect={selectedVideo => {
                        window.scrollTo(0, 0);
                        this.setState({selectedVideo : selectedVideo, autoplay: 1 });
                        }}
                    videos={this.state.videos} />

            </div>
        );
    }
}


// Take this component generated HTML and put it on the page and in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));

