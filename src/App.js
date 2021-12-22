import './App.css';
import './Component/Style.css'
import React, { Component } from 'react'
import Funcomp from './Component/Funcomp';
import Classcomponent from './Component/Classcomponent';

class App extends Component {

  constructor() {
    super();
    this.state={
      count1: 0,
      count2:0
    }
  }
   funhandler=()=>{
    this.setState({
      count1: this.state.count1+1
      
    })
  }  

  
  classhandler=()=>{
    this.setState({
      count2: this.state.count2+1
      
    })
  }  

  render() {
  //   <div>
    
  // if(this.state.onclick1){
  //     <Funcomp/>
  //  }
  // </div>
  
    // (()=>{
    //   if(this.state.onclick2){
    //     return <Classcomponent/>
    //   }
    //   else{
    //     return null;
    //   }
    // })

    // }
    // </div>


    return (
      
      <div className="App">
        
        <h1 className="Head">Styling Using Functional and Class Component</h1>
             
        <button className='function-button' onClick={this.funhandler}>To see styling in functional Component</button>
        <button className='class-button' onClick={this.classhandler}>To see styling in class Component</button> 

        <div>{this.state.count1%2===0?null:<Funcomp/>}</div>
        <div>{this.state.count2%2===0?null:<Classcomponent/>}</div>
             
      </div>
    )
  }
}


export default App;