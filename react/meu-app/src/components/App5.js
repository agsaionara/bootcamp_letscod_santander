import React from 'react';

class App4 extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {nome: undefined, txtNome: ""};
    }

    changeTxtName = (event)=> {
        this.setState({txtNome: event.target.value})
    }

    componentDidMount = () =>{
        const nome = sessionStorage.getItem("nome");
        if(nome) this.setState({nome});
    }

    persistTxtName = ()=>{
        this.setState({nome: this.state.txtNome});
        sessionStorage.setItem('nome', this.state.txtNome);//cookie
    }

    render(){
        const renderForm =()=>{
            return (
                <>
                    Nome: <input type="text" onChange={this.changeTxtName}></input>
                    <button onClick={this.persistTxtName}>Salvar</button>
                </>
            );
        }
        const renderText = ()=>{
            return(
                <>
                    <p>
                        Olá {this.state.nome}
                    </p>
                </>
            );
        }
        return !this.state.nome ? renderForm():renderText();
   }      
    
}

export default App4;