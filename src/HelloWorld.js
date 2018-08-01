import React, {Component} from 'react'
import StateInput from './StateInput'

class HelloWorld extends Component{

    constructor(props){
        super(props)

        console.log(props, this.props)

        this.state = {
            name : 'Carlos Marian',
            txt : this.props.txt
        }
        
    }

    //Metodo para mostrar o componente
    render(){
        const result = 5;
        const styleGreen = {
            color : '#ff0000',
            fontSize : 24
        }

        const styleRed = {
            color : '#ff0000',
            /* no CSS quando tiver - deve usar o camelcase*/
            fontSize : 24
        }
        return (
            <div className="my-class-from-react">
                {/*This is my first componente REactJS*/}
                <StateInput/>
                <h1 >{this.state.txt} </h1>
                <h4>{ result === 2 * 2 ? <div style={styleGreen}>TRUE</div> : <div style={styleRed}>False</div>}</h4>
                <span>{this.state.name}</span>
            </div>
        )        
    }

}

export default HelloWorld