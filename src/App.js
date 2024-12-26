import Button from "./components/Button";

function App() {
  return (
    //caso seja necessario retornar mais de um componente é necessario indicar com a tag fantasma e inseri 
    //tudo dentro dela. para assim incapsular a tag e ser mandado tudo que necessita em somente 1 componente
    //exemplo <> conteudo , conteudo2 </>
    //podermos reutilizar o componente criado no caso o button ,com todas sua programaçãp
    //No caso reutilizamos e passamos titulos diferentes
    <div className="App">
      <h1>Olá React!</h1>
      <Button title="Entrar"/>
      <Button title="Sair"/>
      <Button title="Abrir"/>
      <Button title="Fechar"/>
    </div>
  );
}

export default App;
