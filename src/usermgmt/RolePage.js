import React from 'react';

import RoleList from './RoleList';
import RoleForm from './RoleForm';
import EditWindow from '../base/EditWindow';

export default class RolePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editedRole: null
        };
    }
    componentDidMount() {}

    render() {

        let _this = this;

        let onDoubleClick = function(data, e) {
            _this.setState({
              editedRole: data
            });
            _this.refs.editRoleWindow.open();
        }

        let onSave = function(e) {
            _this.refs.editRoleForm.validate();
        }

        let onValidationSuccess = function(role, e) {
            console.log(role);
        }

        return (
            <div style={{
                height: '100%'
            }}>
                <RoleList onDoubleClick={onDoubleClick}/>
                <div>
                  <EditWindow ref='editRoleWindow' title={'Edit Role'} onSave={onSave}>
                    <RoleForm ref='editRoleForm' role={this.state.editedRole} onValidationSuccess={onValidationSuccess}></RoleForm>
                  </EditWindow>
                </div>
            </div>

        )
    }
}
