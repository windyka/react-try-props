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
        const { angka } = this.state
        this.setState({
            angka: angka + 1
        })
    }

    kurang = () => {
        const { angka } = this.state
        if (angka <= 0) {
            return alert('wrong')
        }
        this.setState({
            angka: angka - 1
        })

    }

    render() {
        const { image, olahraga } = this.props
        const { tambah, kurang } = this

        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle><h1>{this.state.angka}{''} Kali</h1></CardTitle>
                    </CardBody>
                    <img width="100%" src={image} />
                    <CardBody>
                        <CardTitle><h2>{olahraga}</h2></CardTitle>
                        <Button onClick={() => tambah()} color="danger">Tambah</Button>{' '}
                        <Button onClick={() => kurang()} color="warning">Kurang</Button>
                    </CardBody>
                </Card>
            </div >
        )
    }
}

export default Cards