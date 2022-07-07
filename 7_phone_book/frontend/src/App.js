import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from "./components/PhoneForm";

class App extends Component {
    id = 0; // this is not managed as state

    state = {
        information: [],
    }

    handleCreate = (data) => {
        const {information} = this.state
        this.setState({
            information: information.concat({
                data, id: this.id++
            }),
        })
    }

    render() {
        return (
            <div className="App">
                <PhoneForm onCreate={this.handleCreate}>
                </PhoneForm>
                {JSON.stringify(this.state.information)}
            </div>
        )
    };
}

export default App;
