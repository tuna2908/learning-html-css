import logo from './logo.svg';
import './App.css';

/**
 *
 * @rafc
 *
 */
function App() {
  return (
    <div className="App">
      <h1>This is a Heading</h1>
      <p>This is a paragraph.</p>

      <ul
        style={{
          backgroundColor: 'lightGray',
          borderLeft: '10px solid red',
          listStyleType: 'none',
          textAlign: 'left',
          padding: '10px 10px',
          display: 'inline-block',
          boxShadow: '5px 5px 5px gray',
        }}
      >
        <li>Coffee</li>
        <li>Tea</li>
        <li>Coca Cola</li>
      </ul>
    </div>
  );
}

export default App;
