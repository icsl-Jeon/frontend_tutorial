import React, {Component} from 'react';

class PhoneForm extends Component {

    refToInput = React.createRef()


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

        this.refToInput.current.focus()


    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input name="name" placeholder="이름" onChange={this.handleChange} value={this.state.name}
                           ref={this.refToInput}></input>
                    <input name="phone" placeholder="번호" onChange={this.handleChange} value={this.state.phone}></input>
                    <button type="submit">등록</button>
                </div>
            </form>

        );
    }
}

export default PhoneForm;