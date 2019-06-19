import React, {Component} from 'react'
import {Link} from "react-router-dom"

import "./styles.css"

class Main extends Component {
    render(){
        return (
            <section className="section-column" id="home">
                <h1>Sistema de Avaliações</h1>
                <Link to="/register"><button>Cadastrar clientes</button></Link>
                <Link to="/create"><button>Cadastrar avaliações</button></Link>
                <Link to="/find"><button>Listar clientes</button></Link>
            </section>
        )
    }
}

export default Main
