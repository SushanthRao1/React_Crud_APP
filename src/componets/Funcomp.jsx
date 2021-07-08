import React from 'react';

/*class Movie extends React.Component {
    render() {
        return (<div class="PK">
            {this.props.title} <img src={this.props.link} />
        </div>
        )
    }
}*/

function Movie(props) {
    return (
        <div class="PK">
            {props.title}  <img src={props.link} alt="pkimage" />
            <Movei2 />
        </div>
    )
}

function Movei2() {

    return (<div>FunCOMP2</div>

    )

}




/* functional component
function Movie(props) {
    return (
            <div class="PK">
                {props.title} <img src={props.link} />
            </div>
    )
}*/

export default Movie;