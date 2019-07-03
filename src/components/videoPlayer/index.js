import React from 'react'
import './style.css'

export default class Player extends React.Component{
    render(){
        return(
            <div className='wrapperPlayer'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/V-QO-KO90iQ?list=PLPxbbTqCLbGE5AihOSExAa4wUM-P42EIJ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                {/* {
                    this.props.data.map((item, index) =>(
                        <iframe key={index} width="853" height="480" src={item} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>  
                        </iframe>
                    ))
                } */}
            </div>
        );
    }
}