import React from 'react';
import {StoreType} from "../../../redux/redux-store";

type ProfileStatusType = {
    state: {
        editMode: boolean
    }
    status: string
}

export class ProfileStatus extends React.Component <any, any> {


    state = {
        editMode: false
    }


    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={this.toggleEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
}
