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
    list:[],
    selectedVideo:'',
    videoTitle:''
  }   

  updateData = (item, title) => {
    this.setState({ 
      selectedVideo: item,
      videoTitle: title
    })
  }

  async componentDidMount(){
      const response = await crudBuilder(`playlistItems?part=snippet,id&maxResults=${count}&playlistId=${playList}&key=${API_KEY}`).get();
      const list = response.data.items.map(item => item.snippet);
      const firstVideo = response.data.items.map(item => item.snippet.resourceId.videoId);
      const videoTitle = response.data.items.map(item => item.snippet.title);
      this.setState({
        list,
        selectedVideo: firstVideo[0],
        videoTitle:videoTitle[0] 
      });
  }

  render(){
    console.log(this.state)
    return(
      <div className='wrapper'>
        <Player selectedVideo={this.state.selectedVideo} videoTitle={this.state.videoTitle}/>
        <List list={this.state.list} updateData={this.updateData} />
      </div>
    );
  }
}
