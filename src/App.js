import React, { Component } from 'react'
import { Navbar } from './component/Navbar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  pageSize=9;
  country='in';
  render() {
    return (

      <div>
        <Router>
        <div><Navbar />
        </div>
        <Routes>
          <Route path="/" element={<News key="general" country={this.country} category={'general'} pageSize={this.pageSize} />} />
          <Route path="/business" element={<News key="business" country={this.country} category={'business'} pageSize={this.pageSize} />} />
          <Route path="/sports" element={<News key="sports" country={this.country} category={'sports'} pageSize={this.pageSize} />} />
          <Route path="/science" element={<News key="science" country={this.country} category={'science'} pageSize={this.pageSize} />} />
          <Route path="/technology" element={<News key="technology" country={this.country} category={'technology'} pageSize={this.pageSize} />} />
          <Route path="/entertainment" element={<News key="entertainment" country={this.country} category={'entertainment'} pageSize={this.pageSize} />} />
          <Route path="/health" element={<News key="health" country={this.country} category={'health'} pageSize={this.pageSize} />} />
        </Routes>
      </Router>


      </div>

    )
  }
}

export default App