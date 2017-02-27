import React from 'react';

import JqxMenu from 'jqwidgets-framework/jqwidgets-react/react_jqxmenu.js';

export default class MainMenu extends React.Component {

    constructor(props) {
        super(props);

        var data = [
          {
              "id": "1",
              "text": "Home",
              "parentid": "-1",
              "subMenuWidth": '250px'
          },
          {
              "id": "2",
              "text": "Customer Payment",
              "parentid": "-1",
              "subMenuWidth": '250px'
          },
          {
              "id": "21",
              "text": "Cash",
              "parentid": "2"
          },
          {
              "id": "3",
              "text": "Customer Transaction",
              "parentid": "-1"
          },
          {
              "id": "4",
              "text": "Bank Transaction",
              "parentid": "-1"
          },
          {
              "id": "5",
              "text": "Administration",
              "parentid": "-1"
          },
          {
              "id": "51",
              "text": "Active Sessions",
              "parentid": "5"
          },
          {
              "id": "52",
              "text": "Corporate Entity",
              "parentid": "5"
          },
          {
              "id": "53",
              "text": "Country Zone",
              "parentid": "5"
          },
          {
              "id": "54",
              "text": "Customer",
              "parentid": "5"
          },
          {
              "id": "55",
              "text": "Holidays",
              "parentid": "5"
          },
          {
              "id": "56",
              "text": "Location",
              "parentid": "5"
          },
          {
              "id": "57",
              "text": "Operational Time",
              "parentid": "5"
          },
          {
              "id": "58",
              "text": "Role",
              "parentid": "5"
          },
          {
              "id": "59",
              "text": "User",
              "parentid": "5"
          },
          {
              "id": "6",
              "text": "Report",
              "parentid": "-1"
          }
        ];

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
            this.props.onMenuClick(e);
        });
    }

    render() {
        return (
            <div style={{ height: '30px', width: '100%' }}>
                <JqxMenu ref='myMenu' source={this.state.records} theme={'metro'} width={'100%'} height={30} />
            </div>
        )
    }
}
