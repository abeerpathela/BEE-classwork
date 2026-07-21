import './App.css'
import Home from './Home'
import { UserInfo } from './UserInfo'

function App() {
  return(
    <>
    <Home/>
    <UserInfo username="Sandeep" isActive="true" age={45} hobbies={["reading","musuc"]} details={{city:"Dehradun",email:"sandeep@gmail.com"}}/>
    </>
  )
}

export default App
