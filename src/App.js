/**
 * The function exports an App component that renders a Header, Main, and Footer component.
 * @returns The App component is being returned, which contains the Header, Main, and Footer
 * components. The Header component is passed a prop of "title" with a value of "Horned Beasts". The Main component is being rendered without any props. The Footer component is being rendered without any props.
 */
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
      <Header title="Horned Beasts" />
      {/* Keelen has state being set for main here. I do it in the main component */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
