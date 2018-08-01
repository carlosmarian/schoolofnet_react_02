import React, {Component} from 'react'

class HelloWorld extends Component{

    //Metodo para mostrar o componente
    render(){
        const result = 4;
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
                <h1 >Olá mundo com ReactJS</h1>
                <h4>{ result === 2 * 2 ? <div style={styleGreen}>TRUE</div> : <div style={styleRed}>False</div>}</h4>
            </div>
        )        
    }

}

export default HelloWorld