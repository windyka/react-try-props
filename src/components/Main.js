import React, { Component } from 'react'
import Jumbotrons from './Jumbotron';
import Cards from './Card.js'


class Main extends Component {

    state = {
        // card1: { nama: ' Windy', alamat: ' Cilacap', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSe2RZPYUJC-vpqwAQzfJLAvTiX61rseiIza_qS0XtCLTe7gFjY' },
        // card2: { nama: ' Kurniawan', alamat: ' Jeruklegi', image: 'http://hausadictionary.com/images/thumb/b/bf/--kifi--_--_--fish--_2016-09-22_17-43.jpeg/300px---kifi--_--_--fish--_2016-09-22_17-43.jpeg' },
        // card3: { nama: ' Alvin', alamat: ' Gombong', image: '' },
        // card4: { nama: ' Adetya', alamat: ' Kebumen', image: '' }
        datacard: [
            {
                nama: ' Windy',
                alamat: ' Cilacap',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSe2RZPYUJC-vpqwAQzfJLAvTiX61rseiIza_qS0XtCLTe7gFjY'
            },
            {
                nama: ' Kurniawan',
                alamat: ' Jeruklegi',
                image: 'http://hausadictionary.com/images/thumb/b/bf/--kifi--_--_--fish--_2016-09-22_17-43.jpeg/300px---kifi--_--_--fish--_2016-09-22_17-43.jpeg'
            },
            {
                nama: ' Alvin',
                alamat: ' Gombong',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSe2RZPYUJC-vpqwAQzfJLAvTiX61rseiIza_qS0XtCLTe7gFjY'
            },
            {
                nama: ' Adetya',
                alamat: ' Kebumen',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSe2RZPYUJC-vpqwAQzfJLAvTiX61rseiIza_qS0XtCLTe7gFjY'
            }
        ]
    }

    render() {
        // console.log(this.state.datacard)
        return (
            <div>
                <Jumbotrons name=' Windy' />
                <div className="card-grouping">
                    <container>

                        {this.state.datacard.map((isi, index) => {
                            return (<Cards nama={isi.nama} alamat={isi.alamat} image={isi.image} />)
                        })}

                        {/* <Cards nama={this.state.card1.nama} alamat={this.state.card1.alamat} image={this.state.card1.image} /> */}
                    </container>
                </div >
            </div>
        )
    }
}

export default Main