import Component from '../base/components/Component';
import DataGrid from '../base/components/DataGrid';
import SearchHeader from '../main/components/SearchHeader';

export default class UserList extends Component{

  constructor(options) {
    super(options);

    var _this = this;

    var source = {
        datatype: "json",
        datafields: [
          { name: 'employeeId', type: 'string' },
          { name: 'firstName', type: 'string' },
          { name: 'address', type: 'string' },
          { name: 'email', type: 'string' },
          { name: 'status', type: 'number' },
          { name: 'mobilePhoneNumber', type: 'string' },
          { name: 'role'},
          { name: 'roleName', type: 'string', map: 'role>roleName' },
          { name: 'branch'},
          { name: 'location'},
          { name: 'locationName', type: 'string', map: 'location>name' },
        ],
        id: "employeeId",
        url: "/users"
    };

    var onSearch = function(data) {
      data['searchTxt'] = _this.searchTxt;
      return data;
    }

    var onViewButtonClick = function(value){
      if(options.onViewButtonClick){
        options.onViewButtonClick(value);
      }
    }

    var onEditButtonClick = function(value){
      if(options.onEditButtonClick){
        options.onEditButtonClick(value);
      }
    }

    var onBlockButtonClick = function(value){
      if(options.onBlockButtonClick){
        options.onBlockButtonClick(value);
      }
    }

    var jqxOptions = {
        width: '100%',
        height: '100%',
        rowsheight: 35,
        pageable: true,
        altrows: true,
        theme: 'metro',
        virtualmode: true,
        rendergridrows: function (params) {
                    return params.data;
                },
        columns: [
          { text: 'ID', datafield: 'employeeId' },
          { text: 'Name', datafield: 'firstName'},
          { text: 'Status', datafield: 'status'},
          { text: 'Location', datafield: 'locationName'},
          { text: 'Role', datafield: 'roleName'},
          {
            text: 'Actions',
            datafield: 'actions',
            // width: 325,
            createwidget: function (row, column, value, htmlElement) {

              var rowIndex = $('<input type="hidden" value="" class="myRowIndex"/>');
              rowIndex.val(row.boundindex);
              rowIndex.appendTo(htmlElement);

              var table = $('<table style="height: 100%; width: 100%; text-align: center;"></table>');
              var tr = $('<tr></tr>');
              var td = $('<td></td>');
              table.appendTo(htmlElement);
              tr.appendTo(table);
              td.appendTo(tr);
              var button1 = $("<div style='margin: 2.4px;'>" + "View" + "</div>");
              button1.appendTo(td);
              button1.jqxButton({ theme:'light', template: "default"});
              button1.click(function (event) {
                var rowIndexVal = $(htmlElement).find(':input.myRowIndex').val();
                var rowdata = _this.dataGrid.getDataRow(rowIndexVal);
                onViewButtonClick(rowdata);
              });

              td = $('<td></td>');
              td.appendTo(tr);
              var button2 = $("<div style='margin: 2.4px;'>" + "Edit" + "</div>");
              button2.appendTo(td);
              button2.jqxButton({ theme:'light', template: "success"});
              button2.click(function (event) {
                var rowIndexVal = $(htmlElement).find(':input.myRowIndex').val();
                var rowdata = _this.dataGrid.getDataRow(rowIndexVal);
                onEditButtonClick(rowdata);
              });

              td = $('<td style="width: 50%;"></td>');
              td.appendTo(tr);
              var button3 = $("<div style='margin: 2.4px;'>" + "Block / Unblock" + "</div>");
              button3.appendTo(td);
              button3.jqxButton({ theme:'light', template: "danger"});
              button3.click(function (event) {
                var rowIndexVal = $(htmlElement).find(':input.myRowIndex').val();
                var rowdata = _this.dataGrid.getDataRow(rowIndexVal);
                onBlockButtonClick(rowdata);
              });
            },
            initwidget: function (row, column, value, htmlElement) {
              var rowIndexVal = $(htmlElement).find(':input.myRowIndex');
              rowIndexVal.val(row);
            }
          }
        ],
        groups: []
    }

    this.dataGrid = new DataGrid({
      source: source,
      onSearch: onSearch,
      jqxOptions: jqxOptions
    });
  }

  render(container) {
    this.dataGrid.render(container);
  }

  refresh(){
    this.dataGrid.refresh();
  }

  filter(value){
    this.searchTxt = value;
    this.dataGrid.refresh();
  }
}
