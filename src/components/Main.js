import React, { Component } from 'react'
import Jumbotrons from './Jumbotron';
import Cards from './Card.js'


class Main extends Component {



    render() {
        // console.log(this.state.datacard)
        return (
            <div>
                <Jumbotrons name=' Windy' />
                <div className="card-grouping">
                    <container>
                        <Cards olahraga='Renang' image='http://cdn2.tstatic.net/banjarmasin/foto/bank/images/renang-di-sungai-besar-jadi-keceriaan-mereka_20170308_153820.jpg' />
                        <Cards olahraga='Sepakbola' image='https://3.bp.blogspot.com/-AaeLtQVhQeE/We2AnOqalrI/AAAAAAAAFPQ/K24ocL_j5fU5aG_Fya-EURKo2swtSj0_wCLcBGAs/s1600/main-bola-hujan-andumhumor.jpg' />
                        <Cards olahraga='MotoGP' image='http://i.ytimg.com/vi/mNb6KIFyoe4/sddefault.jpg' />
                        <Cards olahraga='Matador' image='https://cdn2.boombastis.com/wp-content/uploads/2014/12/3.-Sawah-Cruliamrullah.jpg' />

                    </container>
                </div >
            </div>
        )
    }
}

export default Main