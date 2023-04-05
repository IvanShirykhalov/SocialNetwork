import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


//but it is not exactly
type stateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component <ProfileStatusType, any> {


    state = {
        editMode: false,
        status: this.props.status
    }


    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<stateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.toggleEditMode}>{this.props.status || 'No status'}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.toggleEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}
