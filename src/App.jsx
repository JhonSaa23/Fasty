import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routers/router'

function App() {

  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App
