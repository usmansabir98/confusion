import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);

        this.state={
            
        };
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>

                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){
        if(comments==null){
            return( <div></div>);
        }
        const list = comments.map((comment)=> {
            return(
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            );
        });
        return list;
    }

    render(){
        if(this.props.dish!=null)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        { this.renderDish(this.props.dish) }
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                        { this.renderComments(this.props.dish.comments) }
                        </ul>
                    </div>
                </div>
            </div>
        );

        else
            return(
                <div></div>
            );
    }
}

export default DishDetail;