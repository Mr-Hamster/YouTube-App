import React from 'react'
import './player.css'
import YouTube from 'react-youtube';

export default class Player extends React.Component{

    render(){
        const opts = {
            height: '450',
            width: '800',
            playerVars: { 
              autoplay: 1
            }
          };
        return(
            <div className='wrapperPlayer'>
                <YouTube
                    videoId={this.props.selectedVideo}
                    opts={opts}
                    onReady={this._onReady}
                />                
                <p className="titlePlayer">
                    {this.props.videoTitle}
                </p>
            </div>
        );
    }
}
