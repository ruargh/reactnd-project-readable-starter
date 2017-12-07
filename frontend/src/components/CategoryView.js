import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../utils/api'
import { getCategories } from '../actions'

class CategoryView extends Component {
    constructor(props){
        super(props);
        this.state = {categories: this.props.categories}
      }

      componentWillReceiveProps(nextProps){
        this.setState({categories: nextProps.categories})
      }

    componentDidMount() {
        console.log('CategoryView DidMounted')
    }
  
  render() {
    console.log('Props', this.props)
    //const { categories } = this.props
    const { categories } = this.state
    const { store_categories } = this.props
    const { getCategories } = this.props

    
    return (
      <div className="default-view">
      	<h3>Categories</h3>
        <button onClick={ () => getCategories( {categories} ) }>Update</button>
      	<ul>
      		{store_categories.categories.map((category, index) =>
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

function mapDispatchToProps (dispatch) {
    return {
        getCategories: (data) => dispatch(getCategories(data))
    }

}
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryView)