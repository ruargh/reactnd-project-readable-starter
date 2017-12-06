import React, { Component } from 'react';

class CategoryView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pBackend0 :
        {
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
  }

  
  render() {
    
    let pBackend0 = this.state.pBackend0
    let temp = this.props.data
    /*let backend2 = JSON.parse(JSON.stringify(temp))*/
    //let backend3 = JSON.parse(JSON.stringify(temp))
    console.log(temp)
    //console.log(backend3)

    
    return (
      <div className="default-view">
      	<h3>Categories</h3>
      	<ul>
      		{pBackend0.categories.map((category, index) =>
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

export default CategoryView