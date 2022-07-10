import React, {Component} from 'react';
import PhoneInfo from "./PhoneInfo";


class PhoneInfoList extends Component {



    render() {
        const {information, onRemove} = this.props
        const list = information.map(item => <PhoneInfo info = {item} key = {item.id} onRemove = {onRemove} />)
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;