// import 'react' library from node_modules and assign to the variable """React"""!!
import React, { Component } from 'react';
import YTsearch from 'youtube-api-search';

import SearchBar from './SearchBar';
import VideoList from './VideoList';

const API_KEY =  'AIzaSyCl0Uw5sotiFLbnHB9HsRyHbsOXFYi7s4I';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { videos: [] };
    // Search and populate with surfboard vodeos when the app loads first
    YTsearch({key: API_KEY, term: "surfboards"}, (videos) => {
      this.setState( {videos} );
    });
  }

  render() {
    return(
      <div>
         <SearchBar />
         <VideoList videos = {this.state.videos} />
      </div>
    );
  }
}

export default App;

