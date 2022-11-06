import React, { createContext, useState } from "react";
import { INITIAL_STATE } from "./reducer/authReducer";

export const UserContext = createContext(INITIAL_STATE);

const UserProvider = ({ children }) => {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(1);
  const happyBirthday = () => setAge(age + 1);
  return (
    <UserContext.Provider value={{ name, age, happyBirthday }}>
      {children}
    </UserContext.Provider>
  );
};

const withUser = (Child) => (props) => (
    <UserContext.Consumer>
      {(context) => <Child {...props} {...context} />}
      {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
    </UserContext.Consumer>
  );

  export { UserProvider, withUser };