import React, { Component } from 'react'
import { Navbar } from './component/Navbar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    return (

      <div>
        <Router>
        <div><Navbar />
        </div>
        <Routes>
          <Route path="/" element={<News key="general" country={'in'} category={'general'} pageSize={9} />} />
          <Route path="/business" element={<News key="business" country={'in'} category={'business'} pageSize={9} />} />
          <Route path="/sports" element={<News key="sports" country={'in'} category={'sports'} pageSize={9} />} />
          <Route path="/science" element={<News key="science" country={'in'} category={'science'} pageSize={9} />} />
          <Route path="/technology" element={<News key="technology" country={'in'} category={'technology'} pageSize={9} />} />
          <Route path="/entertainment" element={<News key="entertainment" country={'in'} category={'entertainment'} pageSize={9} />} />
          <Route path="/health" element={<News key="health" country={'in'} category={'health'} pageSize={9} />} />
        </Routes>
      </Router>


      </div>

    )
  }
}

export default App