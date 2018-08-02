import React, { Component } from 'react'


class Events extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            data: []
        }

        this.updateInputName = this.updateInputName.bind(this)
        this.clickEvent = this.clickEvent.bind(this)
        this.deleteEvent = this.deleteEvent.bind(this)
    }

    updateInputName(e) {
        return this.setState({
            name: e.target.value
        })
    }

    clickEvent(e) {
        this.state.data.push(this.state.name);

        return this.setState({
            name: ''
        })
    }

    deleteEvent(item){
        const newState = this.state.data
        console.log(newState)
        if(newState.indexOf(item) > -1){
            newState.splice(newState.indexOf(item), 1)

            return this.setState({
                data : newState
            })
        }
    }

    render() {
        const { data } = this.state

        const itens = this.state.data.map((item) => {
            return <li key={item}>
                        {item.toString()}
                        <button type="button" onClick={this.deleteEvent.bind(this, item)}>del</button>
                   </li>
        })

        return (
            <div>

                <input type="text" name="name" value={this.state.name} onChange={this.updateInputName} />
                <button type="button" onClick={this.clickEvent}>Submit</button>
                <h2>{this.state.name}</h2>
                <ul>
                    {itens}
                </ul>
            </div>
        )
    }

}

export default Events