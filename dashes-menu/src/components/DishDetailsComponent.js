import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default class DishDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  renderDetails() {
    const dish = this.props.dish;

    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />

          <CardBody>
            <CardTitle style={{fontWeight: "bold"}}>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>        
      </div>
    )
  }

  renderComments() {
    const comments = this.props.dish.comments.map((comment) => {
      return (
        <li key={comment.id} >
          <p>{comment.comment}</p>
          <p>-- {comment.author},
          {new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'

          }).format(new Date(comment.date))}
          </p>
        </li>
      )
    });

    if (this.props.dish == null) {
      return (
        <div></div>
      )
    } else { 
      return (
        <div className="col-12 col-md-5 m-1">
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {comments}
            </ul>
        </div>
  
      )
    }
  }


  render() {
    const dish = this.state.dish;
    console.log(dish);

    if (dish === null) {
      return (
        <div></div>
      )
    } else {
      return (
        <div className="container">
          <div className="row">
            {this.renderDetails()}
            {this.renderComments()}
          </div>
        </div>
      )
    }

  }
}
