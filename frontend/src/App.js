import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryView from './components/CategoryView'
import PostDetailView from './components/PostDetailView'
import { fetchCategories } from './utils/api'
import { getCategories } from './actions/index';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data',
    }
  }

  state = {
    categories: null,
  }


  componentWillMount() {

    fetchCategories()
    .then((data) => this.setState(() => ({
        categories:data.categories,
      }),

    ))

    console.log('App WillMount')
    console.log(this.state.categories)
}


  componentDidMount() {
    //const url = `${process.env.REACT_APP_BACKEND}/categories`;
    // Disable CORS in Chrome and set url 
    // run in terminal: 'open -a Google\ Chrome --args --disable-web-security --user-data-dir'
    //https://stackoverflow.com/questions/35588699/response-to-preflight-request-doesnt-pass-access-control-check
    //const url = `http://localhost:3001/categories`;
    const url = `http://localhost:3001/posts`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: 'include' } )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        this.setState({backend:data});
      });

      console.log('APP mounted')

  }

  render() {

    const { categories } = this.state

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
        <CategoryView categories={categories} />
        <PostDetailView />
      </div>
    );
  }
}

export default App
