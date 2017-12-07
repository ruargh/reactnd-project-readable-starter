import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showCategory } from './actions'
import Loading from 'react-loading'
import { fetchCategories } from './utils/api'
import CategoryList from './components/CategoryList'
import './App.css';
//import CategoryView from './components/CategoryView'
//import PostDetailView from './components/PostDetailView'
//import { fetchCategories } from './utils/api'
//import { getCategories } from './actions/index';



class App extends Component {
  state = {
    categories: null,
    loadingCategories: false,
  }

  componentDidMount() {
    this.setState(() => ({ loadingFood: true }))

    fetchCategories()
      .then((categories) => this.setState(() => ({
        categories,
        loadingFood: false,
      })))
  }

  render() {
    const { loadingCategories, categories } = this.state
    const { selectCategory } = this.props


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


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }

}

function mapDispatchToProps (dispatch) {
  return {
    selectCategory: (data) => dispatch(showCategory(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)