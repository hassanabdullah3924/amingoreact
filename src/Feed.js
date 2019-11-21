import React from 'react';

const Feed = ({image, title, description, buttonLabel}) => {
    return(
        <div className="card">
            <img src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/natureinstee.jpg" className="card-img-top" alt={description} />
            <div className="card-body">
                <h5 className="card-title">Nature</h5>
                <p className="card-text">{description}</p>
                <a href="https://www.medicinenet.com/running/article.htm" target="_blank" className="btn btn-primary">{buttonLabel}</a>
            </div>
        </div>
    )
}

export default Feed;