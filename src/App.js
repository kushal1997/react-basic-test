import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

export default function App() {
  // const description ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, iusto.";
  return (
    <>
      <Header />
     {/* <div >
       <h1>Kushal</h1>
       <h2>Rao</h2>
     </div>

    WE SHOULD USE FRAGMENTS TO WRITE JSX */}
      <div>
      <h1 className='active'>Kushal</h1>
        <h2>Rao</h2>
        <br />
        {/* INLINE DYNAMIC CONTENT */}
        {/* <p>{description}</p>  */}
      </div>

      <Footer />


    </>
    
    
  );
}





// CLASS BASED COMPONENT USING --> rcc
// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }


// FUNCTION BASED COMPONENT

// export default function App() {
//   return (
//     <div >
//       App
//     </div>
//   );
// }

// FUNCTION BASED COMPONENT USING --> rafc

// import React from 'react'
// export const App = () => {
//   return (
//     <div>App</div>
//   )
// }

