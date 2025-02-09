
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/ContextProvider'

function App() {


  return (
    <UserContextProvider>
      <h1>React With Chai ans Share is Important</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
