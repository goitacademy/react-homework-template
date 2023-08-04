import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ff6c00',
          fontWeight: 700,
        }}
      >
        <div className="container">
          <div className="logos">
            <img src="./vite.svg" alt="vite-logo" width={100} height={100} />
            <img
              src="https://goit.global/us/assets/images/logo.svg"
              alt="go-it-logo"
              width={200}
              height={60}
            />
          </div>
          <p style={{ fontSize: 40, textTransform: 'uppercase' }}>
            React
            <span
              style={{
                display: 'inline-block',
                margin: '0 10px',
                padding: '0px 10px',
                background: '#fff',
                color: '#000',
                borderRadius: '3px',
                border: '1px solid #eee',
              }}
            >
              homework
            </span>
            template
          </p>
          <Link to="test" style={{ color: 'red', display: 'block' }}>
            Go to the test page
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
