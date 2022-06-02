import Header from "./Components/Header/Header";
import Selected from "./Components/Selected/Selected";
import Shop from "./Components/Shop/Shop";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section>
          <Shop />
        </section>
        <section>
          <Selected />
        </section>
      </main>
    </div>
  );
}

export default App;
