import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5015f787cd5f46e8a61a0c6e186bad76&page=1&pagesize=${this.props.pageSize}`
        this.setState({loading : true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles,
            totalResults : parsedData.totalResults,
            loading : false
        })
    }
    handleClickPrevious = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5015f787cd5f46e8a61a0c6e186bad76&page=${this.state.page -1}&pageSize=${this.props.pageSize}`
        this.setState({loading : true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles , page : this.state.page-1 ,  loading : false})

    }
    handleClickNext = async ()=>{
        if( !(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){        
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5015f787cd5f46e8a61a0c6e186bad76&page=${this.state.page +1}&pageSize=${this.props.pageSize}`
            this.setState({loading : true})
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({articles : parsedData.articles , page : this.state.page+1,loading : false})
        }        
    }
    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{margin : "30px 0px"}}>Newz - Top Hadlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    { !this.state.loading &&  this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} discription={element.discription ? element.discription : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        );
                    })}
                </div>
                {!this.state.loading &&                     
                    <div className="container d-flex justify-content-around ">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handleClickPrevious}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" onClick={this.handleClickNext}>Next &rarr;</button>
                    </div>                    
                }   
            </div>
        );
    }
}

export default News