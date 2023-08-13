import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import newsItems from './newsItems'


export class News extends Component {
  articles = [
    {
      "source": {
      "id": "fox-sports",
      "name": "Fox Sports"
      },
      "author": null,
      "title": "Australia vs. France live updates: Sam Kerr subs in as match remains scoreless early in second half - FOX Sports",
      "description": "The Women's World Cup quarterfinals continue with tournament co-host Australia taking on France. Here are the top moments!",
      "url": "https://www.foxsports.com/stories/soccer/womens-world-cup-2023-top-plays-australia-france",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/08.12.23_Womens-World-Cup-Top-Moments_Australia-vs-France_16x9.jpg?ve=1&tl=1",
      "publishedAt": "2023-08-12T06:47:50Z",
      "content": "The 2023 FIFA Women's World Cup continues Saturday (on FOX and the FOX Sports app) with a quarterfinal matchup between tournament co-host Australia and France at Suncorp Stadium in Brisbane, Australi… [+3200 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Gerardo Lemos, Ana Canizares, Chris Lau",
      "title": "Assassinated Ecuadorian presidential candidate Fernando Villavicencio buried by relatives - CNN",
      "description": "The body of the assassinated Ecuadorian presidential candidate Fernando Villavicencio was buried in a private ceremony in the country’s capital on Friday night.",
      "url": "https://www.cnn.com/2023/08/12/americas/villavicencio-laid-rest-quito-ecuador-intl-hnk/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230812021755-03-villavicencio-laid-rest-quito-ecuador-intl-hnk.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-08-12T06:34:00Z",
      "content": "The body of the assassinated Ecuadorian presidential candidate Fernando Villavicencio was buried in a private ceremony in the countrys capital on Friday night. \r\nThe 59-year-old was laid to rest in t… [+1848 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "DW (English)"
      },
      "author": "Deutsche Welle",
      "title": "US takes $1.2 billion gamble on carbon-sucking vacuums - DW (English)",
      "description": "The US government will spend $1.2 billion to help build giant machines that suck carbon dioxide pollution from the air.",
      "url": "https://www.dw.com/en/us-takes-12-billion-gamble-on-carbon-sucking-vacuums/a-66514147",
      "urlToImage": "https://static.dw.com/image/59334831_6.jpg",
      "publishedAt": "2023-08-12T06:14:26Z",
      "content": "The US Department of Energy said on Friday it would invest up to $1.2 billion (1.1 billion) in two Direct Air Capture (DAC) facilities in Texas and Louisiana to suck carbon from the air.\r\nEach site w… [+2305 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "FRANCE 24 English"
      },
      "author": "FRANCE 24, FRANCE 24",
      "title": "🔴 Live: Niger coup supporters protest near French military base as ECOWAS suspends meeting - FRANCE 24 English",
      "description": "Thousands of supporters of Niger's junta rallied near a French military base on Friday to protest plans by West African bloc ECOWAS to deploy an armed force to the country. The demonstration came as the regional bloc indefinitely suspended a meeting between a…",
      "url": "https://www.france24.com/en/africa/20230812-%F0%9F%94%B4-live-niger-coup-supporters-protest-near-french-military-base-as-ecowas-delays-meeting",
      "urlToImage": "https://s.france24.com/media/display/6d7b1070-38cd-11ee-9f12-005056bfb2b6/w:1280/p:16x9/000_33R33T4.jpg",
      "publishedAt": "2023-08-12T06:03:16Z",
      "content": "Thousands of supporters of Niger's junta rallied near a French military base on Friday to protest plans by West African bloc ECOWAS to deploy an armed force to the country. The demonstration came as … [+3249 chars]"
      },
      {
      "source": {
      "id": "associated-press",
      "name": "Associated Press"
      },
      "author": "JON GAMBRELL, MATTHEW LEE",
      "title": "What's behind the tentative US-Iran agreement involving prisoners and frozen funds - The Associated Press",
      "description": "The United States and Iran have reached a tentative agreement that will eventually set free five detained Americans in Iran and an unknown number of Iranians imprisoned in the U.S. after billions of dollars in frozen Iranian assets are transferred from banks …",
      "url": "https://apnews.com/article/biden-iran-us-prisoners-swap-deal-billions-e17dc67521798a2836ab4a3213e9277b",
      "urlToImage": "https://dims.apnews.com/dims4/default/903b78e/2147483647/strip/true/crop/3500x1969+0+182/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F3e%2F2f%2Fb7a32266c8514cefe1087b42ae3e%2Fc40e1673d4a94ccc9a8273f24f6c46f6",
      "publishedAt": "2023-08-12T05:36:00Z",
      "content": "DUBAI, United Arab Emirates (AP) The United States and Iran reached a tentative agreement this week that will eventually see five detained Americans in Iran and an unknown number of Iranians imprison… [+6610 chars]"
      },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=4979275d5c504207b3f3b16f543271d8";
    let data = await fetch(url);
    let parsdata= await data.json();
    console.log(parsdata);
    this.setState({articles: parsdata.articles})
  }
  render() {
    return (
      <div className='container my-3'>
        <div className='row' >
          {this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />

            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News