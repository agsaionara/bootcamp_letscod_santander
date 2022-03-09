import React, {useState} from 'react';

export default function App6(){
    const [pessoa, setPessoa] = useState({nome:'Lucas', idade: 25});
    const onClick = ()=> {setPessoa({nome:'Luis', idade:34}); console.log(pessoa)}


    return(
        <h1 onClick = {onClick}>{pessoa.nome}</h1>
    )
}