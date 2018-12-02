import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Jumbotron.css'

const Jumbotrons = (props) => {
    return (
        // <div className='jumbotron-contained'>
        <Jumbotron>
            <h1 className="display-3">Hello, {props.name}!</h1>
            {/* <p className="lead">This is a simple hero unit, a simple Tricky unit for calling counter with declaring state of Components.</p> */}
            <hr className="my-2" />
            <p><h2>Sudahkah anda berolah raga hari ini?</h2></p>
            <p className="lead">
                <Button color="primary">Hitung Sekarang!</Button>
            </p>
        </Jumbotron>
        // </div>
    );
};

export default Jumbotrons;