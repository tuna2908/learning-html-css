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
      <br></br>
      <div style={{ display: 'inline-block' }} className="dropdownArea">
        <img
          src="https://www.w3schools.com/css/img_5terre.jpg"
          style={{ width: 100 }}
        ></img>

        <img
          src="https://www.w3schools.com/css/img_5terre.jpg"
          className="dropdownImg"
        ></img>
      </div>
    </div>
  );
}

export default App;
