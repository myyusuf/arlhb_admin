import React from 'react';

import JqxGrid from 'jqwidgets-framework/jqwidgets-react/react_jqxgrid.js';

export default class UserList extends React.Component {

    constructor(props) {
        super(props);

        var url = "/users";

        var source = {
            datatype: "json",
            datafields: [
                {
                    name: 'id',
                    type: 'int'
                }, {
                    name: 'firstName',
                    type: 'string'
                }, {
                    name: 'lastName',
                    type: 'string'
                }, {
                    name: 'status',
                    type: 'string'
                }, {
                    name: 'depo',
                    type: 'string'
                }, {
                    name: 'time',
                    type: 'string'
                }, {
                    name: 'role'
                }, {
                    name: 'roleName',
                    type: 'string',
                    map: 'role>roleName'
                }
            ],
            id: "id",
            url: url
        };

        var dataAdapter = new $.jqx.dataAdapter(source);
        dataAdapter.dataBind();

        this.state = {
            dataAdapter: dataAdapter
        };
    }
    componentDidMount() {
        let _this = this;
        this.refs.roleList.on('rowdoubleclick', (e) => {

          let args = e.args;
          let rowIndex = args.rowindex;
          let data = _this.refs.roleList.getrowdata(rowIndex);
          this.props.onDoubleClick(data, e);
        });
    }

    refresh(){
      this.refs.roleList.updatebounddata();
    }

    render() {

        let columns = [
            {
                text: 'Id',
                datafield: 'id'
            }, {
                text: 'First Name',
                datafield: 'firstName'
            }, {
                text: 'Last Name',
                datafield: 'lastName'
            }, {
                text: 'Status',
                datafield: 'status'
            }, {
                text: 'Depo',
                datafield: 'depo'
            }, {
                text: 'Time',
                datafield: 'time'
            }, {
                text: 'Role',
                datafield: 'roleName'
            }
        ]

        return (<JqxGrid ref='roleList' width={'100%'} height={'calc(100% - 30px)'} source={this.state.dataAdapter} pageable={true} sortable={true} altrows={true} enabletooltips={true} columns={columns} theme={'metro'}/>)
    }
}
