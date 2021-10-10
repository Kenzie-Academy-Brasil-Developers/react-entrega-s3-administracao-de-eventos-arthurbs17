import MenuNav from "./components/MenuNav";
import Routes from "./routes";
import GlobalStyle from "./styles/styles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <MenuNav />
        <Routes />
      </header>
    </div>
  );
}

export default App;
