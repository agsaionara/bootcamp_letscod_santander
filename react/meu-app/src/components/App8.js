import React, {useState, useEffect} from 'react';

// export default function App6(){
//     const [nome, setNome] = useState(undefined);

//     useEffect(
//         () =>{
//             if(nome === undefined){
//                 setNome(sessionStorage.getItem('nome') || '');
//             }
//             else{
//                 sessionStorage.setItem('nome', nome);
//             }
//         }, [nome]
//     );
    
//     return(
//         <>
//             Nome: <input type="text" value={nome} onChange={(event)=>setNome(event.target.value)}/>
//             <br />
//             Olá {nome}
//         </>
//     )
// }

class Menu extends React.Component {
    constructor(props) {
      super(props);
      console.log("constructor");
    }
    
    componentDidMount() {
      console.log("componentDidMount");
    }
    
    componentWillUnmount() {
      console.log("componentWillUnmount");
    }
    
    render() {
      console.log("render");
    
      return (
        <ul>
          <li><a>Home</a></li>
          <li><a>Sobre</a></li>
          <li><a>Contato</a></li>
        </ul>
      )
    }
  }