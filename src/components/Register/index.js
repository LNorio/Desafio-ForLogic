import React, { Component } from 'react'
import firebase from "firebase"
import {Link} from "react-router-dom"

import "./styles.css"

const data = new Date();
let clients = [];

export default class Register extends Component {    
    constructor(){
        super()
        this.clients = firebase.database().ref('client');
        this.state ={
                name: "",
                resp: "",
                date: `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`,
                lastEval: "",
                noteGrade: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
    };

    
    changeHandler = e => {

        this.setState({[e.target.name]: e.target.value});
    }
    
    render(){
        return (
            <section className="section-column" id="register">
                <Link to="/" className="voltar"><button>Voltar</button></Link>
                <h2>Cadastro de cliente</h2>
                <form>
                    <label>
                        <h3>Nome do cliente</h3>
                        <input placeholder="Nome" name="name" onChange={this.changeHandler} value={this.state.name}/>
                    </label>
                    <label>
                        <h3>Nome do responsável</h3>
                        <input placeholder="Responsavel" name="resp" value={this.state.resp} onChange={this.changeHandler}/>
                    </label>
                </form>
                <button onClick={this.save}>Cadastrar</button>
            </section>
        )
    }

    save = () => {
        this.clients.push(this.state)
        

        firebase.database().ref().child('client').update(clients);
    }
    
}