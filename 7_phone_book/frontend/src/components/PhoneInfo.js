import React, {Component} from 'react';

class PhoneInfo extends Component {

    handleRemove = () => {
        const {info, onRemove} = this.props
        onRemove(info.id)
    }

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
                <button onClick={this.handleRemove}> 삭제 </button>
            </div>
        );
    }
}

export default PhoneInfo;