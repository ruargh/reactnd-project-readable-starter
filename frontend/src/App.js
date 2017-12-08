import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showCategory, showPost } from './actions'
import Loading from 'react-loading'
import { fetchCategories, fetchPosts } from './utils/api'
import CategoryList from './components/CategoryList'
import PostList from './components/PostList'
import './App.css';
//import CategoryView from './components/CategoryView'
//import PostDetailView from './components/PostDetailView'
//import { fetchCategories } from './utils/api'
//import { getCategories } from './actions/index';



class App extends Component {
  state = {
    categories: null,
    loadingCategories: false,
    posts: null,
    loadingPosts: false,
  }

  componentDidMount() {
    this.setState(() => ({ loadingCategories: true }))

    fetchCategories()
      .then((categories) => this.setState(() => ({
        categories,
        loadingCategories: false,
      })))

    this.setState(() => ({ loadingPosts: true }))

    fetchPosts()
      .then((posts) => this.setState(() => ({
        posts,
        loadingPosts: false,
      })))

  }

  render() {
    const { loadingCategories, categories, loadingPosts, posts } = this.state
    const { showCategories, showPosts } = this.props


    return (
      <div className='container'>

        <div className='nav'>
          <h1 className='header'>Readable</h1>
        </div>

        <div>
        {loadingCategories === true
          ? <Loading delay={200} type='spin' color='#222' className='loading' />
          : <div className='category-container'>
              <h3 className='subheader'>
                Categories
              </h3>
              {categories !== null && (

                <CategoryList
                  categories={categories}
                  onSelect={(category) => {
                    selectCategory({category})
                  }}
                />

                  )}
            </div>}
        </div>


        <div>
        {loadingPosts === true
          ? <Loading delay={200} type='spin' color='#222' className='loading' />
          : <div className='posts-container'>
              <h3 className='subheader'>
                Posts
              </h3>
              {posts !== null && (

                <PostList
                  posts={posts}
                  onSelect={(post) => {
                    selectPost({post})
                  }}
                />

                  )}
            </div>}
        </div>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    posts: state.posts
  }

}

function mapDispatchToProps (dispatch) {
  return {
    selectCategory: (data) => dispatch(showCategory(data)),
    selectPost: (data) => dispatch(showPost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)