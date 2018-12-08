import React, { Component } from 'react'
import {
    Button,
    Card, CardImg, CardBody,
    CardTitle,
} from 'reactstrap';
import './Card.css'


class Cards extends Component {

    state = {
        angka: 0
    }

    tambah = () => {
        this.setState({
            angka: this.state.angka + 1
        })
        console.log(this.state.angka)
    }

    kurang = () => {
        this.setState({
            angka: this.state.angka - 1
        })
        console.log(this.state.angka)
    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle><h1>{this.state.angka}{''}      Kali</h1></CardTitle>
                    </CardBody>
                    <img width="100%" src={this.props.image} />
                    <CardBody>
                        <CardTitle><h2>{this.props.olahraga}</h2></CardTitle>
                        <Button onClick={() => this.tambah()} color="danger">Tambah</Button>{' '}
                        <Button onClick={() => this.kurang()} color="warning">Kurang</Button>
                    </CardBody>
                </Card>
            </div >
        )
    }
}

export default Cards