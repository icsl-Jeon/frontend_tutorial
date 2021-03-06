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
        keyword: ""
    }

    handleCreate = (data) => { // data = state of PhoneForm ?

        console.log(JSON.stringify(data))

        const {information} = this.state
        this.setState({
            information: information.concat({
                data: data, id: this.id++
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

    handleUpdate = (id, data) => {

        this.setState({
                information: this.state.information.map(
                    info => {
                        if (info.id !== id) {
                            return info
                        } else
                            return {
                                data: data,
                                id: id,
                            }
                    }
                )
            }
        )
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({keyword: e.target.value})
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
                <PhoneInfoList information={this.state.information.filter(item => item.data.name.indexOf(this.state.keyword) > -1 )}
                               onRemove={this.handleRemove} onEdit={this.handleUpdate}>
                </PhoneInfoList>
                <input placeholder='??????..' onChange={this.handleChange} value = {this.state.keyword}>
                </input>
            </div>
        )
    };
}

export default App;
