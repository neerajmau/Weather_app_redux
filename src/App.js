import React, { Suspense } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import LoadingSpinner from './component/UI/LoadingSpinner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Layout/Header';
import FutureDataShow from './component/Layout/FutureDataShow';

// const Header = React.lazy(() => import('./component/Layout/Header'))
// const FutureDataShow = React.lazy(() => import('./component/Layout/FutureDataShow'))

function App() {
  return (
    <Fragment>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Header />} />
            <Route path="FutureDataShow" element={<FutureDataShow />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}
export default App;





//   <div className="container">
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Header />} />
//         <Route path="FutureDataShow" element={<FutureDataShow />} />
//       </Routes>
//     </BrowserRouter>
//   </div>
