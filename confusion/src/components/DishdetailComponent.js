import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {

    renderComments(comments) {
        if (comments != null) {
            const commentsList = comments.map((comment) => {
                const fecha = new Date(comment.date);
                return (
                  <div key={comment.id}>
                    <ul className="list-unstyled">
                        <li>
                            {comment.comment}
                        </li>
                        <li>
                            -- {comment.author}, {new Intl.DateTimeFormat("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "2-digit",
                                                    timeZone: 'GMT',
                                                    }).format(fecha)}
                        </li>
                    </ul>
                  </div>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    {commentsList}
                </div>
            );
        } else
            return(
                <div></div>
            );
    }

    render() {
        return(
            <div className="row">
              <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                    <CardBody>
                        <CardTitle>
                            {this.props.selectedDish.name}
                        </CardTitle>
                        <CardText>
                            {this.props.selectedDish.description}
                        </CardText>
                    </CardBody>
                </Card>
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            </div>
        );
    }

}

export default DishDetail;