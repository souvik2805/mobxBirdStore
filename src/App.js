import React from "react";
import { Provider } from "mobx-react";
import BirdStore1 from "./store/BirdStore";
import Birds from "./Birds";


//  Method 1 
// class App extends React.Component{

//   render(){
//     return(
//       <Provider BirdStore2={BirdStore1}>
//         <Birds />
//       </Provider>
//     );
//   }
// } 


// Method : 2
const store = {
  BirdStore1
}
class App extends React.Component{

  render(){
    return(
      <Provider {...store}>
        <Birds />
      </Provider>
    );
  }
}

export default App;
