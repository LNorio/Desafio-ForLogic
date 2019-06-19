import React, {Component} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

import "./styles.css"

let bdClients2 = [];

class FindClient extends Component {

    state = {
        bdClients: []
    }

    // componentDidMount(){
    //     this.load()
    // }

    render(){
        this.load()
        return (
            <section className="section-column" id="findClient">
                <Link to="/" className="voltar"><button>Voltar</button></Link>
                <h2>Lista de Clientes</h2>
                <ul>
                    {/* {bdClients2.map((item, index) => {
                        return (
                        <li key={index}>
                            <h2>{item.name}</h2>
                            
                        </li>
                        );
                    })*/}
                </ul>
            </section>
        )
    }

    load = async () => {
        console.log("bunda")
        const result = await axios.get("https://desafio-forlogic-ad191.firebaseio.com/client.json");  
        console.log("bunda2")
        console.log(result)
        bdClients2 = result.data;
        console.log(bdClients2)
    };

}

export default FindClient
