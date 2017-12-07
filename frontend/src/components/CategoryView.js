import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../utils/api'
import { getCategories } from '../actions'

class CategoryView extends Component {
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

        function curry() { 
            return function getIT () {
                console.log('Curried!')
            }
        }
        console.log(curry()())

        fetchCategories()
        .then((data) => this.setState(() => ({
            categories:data.categories,
          }),
    
        ))
        .then((state) => getCategories(state))

        console.log('CategoryView will Mount')
        console.log(this.state.categories)

        
    }

    componentDidMount() {
        console.log('CategoryView Mounted')

    }


  
  render() {
    console.log('Props', this.props)
    const { categories } = this.state
    const { store_categories } = this.props

    //const { categories } = this.state

    
    return (
      <div className="default-view">
      	<h3>Categories</h3>
          
      	<ul>
      		{store_categories.map((category, index) =>
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


const mapStateToProps = (state) => {
    return {
      store_categories: state.categories
    }
  
  }
  
//export default connect(mapStateToProps)(CategoryView)
//export default CategoryView

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: (data) => dispatch(getCategories(data)) //Vote on post
    }

}
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryView)