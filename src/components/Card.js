import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Card.css'



const Cards = (props) => {
    return (

        <Card>
            <CardImg top width="100%" src={props.image} alt="Card image cap" />
            <CardBody>
                <CardTitle>Nama :{props.nama}</CardTitle>
                <CardSubtitle>Alamat :{props.alamat}</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="danger">Button</Button>
            </CardBody>
        </Card>


    );
};

export default Cards;