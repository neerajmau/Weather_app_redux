import React, { Suspense, Fragment } from 'react';
import './App.css';
import LoadingSpinner from './component/UI/LoadingSpinner';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
// import Header from './component/Layout/Header';
// import FutureDataShow from './component/Layout/FutureDataShow';

const Header = React.lazy(() => import('./component/Layout/Header'))
const FutureDataShow = React.lazy(() => import('./component/Layout/FutureDataShow'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" component={Header} />
          // <Route path="FutureDataShow" component={FutureDataShow} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;


// <Router>
//   <Suspense fallback={<div>Loading...</div>}>
//     <Routes>
//       <Route exact path="/" component={Header} />
//           // <Route path="FutureDataShow" component={FutureDataShow} />
//     </Routes>
//   </Suspense>
// </Router>