import React from "react"
import Home from "./Components/Home"
import { UserInfo } from "./Components/UserInfo"
import { UserCard } from "./Components/UserCard"
import { Logged } from "./Components/logged"
import { Notification } from "./Components/Notification"
import { ProductList } from "./Components/ProductList"
import { CustomeButton } from "./Components/CustomeButton"

function App() {
  return (
    <>

      <Home />
      <UserInfo username="Abeer" age={20} isActive={true} hobbies={["reading", "music"]} detail={{ city: "Muktsar", email: "abeer1014.be24@chitkarauniversity.edu.in" }} />
      <br></br>
      <br></br>
      <Logged username="Abeer Pathela" isLoggedIn={true} />
      <Logged username="Abeer Pathela" isLoggedIn={false} />
      <br></br>
      <br></br>
      <Notification unreadCount={0} />
      <br></br>
      <br></br>
      <ProductList />
      <CustomeButton/>
    </>
  )
}
export default App
