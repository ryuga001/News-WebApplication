import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let {title,discription,imgUrl,newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imgUrl ? "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11EF4/production/_129506437_gettyimages-1247188536.jpg" : imgUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{discription}</p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        );
    }
}
export default NewsItem 