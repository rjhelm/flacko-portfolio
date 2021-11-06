import React from 'react';
import { Card } from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const BlogCard = (props) => {
    return (
        <Card className="blog-card-display">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                    {props.description}
                </Card.Text>
                <Button variant="primary" href={props.link} target="_blank"></Button>
            </Card.Body>
        </Card>
    )
}

export default BlogCard;