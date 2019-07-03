import React from 'react'
import './style.css'

export default class List extends React.Component{
    render(){
        return(
            <div className="wrapperList">
                {
                    this.props.list.map((item, index)=>(
                        <div key={index} className="itemBlock" id={item.resourceId.videoId}>
                            <div className="img">
                                <img src={item.thumbnails.medium.url} alt='logo' />
                            </div>
                            <p className="title">{item.title}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}