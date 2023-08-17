import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './loding'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'
// import newsItems from './newsItems'


export class News extends Component {
  static defaultProbs = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }
  upadate = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4979275d5c504207b3f3b16f543271d8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsdata = await data.json();
    this.props.setProgress(70);
    this.setState({ loading: false })
    this.setState({ articles: parsdata.articles, totalResults: parsdata.totalResults, loading: false })
    this.props.setProgress(100);
    // this.setState({page: this.state.page + 1})
  }
  fetchMoreData = async() => {
    this.setState({
      page: this.state.page + 1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4979275d5c504207b3f3b16f543271d8&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsdata = await data.json();
    this.setState({ 
        articles: this.state.articles.concat(parsdata.articles),
       totalResults: parsdata.totalResults,
        loading: false })
  };
  async componentDidMount() {
    this.upadate();
  }
  tocapital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>Today's Top {this.tocapital(this.props.category)} Headlines</h1>
        <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={this.state.loading && <Loading />}
          >
        <div className='row' >
            { this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title} author={element.author} date={element.publishedAt} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />

              </div>
            })}
          {/* <div className='containor d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} type="button" onClick={this.handlePre} className="btn btn-sm btn-primary">&larr; Previous</button>
            <button disabled={(Math.ceil(this.state.totalResults / this.props.pageSize)) < this.state.page + 1} type="button" onClick={this.handleNext} className="btn btn-sm btn-primary">Next &rarr;</button>
          </div> */}
        </div>
          </InfiniteScroll>
      </div>
    )
  }
}

export default News