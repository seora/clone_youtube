import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./VideoCard.css"


//title, views, channel, timestamp, image1, image2
function VideoCard({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div>
            <img className ="videoCard__thumbnail" src={image} alt="" />
            <div className="videoCard__info">
                <Avatar 
                    className="videoCard__avatar" 
                    alt={channel}
                    src={channelImage}
                />
                <div className="videoCard__text">
                    <h4 class="ellipsis">{title}</h4>
                    <p>{channel}</p>
                    <p>{views} ∙ {timestamp}</p>
                </div>
            </div>

        </div>
    )
}

export default VideoCard

