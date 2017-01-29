import React from 'react';

import JqxMenu from 'jqwidgets-framework/jqwidgets-react/react_jqxmenu.js';

export default class MainMenu extends React.Component {

    constructor(props) {
        super(props);

        var data = [
        {
            "id": "12",
            "text": "Account",
            "parentid": "-1",
            "subMenuWidth": '250px'
        },
        {
            "text": "Help",
            "id": "1",
            "parentid": "-1",
            "subMenuWidth": '250px'
        }, {
            "id": "13",
            "text": "Profile",
            "parentid": "12"
        }, {
            "id": "14",
            "text": "Logout",
            "parentid": "12"
        }];

        var source = {
           datatype: "json",
           datafields: [
               { name: 'id' },
               { name: 'parentid' },
               { name: 'text' },
               { name: 'subMenuWidth' }
           ],
           id: 'id',
           localdata: data
       };

       var dataAdapter = new $.jqx.dataAdapter(source);
       dataAdapter.dataBind();

        var records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label'}]);

        this.state = {records: records, text: ''};
      }
    componentDidMount() {

        this.refs.myMenu.on('itemclick', (e) =>
        {
           console.log('test');
            this.props.onMenuClick(e);
        });
    }

    render() {
        return (
            <div style={{ height: '300px', width: '100%' }}>
                <JqxMenu ref='myMenu' source={this.state.records} theme={'metro'} width={'100%'} height={30} />
            </div>
        )
    }
}
