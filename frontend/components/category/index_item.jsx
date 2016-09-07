import React from 'react';

class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.showSingleCategory = this.showSingleCategory.bind(this);
    this.state = {category: 0};
  }

  showSingleCategory (e) {
    e.preventDefault();
    let value = e.currentTarget.attributes.value.value;
    this.props.processClick({value});
  }

  render () {
    return (
      <div value={this.props.category.id} className="category-index-item" onClick={this.showSingleCategory}>
        <div className="category-index-pic-container">
          <img src={this.props.category.image_url}></img>
        </div>
        <div className="category-title">
          <h2>{this.props.category.title}</h2>
        </div>
      </div>
    );
  }
}

export default CategoryIndexItem;
