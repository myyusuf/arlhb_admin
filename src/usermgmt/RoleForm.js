import React from 'react';

import JqxInput from 'jqwidgets-framework/jqwidgets-react/react_jqxinput.js';
import JqxValidator from 'jqwidgets-framework/jqwidgets-react/react_jqxvalidator.js';

export default class RoleForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roleId: ''
        };
    }

    validate(){
      this.refs.formValidator.validate(document.getElementById('roleForm'));
    }
    componentDidMount() {
      console.log('Did mount!!');
      let _this = this;

      this.refs.formValidator.on('validationSuccess', (event) => {
        if(_this.props.onValidationSuccess){
          let role = {
            roleId: _this.refs.roleIdInput.val(),
            roleName: _this.refs.roleNameInput.val()
          };
          _this.props.onValidationSuccess(role, event);
        }
      });
    }

    componentWillUnmount() {
      console.log('Unmount!!');
      $('#roleForm').remove();
    }

    render() {

      let rules =
      [
        { input: '.roleId', message: 'Role id is required!', action: 'keyup, blur', rule: 'required' },
        { input: '.roleName', message: 'Role name is required!', action: 'keyup, blur', rule: 'required' }
      ]

      if(this.props.role){
        this.refs.roleIdInput.val(this.props.role.roleId);
        this.refs.roleNameInput.val(this.props.role.roleName);
      }

      return (
        <JqxValidator ref='formValidator' rules={rules}>
          <form id='roleForm' action="./">
              <table className="register-table">
                <tbody>
                  <tr>
                      <td>Role Id</td>
                      <td><JqxInput ref='roleIdInput' theme={'metro'} className="roleId text-input" width={200}/></td>
                      <td><span style={{color: 'red'}}>*</span></td>
                  </tr>
                  <tr>
                      <td>Role Name</td>
                      <td><JqxInput ref='roleNameInput' theme={'metro'} className="roleName text-input" width={200}/></td>
                      <td><span style={{color: 'red'}}>*</span></td>
                  </tr>
                </tbody>
              </table>
            </form>
          </JqxValidator>
      )
    }
}
