// import logo from './logo.svg';
// import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './routes/Login/login.component';
import Articles from './routes/Articles/articles.component';
import Navigation from './routes/Navigation/navigation.components';



const App = () => {
  return (
    <Routes>
      <Route path='/store' element={<Navigation />}>
        <Route path='articles' element={<Articles />} />
      </Route>
      <Route path='/' element={<Login />}/>
      <Route path='login' element={<Login />}/>
      <Route path='articles' element={<Articles />} />
    </Routes>
  );

};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
