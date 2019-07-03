import React from 'react';
import './App.css';
import Player from './components/videoPlayer';
import {crudBuilder} from './services/http'
import List from './components/videoList';

const API_KEY = 'AIzaSyDD6S6EJGbXCvgt4AjqqjXkGqEkfZGUS5Q';
const playList = 'PLPxbbTqCLbGE5AihOSExAa4wUM-P42EIJ';
const count = 28;

export default class App extends React.Component{

  state = {
    videos:[],
    list:[],
    // data:[]
  }   

async componentDidMount(){
    const response = await crudBuilder(`playlistItems?part=snippet,id&maxResults=${count}&playlistId=${playList}&key=${API_KEY}`).get();
    const videos = response.data.items.map(item => `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}?list=PLPxbbTqCLbGE5AihOSExAa4wUM-P42EIJ`);
    this.setState({
      videos: videos
    });
    const list = response.data.items.map(item => item.snippet);
    this.setState({
      list: list
    });
}

  render(){
    return(
      <div className='wrapper'>
        <Player data={this.state.videos} />
        <List list={this.state.list} />
      </div>
    );
  }
}
