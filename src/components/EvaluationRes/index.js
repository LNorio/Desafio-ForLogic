import React, { Component } from 'react';

// import { Container } from './styles';
const evaluation = [
    {
        name: "Leonardo",
        grade: "10",
        response: "nao sei"
    },
    {
        name: "Leonardo",
        grade: "7",
        response: "nao sei"
    },
    {
        name: "Leonardo",
        grade: "9",
        response: "nao sei"
    },
    {
        name: "Leonardo",
        grade: "9",
        response: "nao sei"
    },
    {
        name: "Leonardo",
        grade: "1",
        response: "nao sei"
    }
]
export default class EvaluationRes extends Component {
    state={
        result: 0
    }

    resultEvaluation = () => {
        let x = 0;
        let y = 0;
        let z = 0;

        evaluation.map(item =>{
            if((item.grade === "9") || (item.grade === "10") ){
                x = x + 1;
            }
            else if((item.grade === "7") || (item.grade === "8") ){
                y = y + 1;
            }
            else if((item.grade >= "0") || (item.grade <= "6") ){
                z = z + 1;
            }
            return true
        });

        const result = (((x-z)/evaluation.length) *  100);
        this.setState({result: result});
        return true
    }

    render() {
        return (
            <>
                <h2>{this.state.result}%</h2>
                <button onClick={this.resultEvaluation}>botao</button>
            </>
        );
    }
}
