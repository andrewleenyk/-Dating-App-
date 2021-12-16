import React from 'react';
import './Card.css'
export default function Card(props) {
const { title, thumbnail, body, author } = props;
return (
    <div className="card">
        <h3>{title}</h3>
        <img src={thumbnail} alt="thumbnail"></img>
    </div>
)
}
