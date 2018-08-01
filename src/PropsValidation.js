import React, { Component } from 'react'
import PropTypes from 'prop-types';

class PropsValidation extends Component {

    constructor(props) {
        super(props)
    }

    //define default value
    static defaultProps = {
        name: 'Carlos',
        age: 38,
        height: 1.78
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.age}</h1>
                <h1>{this.props.height}</h1>
            </div>
        )
    }

}

PropsValidation.propsTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.number,
    func: PropTypes.func,
    obj: PropTypes.object,
    arr: PropTypes.arr
}

export default PropsValidation