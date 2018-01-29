import React from 'react'
import Movie from "./movie/Movie";
import bootstrap from '../../node_modules/bootstrap'

export default class App extends React.Component {
    render() {
        return <div>
            {this.props.children}
            <Movie/>
        </div>
    }
}