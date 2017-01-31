import React from 'react';

import RoleList from './RoleList';
import RoleForm from './RoleForm';
import EditWindow from '../base/EditWindow';
import SuccessNotification from '../base/SuccessNotification';
import JqxNotification from 'jqwidgets-framework/jqwidgets-react/react_jqxnotification.js';

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
          $.ajax({
                method: "PUT",
                url: "/roles/" + role.roleId,
                data: JSON.stringify(role),
                beforeSend: function(xhr){
                  xhr.setRequestHeader('Accept', 'application/json');
                  xhr.setRequestHeader('Content-Type', 'application/json');
                }
              }).done(function() {
                  _this.refs.successNotification.open();
                  _this.refs.editRoleWindow.close();
                  _this.refs.roleList.refresh();
              }).fail(function( jqXHR, textStatus, errorThrown) {

              });
        }

        let onDelete = function(e){

          var r = confirm("Proses hapus data akan dilakukan!");
          if (r == true) {
            let role = _this.refs.editRoleForm.getValue();
            $.ajax({
                  method: "DELETE",
                  url: "/roles/" + role.roleId,
                  data: { }
                }).done(function() {
                  _this.refs.successNotification.open();
                  _this.refs.editRoleWindow.close();
                  _this.refs.roleList.refresh();
                }).fail(function() {
                });
          }

        }

        return (
            <div style={{
                height: '100%'
            }}>
                <RoleList ref="roleList" onDoubleClick={onDoubleClick}/>
                <div>
                  <EditWindow ref='editRoleWindow' title={'Edit Role'} onSave={onSave} onDelete={onDelete}>
                    <RoleForm ref='editRoleForm' role={this.state.editedRole} onValidationSuccess={onValidationSuccess}></RoleForm>
                  </EditWindow>
                </div>

                <SuccessNotification ref="successNotification"></SuccessNotification>
            </div>

        )
    }
}
