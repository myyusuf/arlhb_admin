import React from 'react';

import JqxWindow from 'jqwidgets-framework/jqwidgets-react/react_jqxwindow.js';
import JqxInput from 'jqwidgets-framework/jqwidgets-react/react_jqxinput.js';
import JqxValidator from 'jqwidgets-framework/jqwidgets-react/react_jqxvalidator.js';
import JqxButton from 'jqwidgets-framework/jqwidgets-react/react_jqxbuttons.js';

export default class AddWindow extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {

      let _this = this;
      this.refs.saveButton.on('click', (event) => {
        if(_this.props.onSave){
          _this.props.onSave();
        }
      });
    }

    open(){
      this.refs.addWindow.open();
    }

    render() {
      return (
        <JqxWindow ref='addWindow'
                      width={380} height={180} theme={'metro'} isModal={true}
                      resizable={false}
                      showCollapseButton={true} autoOpen={false}>
          <div>
              <span>
                  Add Window
              </span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <table className="register-table">
              <tbody>
                <tr>
                    <td>{this.props.children}</td>
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
