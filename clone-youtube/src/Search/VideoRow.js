import React from 'react';
import "./VideoRow.css";

function VideoRow({view, title, description, timestamp, channel, channelImage, image}) {
    return (
        <div className="videoRow"> 
            <img src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {view} ∙ {timestamp}   
                </p>
                <p>{channel}</p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
