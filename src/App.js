import "./Normalize.css"
import "./App.css"
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer greeting={'Bienvenido a LibrosVibes'} />
      <ItemCount inicio= {1} stock= {10} onAdd={(cantidad)=> console.log('cantidad agregada ', cantidad)} />

    </div>
  );
}

export default App;
