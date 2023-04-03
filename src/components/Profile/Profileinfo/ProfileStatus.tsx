import React from 'react';

type ProfileStatusType = {
    status: string
}


//but it is not exactly
type stateType = {
    editMode: boolean
}

export class ProfileStatus extends React.Component <ProfileStatusType, stateType> {


    state = {
        editMode: false
    }


    toggleEditMode = () => {
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
