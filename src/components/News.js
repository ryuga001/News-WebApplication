import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
    
    constructor() {
        super();
        // console.log("this is constructor")
        this.state = {
            articles : [],
            loading: false, 
            page : 1
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5015f787cd5f46e8a61a0c6e186bad76&page=1&pagesize=20"
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles,totalResults : parsedData.totalResults})
    }
    handleClickPrevious = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5015f787cd5f46e8a61a0c6e186bad76&page=${this.state.page -1}&pageSize=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles , page : this.state.page-1})

    }
    handleClickNext = async ()=>{
        if( this.state.page +1 > Math.ceil(this.state.totalResults/20)){}
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5015f787cd5f46e8a61a0c6e186bad76&page=${this.state.page +1}&pageSize=20`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({articles : parsedData.articles , page : this.state.page+1})
        }        
    }
    render() {
        return (
            <div className="container my-3">
                <h2>Newz - Top Hadlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} discription={element.discription ? element.discription : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        );
                    })}
                </div>
                <div className="container d-flex justify-content-around ">
                <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handleClickPrevious}>&larr; Previous</button>
                <button type="button" className="btn btn-primary" onClick={this.handleClickNext}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}

export default News