import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl ,newsUrl} = this.props
        return (
            
            <div>
                <div className="card my-2" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={!newsUrl?"https://www.istockphoto.com/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration-gm1396814518-451440720" :newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem