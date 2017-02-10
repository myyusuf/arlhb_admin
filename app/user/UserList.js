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
          { name: 'description', type: 'string' },
          { name: 'role'},
          { name: 'roleName', type: 'string', map: 'role>roleName' },
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
        options.onViewButtonClick(value.bounddata);
      }
    }

    var onEditButtonClick = function(value){
      if(options.onEditButtonClick){
        options.onEditButtonClick(value.bounddata);
      }
    }

    var onBlockButtonClick = function(value){
      if(options.onBlockButtonClick){
        options.onBlockButtonClick(value.bounddata);
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
          { text: 'Location', datafield: 'location'},
          { text: 'Role', datafield: 'roleName'},
          {
            text: 'Actions',
            datafield: 'actions',
            // width: 325,
            createwidget: function (row, column, value, htmlElement) {
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
                    onViewButtonClick(row);
                });

                td = $('<td></td>');
                td.appendTo(tr);
                var button2 = $("<div style='margin: 2.4px;'>" + "Edit" + "</div>");
                button2.appendTo(td);
                button2.jqxButton({ theme:'light', template: "success"});
                button2.click(function (event) {
                    onEditButtonClick(row);
                });

                td = $('<td style="width: 50%;"></td>');
                td.appendTo(tr);
                var button3 = $("<div style='margin: 2.4px;'>" + "Block / Unblock" + "</div>");
                button3.appendTo(td);
                button3.jqxButton({ theme:'light', template: "danger"});
                button3.click(function (event) {
                    onBlockButtonClick(row);
                });
            },
            initwidget: function (row, column, value, htmlElement) {
                // var imgurl = '../../images/' + value.toLowerCase() + '.png';
                // $(htmlElement).find('.buttonValue')[0].innerHTML = value;
                // $(htmlElement).find('img')[0].src = imgurl;
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

  filter(value){
    this.searchTxt = value;
    this.dataGrid.refresh();
  }
}
