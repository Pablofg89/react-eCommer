import Main from "./secciones/Main";
import background from "./assets/alberto-tondo.jpg";
import Footer from './componentes/Footer'

function App() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
    }}>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;