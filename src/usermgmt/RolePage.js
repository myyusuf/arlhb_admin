import React from 'react';

import RoleList from './RoleList';
import RoleForm from './RoleForm';
import AddWindow from '../base/AddWindow';

export default class RolePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            openEditWindow: false
        };
    }
    componentDidMount() {}

    render() {

        let _this = this;

        let onDoubleClick = function(e) {
            _this.refs.addRoleWindow.open();
        }

        let onSave = function(e) {
            _this.refs.roleForm.validate();
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
                  <AddWindow ref='addRoleWindow' onSave={onSave}>
                    <RoleForm ref='roleForm' onValidationSuccess={onValidationSuccess}></RoleForm>
                  </AddWindow>

                </div>
            </div>

        )
    }
}
