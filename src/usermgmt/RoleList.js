import React from 'react';

import JqxGrid from 'jqwidgets-framework/jqwidgets-react/react_jqxgrid.js';

export default class RoleList extends React.Component {

    constructor(props) {
        super(props);

        var url = "/roles";

        var source = {
            datatype: "json",
            datafields: [{
                    name: 'roleId',
                    type: 'int'
                },
                {
                    name: 'roleName',
                    type: 'string'
                },
                {
                    name: 'description',
                    type: 'string'
                },
            ],
            id: "roleId",
            url: url
        };

        var dataAdapter = new $.jqx.dataAdapter(source);
        dataAdapter.dataBind();

        this.state = {
            dataAdapter: dataAdapter
        };
    }
    componentDidMount() {

    }

    render() {

      let columns = [{
            text: 'Role Id',
            datafield: 'roleId',
            width: '30%'
          },
          {
              text: 'Role Name',
              datafield: 'roleName',
              width: '30%'
          },
          {
              text: 'Description',
              datafield: 'description',
              width: '40%'
          }
      ]

        return (
          <JqxGrid
            width={'100%'} height={'calc(100% - 30px)'} source={this.state.dataAdapter} pageable={true}
            sortable={true} altrows={true} enabletooltips={true} columns={columns}
            theme={'metro'}
          />
        )
    }
}
