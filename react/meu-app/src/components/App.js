import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div>
        <p>
          Meu primeiro paragrafo
        </p>
        <p>
          Meu segundo paragrafo
        </p>
        <p>
          {new Date().toLocaleDateString('pt-BR')}
        </p>
        <div>
          <pre>Cansei de parágrafos...</pre>
        </div>
      </div>
    );
  }
}

export default App;
