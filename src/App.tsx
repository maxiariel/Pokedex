import AllRoutes from "./Routes/AllRoutes";
import PokemonsProvider from "./context/PokemonsContext";

function App() {
  return (
    <PokemonsProvider>
      <AllRoutes />
    </PokemonsProvider>
  );
}

export default App;
