import React from 'react';
import CategoryIndexItem from './index_item';
class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let categories = Object.keys(this.props.categories).map ((key) => {
      return (
        <CategoryIndexItem key={key} processClick={this.props.processClick} category={this.props.categories[key]} />
      );
    });
    return (
      <section className="category-index">
        <ul>
          <span>Categories</span>
          {categories}
        </ul>
      </section>
    );
  }
}

export default CategoryIndex;
