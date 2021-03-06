import Component from '../base/components/Component';
import DataGrid from '../base/components/DataGrid';
import SearchHeader from '../main/components/SearchHeader';

export default class CustomerList extends Component{

  constructor(options) {
    super(options);

    var _this = this;

    var source = {
        datatype: "json",
        datafields: [
          { name: 'employeeId', type: 'string' },
          { name: 'firstName', type: 'string' },
          { name: 'description', type: 'string' },
        ],
        id: "employeeId",
        url: "/customers"
    };

    var onSearch = function(data) {
      data['searchTxt'] = _this.searchTxt;
      return data;
    }

    var onEditButtonClick = function(value){
      if(options.onEditButtonClick){
        options.onEditButtonClick(value.bounddata);
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
          { text: 'Customer Name', datafield: 'firstName'},
          { text: 'Code', datafield: 'status'},
          { text: 'Address', datafield: 'location'},
          { text: 'Contact No', datafield: 'role'},
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
                    onEditButtonClick(row);
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
                    onEditButtonClick(row);
                });

                td = $('<td style="width: 50%;"></td>');
                td.appendTo(tr);
                var button4 = $("<div style='margin: 2.4px;'>" + "Update Limit" + "</div>");
                button4.appendTo(td);
                button4.jqxButton({ theme:'light', template: "default"});
                button4.click(function (event) {
                    onEditButtonClick(row);
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
