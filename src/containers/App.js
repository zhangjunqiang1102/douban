import React from 'react'
import Movie from "./movie/Movie";

export default class App extends React.Component {
    render() {
        return <div>
            {this.props.children}
            <Movie/>
        </div>
    }
}