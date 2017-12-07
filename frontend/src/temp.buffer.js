import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import CategoryView from './components/CategoryView'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data',
    }
  }

  componentDidMount() {
    //const url = `${process.env.REACT_APP_BACKEND}/categories`;
    // Disable CORS in Chrome and set url 
    // run in terminal: 'open -a Google\ Chrome --args --disable-web-security --user-data-dir'
    //https://stackoverflow.com/questions/35588699/response-to-preflight-request-doesnt-pass-access-control-check
    //const url = `http://localhost:3001/categories`;
    const url = `http://localhost:3001/categories`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: 'include' } )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        this.setState({backend:data});
      });
  }

  render() {
    console.log('Props', this.props)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Talking to the backend yields these categories: <br/>
          {this.state.backend}
        </p>
        <CategoryView />
      </div>
    );
  }
}

function mapStateToProps (categories) {
  return {
    "categories": 
        [{
            "name":"react",
            "path":"react"
        },{
            "name":"redux",
            "path":"redux"
        },{
            "name":"udacity",
            "path":"udacity"
        }]
  }

}

export default connect(mapStateToProps)(App)


==========================

import React, { Component } from 'react';
import { connect } from 'react-redux'

class CategoryView extends Component {
  
  render() {
    console.log('Props', this.props)
    const { categories } = this.props

    
    return (
      <div className="default-view">
      	<h3>Categories</h3>
      	<ul>
      		{categories.map((category, index) =>
      			<li key={index} className="category-list">
      				<div className="category-name">
      					<a href={'/' + category.path}>{category.name}</a>
      				</div>
      			</li>
      		)}
      	</ul>
      </div>
      
      )
  }
  
}

function mapStateToProps (categories) {
    return {
      "categories": 
          [{
              "name":"react",
              "path":"react"
          },{
              "name":"redux",
              "path":"redux"
          },{
              "name":"udacity",
              "path":"udacity"
          }]
    }
  
  }
  
export default connect(mapStateToProps)(CategoryView)