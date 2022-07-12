import React, {Component, Fragment} from 'react';

class PhoneInfo extends Component {
    state = {
        editing: false,
        name: '',
        phone: ''
    }

    handleRemove = () => {
        const {info, onRemove} = this.props
        onRemove(info.id)
    }

    handleEdit = () => {
        if (!this.state.editing) {
            this.setState({editing: true})
            const {info, onEdit} = this.props

            this.setState({
                    editing: true,
                    name: info.data.name,
                    phone: info.data.phone
                }
            )
        }
        else {
            this.setState({editing: false})
            const {info, onEdit} = this.props
            onEdit(info.id, {name: this.state.name, phone: this.state.phone})
        }

        // if (this.state.editing) {
        //     const {info, onEdit} = this.props
        //
        //     this.setState({
        //             editing: true,
        //             name: info.data.name,
        //             phone: info.data.phone
        //         }
        //     )
        // }

        //
        //
        // if (this.state.editing)
        //     onEdit(info.id, {name: this.state.name, phone: this.state.phone})
        // else
        //     this.setState({
        //             editing: true,
        //             name: info.data.name,
        //             phone: info.data.phone
        //         }
        //     )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {data, id} = this.props.info // not necessarily state
        const {name, phone} = data
        const sytle = {
            border: '1px',
            padding: '8px'
        }
        return (
            <div style={sytle}>{
                this.state.editing ? (
                        <div>
                            <div><input name="name" value={this.state.name} onChange={this.handleChange}/></div>
                            <div><input name="phone" value={this.state.phone} onChange={this.handleChange}/></div>
                        </div>
                    ) :
                    (
                        <div>
                            <div>{name}</div>
                            <div>{phone}</div>
                        </div>
                    )
            }
                <button onClick={this.handleRemove}> 삭제</button>
                <button onClick={this.handleEdit}> {this.state.editing ? '적용' : '수정'} </button>
            </div>
        );
    }
}

export default PhoneInfo;