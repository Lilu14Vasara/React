import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}
 
export default UserContextProvider
//You need a Provider component to make the context value
// available to all components within the tree.
//wrapping means provider ,with data 
