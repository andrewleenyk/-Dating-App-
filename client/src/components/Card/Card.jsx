import React from 'react';

export default function Card(props) {
const { title, body } = props;
return (
    <div className="card">
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
)
}
