import UserList from './UserList.jsx';
import UserDetails from './UserDetails.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/user/:userId" element={<UserDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
