import { Link, Routes, Route } from 'react-router-dom';
// export const App = () => {
//   return <>React homework template</>;
// };

export const App = () => {
  return (
    <>
      React homework template
      <nav>
        <Link to="/">Home</Link>
        <Link to="/a">A</Link>
        <Link to="/b">B</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/a" element={<div>A</div>} />
        <Route path="/b" element={<div>B</div>} />
      </Routes>
    </>
  );
};
