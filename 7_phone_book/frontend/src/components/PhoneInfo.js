import React, {Component} from 'react';

class PhoneInfo extends Component {

    render() {
        const {data, id} = this.props.info // not necessarily state
        const {name, phone} = data
        const sytle = {
            border: '1px',
            padding: '8px'
        }
        return (
            <div style={sytle}>
                <div>{name}</div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;