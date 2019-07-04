import React from 'react'
import './style.css'

export default class List extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div className="wrapperList">
                <div className="listTitle">
                    React Conf 2018
                </div>
                {
                    this.props.list.map((item, index)=>(
                        <div key={index} className="itemBlock"  onClick={() => this.props.updateData(item.resourceId.videoId, item.title)}>
                            <div className="img">
                                {item.position+1}<img src={item.thumbnails.medium.url} alt='logo' />
                            </div>
                            <p className="title">
                            {item.title}
                            </p>
                        </div>
                    ))
                }
            </div>
        );
    }
}