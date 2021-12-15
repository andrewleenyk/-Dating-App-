import React from 'react';

export default function Card(props) {
const { title, thumbnail, body } = props;
return (
    <div className="card">
        <h3>{title}</h3>
        <img src={thumbnail}></img>
        <p>{body}</p>
    </div>
)
}
