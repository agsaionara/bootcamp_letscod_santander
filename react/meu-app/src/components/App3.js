import React from 'react';

class App3 extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {nome:""};
    }

    changeName = (event)=> {
        this.setState({nome: event.target.value})
    }

    render(){
        return(
            <>
                Nome: <input type="text" value ={this.state.nome} onChange={this.changeName}></input>
                <p>
                    Olá {this.state.nome}
                </p>
            </>
        );
    }
}

export default App3;