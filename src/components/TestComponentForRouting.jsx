import { Link } from 'react-router-dom';

const TestComponentForRouting = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <p>
        Test Component For Routing / env ={' '}
        {import.meta.env.VITE_REACT_APP_EXAMPLE}
      </p>
      <Link to="/">Go home</Link>
    </div>
  );
};
export default TestComponentForRouting;
