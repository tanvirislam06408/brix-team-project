import React from 'react';

const Post = ({data}) => {
    return (
        <div>
            {
                data.map(d=><p key={d.id}>{d.title}</p>)
            }
        </div>
    );
};

export default Post;