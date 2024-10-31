import {createContext} from "react"

const userContext = createContext({
    user:{
        name:"Sumit kumar",
        email:"sumit@gmail.com",
    }
})

export default userContext;