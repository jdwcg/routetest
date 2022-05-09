import { Routes, Route, Link } from 'react-router-dom';
import React, {useState, useRef, useEffect} from "react";
import './App.css';
import About from './About';
import Contact from './Contact';

const Lis = () => {
  const Subject = () => {
    return(
      <div>
        <h3><Link to="/">Subject</Link></h3>
      </div>
    )
  }

  const [page, setPage] = useState(<About />)

  let list = [];
  const menu = [
    {id:'1', contLink:"/about", title: "about", cont: <About />},
    {id:'2', contLink:"/contact", title: "contact", cont: <Contact />},
  ]
  for(let i=0; i < menu.length; i++) {
    list.push(<li onClick={e=>{
      e.preventDefault();
      setPage(menu[i].cont);
    }}><Link to={menu[i].contLink} >{menu[i].title}</Link></li>);
  }
  return (
    <>
      <Subject />
      <ul> {list} </ul>
      {page}
    </>
  )
}

const Header = () => {
  return (
    <div>
      <Lis />
    </div>
  )
}

function App() {
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Header />}> </Route>
          <Route path="/*" element={<Lis />}> </Route>
        </Routes>
    </div>
  );
}

export default App;