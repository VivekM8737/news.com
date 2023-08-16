import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './loding'
import PropTypes from 'prop-types'
// import newsItems from './newsItems'


export class News extends Component {
  static defaultProbs ={
    country: 'in',
    pageSize: 9,
    category: 'general'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4979275d5c504207b3f3b16f543271d8&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsdata = await data.json();
    this.setState({loading: false})
    this.setState({ articles: parsdata.articles, totalResults: parsdata.totalResults,loading: false })
  }
  handleNext = async () => {
    if (!(Math.ceil(this.state.totalResults /this.props.pageSize)) < this.state.page + 1) {
      console.log(this.state.totalResults/this.props.pageSize);
      console.log(this.state.page + 1);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4979275d5c504207b3f3b16f543271d8&page=${this.state.page + 1} &pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsdata = await data.json();
      this.setState({loading: false})      
      this.setState({ articles: parsdata.articles })
      this.setState({
        page: this.state.page + 1,
        articles: parsdata.articles
      })
    }
  }
  handlePre = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4979275d5c504207b3f3b16f543271d8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({loading: true})
    let parsdata = await data.json();
    this.setState({ articles: parsdata.articles })
    this.setState({loading: false})
    this.setState({
      page: this.state.page - 1,
      articles: parsdata.articles
    })
    console.log("pre");
  }
  render() {
    return (
      <div className='container my-3'>
        {this.state.loading && <Loading/>}
        <div className='row' >
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />

            </div>
          })}
          <div className='containor d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} type="button" onClick={this.handlePre} className="btn btn-sm btn-primary">&larr; Previous</button>
            <button disabled={(Math.ceil(this.state.totalResults / this.props.pageSize)) < this.state.page + 1} type="button" onClick={this.handleNext} className="btn btn-sm btn-primary">Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News