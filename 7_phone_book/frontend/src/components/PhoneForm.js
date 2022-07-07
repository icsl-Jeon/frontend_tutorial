import React, {Component} from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state)
        this.setState({name: '', phone: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input name="name" placeholder="이름" onChange={this.handleChange}></input>
                    <input name="phone" placeholder="번호" onChange={this.handleChange}></input>
                    <button type="submit">등록</button>
                </div>
            </form>

        );
    }
}

export default PhoneForm;