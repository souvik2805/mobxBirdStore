import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

// Method : 1

// @inject("BirdStore2")
// @observer
// class Birds extends Component{
//     handleSubmit = e =>{
//         e.preventDefault();
//         this.props.BirdStore2.addBird(this.birdInput.value);
//         e.target.reset();
//     }
//     render(){
//         const {BirdStore2} = this.props;
//         return (
//             <div>
//                 <h2>You Have {BirdStore2.birdCount}</h2>
//                 <form onSubmit={e => this.handleSubmit(e)}>
//                     <input type="text" ref={input=>(this.birdInput=input)} placeholder="Add a bird" />
//                 </form>

//                 <ul>
//                     {BirdStore2.birds.map(bird=>(
//                         <li key={bird}>{bird}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }


// Method: 2
@inject("BirdStore1")
@observer
class Birds extends Component{
    handleSubmit = e =>{
        e.preventDefault();
        this.props.BirdStore1.addBird(this.birdInput.value);
        e.target.reset();
    }
    render(){
        const {BirdStore1} = this.props;
        return (
            <div>
                <h2>You Have {BirdStore1.birdCount}</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" ref={input=>(this.birdInput=input)} placeholder="Add a bird" />
                </form>

                <ul>
                    {BirdStore1.birds.map(bird=>(
                        <li key={bird}>{bird}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Birds;
