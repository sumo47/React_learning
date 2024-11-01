import {createContext} from "react"

const UserContext = createContext({
    user:{
        name:"Sumit kumar",
        email:"sumit@gmail.com",
    }
})

UserContext.displayName = "userContext" // for react dev tools extension
export default UserContext;