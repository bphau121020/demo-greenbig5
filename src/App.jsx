import './assets/boxicons-2.1.2/css/boxicons.min.css'
import './scss/App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Docs from './pages/Docs'
import Tasks from './pages/Tasks'
import Layout from './layout/Layout'
function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="home" element={<Home />} />
            <Route path="docs" element={<Docs />} />
            <Route path="tasks" element={<Tasks />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
