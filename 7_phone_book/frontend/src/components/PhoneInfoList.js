import React, {Component} from 'react';
import PhoneInfo from "./PhoneInfo";


class PhoneInfoList extends Component {

    render() {

        const {information} = this.props
        const list = information.map(item => <PhoneInfo info = {item} key = {item.id} />)
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;