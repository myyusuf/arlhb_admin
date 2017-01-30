import React from 'react';

import JqxWindow from 'jqwidgets-framework/jqwidgets-react/react_jqxwindow.js';

export default class RoleEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roleName: ''
        };
    }
    componentDidMount() {

    }

    open(){
      this.refs.roleEdit.open();
    }

    render() {

        return (
          <JqxWindow ref='roleEdit'
                        width={500} height={300} theme={'metro'} isModal={true}
                        minWidth={200} minHeight={200} maxWidth={700}
                        maxHeight={400} showCollapseButton={true} autoOpen={false}
                    >

                        <div >
                            <span>
                                Role Edit
                            </span>
                        </div>
                        <div style={{ overflow: 'hidden' }}>

                        </div>
          </JqxWindow>
        )
    }
}
