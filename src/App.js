import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Lis = () => {

  const Heading = () => {
    return(
      <h2><Link to="/">Subject</Link></h2>
    )
  }

  let list = [];
  const menu = [
    {id:'1', contLink:"/list/1", title: "111"},
    {id:'2', contLink:"/list/2", title: "222"},
  ]
  for(let i=0; i < menu.length; i++) {
    list.push(<li><Link to={menu[i].contLink}>{menu[i].title}</Link></li>);
  }
  return (
    <>
      <Heading />
      <ul> {list} </ul>
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
          <Route path="/list/*" element={<Lis />}> </Route>
        </Routes>
    </div>
  );
}

export default App;