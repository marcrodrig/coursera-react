import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {

    renderComments(comments) {
        if (comments != null) {
            const commentsList = comments.map((comment) => {
                return (
                  <div key={comment.id}>
                    <ul className="list-unstyled">
                        <p>
                            {comment.comment}
                        </p>
                        <p>
                            -- {comment.author}, {new Intl.DateTimeFormat("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "2-digit",
                                                    }).format(new Date(Date.parse(comment.date)))}
                        </p>
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
        if(this.props.dish != null)
            return (
                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>
                                        {this.props.dish.name}
                                    </CardTitle>
                                    <CardText>
                                        {this.props.dish.description}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
        );
        else
            return (
                <div></div>
            );
    }

}

export default DishDetail;