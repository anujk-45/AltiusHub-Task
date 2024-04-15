import Home from './Home';
import ListViewInvoices from './ListViewInvoices';
import './css/app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/Invoices" element={ListViewInvoices}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;