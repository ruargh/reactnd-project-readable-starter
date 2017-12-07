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

const mapStateToProps = (state) => {
    return {
      categories: state.category.categories
    }
  
  }
  
export default connect(mapStateToProps)(CategoryView)