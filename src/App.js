import Heroes from './components/Heroes'
import Dogs from './components/Dogs'
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <h2 style={{margin: '20px'}}> Heroes React App Demo</h2>
      <Heroes />
      <Dogs/>
    </>
  );
}

export default App;
