import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Layout from '../../Layouts/Layout';

export default function Posts(props) {
const { allPosts } = props;
return (
    <Layout>
        <div className="card-list">
            {allPosts.map(post => (
            <React.Fragment key={post.id}>
                <Link to={`/posts/${post.id}`}>
                <Card
                    title={post.title}
                    body={post.body}
                />
                </Link>
            </React.Fragment>
            ))}
        </div>
    </Layout>

)
}