import React from 'react';
import JqxNotification from 'jqwidgets-framework/jqwidgets-react/react_jqxnotification.js';

export default class SuccessNotification extends React.Component {

    constructor(props) {
        super(props);
    }

    open(){
      this.refs.messageNotification.open();
    }

    render() {
        return (
          <JqxNotification ref='messageNotification'
            width={250} opacity={0.9}  autoCloseDelay={3000} animationOpenDelay={800}
            autoClose={true} autoOpen={false} position={'top-right'} template={'info'}>
            <div>Operation Completed Successfully</div>
          </JqxNotification>
        )
    }
}
