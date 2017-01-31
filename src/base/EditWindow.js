import React from 'react';

import JqxWindow from 'jqwidgets-framework/jqwidgets-react/react_jqxwindow.js';
import JqxButton from 'jqwidgets-framework/jqwidgets-react/react_jqxbuttons.js';

export default class EditWindow extends React.Component {

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

      this.refs.cancelButton.on('click', (event) => {
        _this.refs.editWindow.close();
      });

      this.refs.deleteButton.on('click', (event) => {
        if(_this.props.onDelete){
          _this.props.onDelete();
        }
      });
    }

    open(){
      this.refs.editWindow.open();
    }

    close(){
      this.refs.editWindow.close();
    }

    render() {
      return (
        <JqxWindow ref='editWindow'
                      width={340} height={150} theme={'metro'} isModal={true}
                      resizable={false} autoOpen={false}>
          <div>
              <span>
                  {this.props.title}
              </span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <table className="register-table">
              <tbody>
                <tr>
                    <td colSpan={3}>{this.props.children}</td>
                </tr>
                <tr>

                  <td>
                  <table style={{height: '100%', width: '100%'}}>
                    <tbody>
                    <tr>
                      <td style={{width: '90%'}}>
                      </td>
                      <td style={{paddingRight: '20px'}}>
                        <JqxButton width={60} height={25} ref='deleteButton' value='Delete' theme={'light'} template={'danger'}/>
                      </td>
                      <td>
                        <JqxButton width={60} height={25} ref='cancelButton' value='Cancel' theme={'light'} template={'default'}/>
                      </td>
                      <td>
                        <JqxButton width={60} height={25} ref='saveButton' value='Save' theme={'light'} template={'success'}/>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  </td>

                </tr>
              </tbody>
            </table>

          </div>
        </JqxWindow>
      )
    }
}
