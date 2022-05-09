import { Routes, Route, Link } from 'react-router-dom';

const Lis = () => {
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
      {list}
    </>
  )
}

const Header = () => {
  return (
    <div>
      <h1><Link to="/test">heading</Link></h1>
      <ul>
        <Lis />
      </ul>
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