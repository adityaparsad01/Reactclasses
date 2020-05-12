import React from 'react';
import './Avatar.css'


const AvatarList = (props) => {
    return (
        <div className="avatarstyle ma4 bg-light-purple dib pa3 grow tc shadow-2">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
                <h1>{props.name}</h1>
                <p>{props.work}</p>
    </div>
    )
}

export default AvatarList