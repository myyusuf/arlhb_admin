import React from 'react';

import JqxWindow from 'jqwidgets-framework/jqwidgets-react/react_jqxwindow.js';
import JqxInput from 'jqwidgets-framework/jqwidgets-react/react_jqxinput.js';
import JqxValidator from 'jqwidgets-framework/jqwidgets-react/react_jqxvalidator.js';
import JqxButton from 'jqwidgets-framework/jqwidgets-react/react_jqxbuttons.js';

export default class RoleEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roleName: ''
        };
    }
    componentDidMount() {
      this.refs.saveButton.on('click', (event) => {
        this.refs.myValidator.validate(document.getElementById('roleEditForm'));
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
                      width={500} height={500} theme={'metro'} isModal={true}
                      minWidth={200} minHeight={200} maxWidth={700}
                      maxHeight={500} showCollapseButton={true} autoOpen={false}>
          <div>
              <span>
                  Role Edit
              </span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <JqxValidator ref='myValidator' rules={rules}>
              <form id='roleEditForm' action="./">
                  <table className="register-table">
                    <tbody>
                      <tr>
                          <td>Role Id:</td>
                          <td><JqxInput theme={'metro'} className="roleId text-input" width={300}/></td>
                          <td><span style={{color: 'red'}}>*</span></td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>
                              <JqxButton width={60} height={25} ref='saveButton' value='Save' theme={'metro'}/>
                          </td>
                          <td></td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </JqxValidator>

          </div>
        </JqxWindow>
      )
    }
}
