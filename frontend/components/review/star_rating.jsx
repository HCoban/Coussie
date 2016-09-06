import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        vote: this.props.vote,
        editing: this.props.editing
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({vote: nextValue});
  }

  render() {
    const { vote } = this.state;
    return (
        <div>
            <StarRatingComponent
                editing={this.props.editing}
                name="rate1"
                starCount={5}
                value={vote}
                onStarClick={this.onStarClick.bind(this)}
            />
        </div>
    );
  }
}

export default StarRating;
