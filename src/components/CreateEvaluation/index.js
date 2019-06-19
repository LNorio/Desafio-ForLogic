import React, { Component } from 'react';
import firebase from 'firebase';
import {Link} from "react-router-dom"

import "./styles.css";


let clients = []
let evaluation = []
//let bdClients = []

export default class CreateEvaluation extends Component {
    constructor(){
        super();
        this.evaluation = firebase.database().ref('evaluations');
        this.state = {
            name: "",
            clientGrade: 0,
            clientResp: ""
        }
    }

    /*load = async () => { // pega os dados do cliente da api
        const result = await axios.get("https://desafio-forlogic-ad191.firebaseio.com/client.json");  
        this.setState({
            clients: result.data
        });
        console.log(this.state.clients)      
    };*/

    changeHandler = e => {

        this.setState({[e.target.name]: e.target.value});
    }

    /*componentDidMount(){
        this.load()
    }*/

    register = () =>{
        /*if(bdClients.length < 5){ // ve se atinge o numero minimo de clientes
            alert("sem usuarios suficientes para fazer a avaliacao")
            } else if(clients.length <= bdClients.length/5){
                let result = bdClients.filter(item => { // salva os clientes que ja avaliaram
                    if (item.name === this.state.name)
                        return item.lastEval
                    }
                }
                if(result == "" ){
                    clients.push({
                                    "name": this.state.name, 
                                    "clientGrade": this.state.clientGrade, 
                                    "clientResp": this.state.clientResp
                                })
                }else{
                    alert("usuario nao pode fazer a avaliacao")
                }
            }else{ // atingiu o numero maximo de clientes que avaliaram
                alert("numero de clientes maior que 20%, so poderao ser adicionados os que avaliaram anteriormente")
            }
        */
        if(clients.length <= 1){ // salva os clientes que ja avaliaram
            clients.push({
                            "name": this.state.name, 
                            "clientGrade": this.state.clientGrade, 
                            "clientResp": this.state.clientResp
                        })
        }
    }

    save = () =>{ //salva a avaliacao por completo
        const data = new Date()
        let mount = {"date": `${data.getUTCMonth}/${data.getFullYear}`,"clients": clients}
        this.evaluation.push(mount)
        firebase.database().ref().child('evaluations').update(evaluation);
    }
    
    render() {
        return (
            <section className="section-column" id="createEval">
                <Link to="/" className="voltar"><button>Voltar</button></Link>
                <h2>Criar uma avaliação</h2>
                <h3>Qual o nome do cliente?</h3>
                <input name="name" onChange={this.changeHandler}/>
                <h3>Qual a nota?</h3>
                <input name="clientGrade" type="number"  max="10" min="0" onChange={this.changeHandler}/>
                <h4>O motivo da nota</h4>
                <input name="clientResp" onChange={this.changeHandler}/>
                {console.log(this.state.name)}
                {console.log(this.state.clientGrade)}
                {console.log(this.state.clientResp)}
                <button onClick={this.register}>Adicionar cliente</button>
                <button onClick={this.save}>Adicionar avaliação</button>
            </section>
        );
    }
}
