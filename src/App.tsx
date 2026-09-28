import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dock from './components/Dock'
import AddNote from './pages/AddNote'
import EditNote from './pages/EditNote'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes/new" element={<AddNote />} />
          <Route path="/notes/:id/edit" element={<EditNote />} />
        </Routes>
        <Dock />
      </div>
    </BrowserRouter>
  )
}

export default App
