import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from "./components/PhoneForm";
import PhoneInfo from "./components/PhoneInfo";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
    id = 0; // this is not managed as state

    state = {
        information: [],
    }

    handleCreate = (data) => { // data = state of PhoneForm ?
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
                {/*{JSON.stringify(this.state.information)}*/}
                {/* NO_KEY: not a good way for deletion and insertion*/}
                {/*{this.state.information.map(item => <PhoneInfo info = {item}/>)}*/}
                <PhoneInfoList information = {this.state.information}></PhoneInfoList>
            </div>
        )
    };
}

export default App;
