import React from 'react';

import JqxWindow from 'jqwidgets-framework/jqwidgets-react/react_jqxwindow.js';
import JqxInput from 'jqwidgets-framework/jqwidgets-react/react_jqxinput.js';
import JqxValidator from 'jqwidgets-framework/jqwidgets-react/react_jqxvalidator.js';
import JqxButton from 'jqwidgets-framework/jqwidgets-react/react_jqxbuttons.js';
import RoleForm from './RoleForm';

export default class RoleEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roleName: ''
        };
    }
    componentDidMount() {
      this.refs.saveButton.on('click', (event) => {
        this.refs.roleForm.validate();
      });
    }

    open(){
      this.refs.roleEdit.open();
    }

    render() {

      let rules =
      [
        { input: '.roleId', message: 'Role id is required!', action: 'keyup, blur', rule: 'required' }
      ]

      return (
        <JqxWindow ref='roleEdit'
                      width={380} height={180} theme={'metro'} isModal={true}
                      resizable={false}
                      showCollapseButton={true} autoOpen={false}>
          <div>
              <span>
                  Role Edit
              </span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <table className="register-table">
              <tbody>
                <tr>
                    <td><RoleForm ref='roleForm'></RoleForm></td>
                </tr>
                <tr>
                    <td>
                        <JqxButton width={60} height={25} ref='saveButton' value='Save' theme={'metro'}/>
                    </td>
                </tr>
              </tbody>
            </table>

          </div>
        </JqxWindow>
      )
    }
}
