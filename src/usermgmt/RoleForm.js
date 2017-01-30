import React from 'react';

import JqxWindow from 'jqwidgets-framework/jqwidgets-react/react_jqxwindow.js';
import JqxInput from 'jqwidgets-framework/jqwidgets-react/react_jqxinput.js';
import JqxValidator from 'jqwidgets-framework/jqwidgets-react/react_jqxvalidator.js';
import JqxButton from 'jqwidgets-framework/jqwidgets-react/react_jqxbuttons.js';

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
      let _this = this;

      this.refs.formValidator.on('validationSuccess', (event) => {
        if(_this.props.onValidationSuccess){
          let role = {
            roleId: _this.refs.roleIdInput.val()
          };
          _this.props.onValidationSuccess(role, event);
        }
      });
    }

    render() {

      let rules =
      [
        { input: '.roleId', message: 'Role id is required!', action: 'keyup, blur', rule: 'required' }
      ]

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
                </tbody>
              </table>
            </form>
          </JqxValidator>
      )
    }
}
