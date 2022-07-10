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

    handleRemove = (id) => {
        const {information} = this.state
        this.setState({
                information: information.filter((item) => item.id !== id)
            }
        )
        console.log(JSON.stringify(this.state.information))
    }

    render() {
        return (
            <div className="App">
                {/* Every re-rendering, call onCreate */}
                <PhoneForm onCreate={this.handleCreate}>
                </PhoneForm>
                {/*{JSON.stringify(this.state.information)}*/}
                {/* NO_KEY: not a good way for deletion and insertion*/}
                {/*{this.state.information.map(item => <PhoneInfo info = {item}/>)}*/}
                <PhoneInfoList information = {this.state.information}
                               onRemove = {this.handleRemove}>
                </PhoneInfoList>
            </div>
        )
    };
}

export default App;
