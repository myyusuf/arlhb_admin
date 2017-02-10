import Component from '../base/components/Component';
import DataGrid from '../base/components/DataGrid';
import SearchHeader from '../main/components/SearchHeader';

export default class RoleList extends Component{

  constructor(options) {
    super(options);

    var _this = this;

    var source = {
        datatype: "json",
        datafields: [
          { name: 'roleId', type: 'int' },
          { name: 'roleName', type: 'string' },
          { name: 'description', type: 'string' },
        ],
        id: "roleId",
        url: "/roles"
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
        rowsheight: 40,
        pageable: true,
        altrows: true,
        theme: 'metro',
        virtualmode: true,
        rendergridrows: function (params) {
                    return params.data;
                },
        columns: [
          { text: 'Role Name', datafield: 'roleName', width: '30%' },
          { text: 'Description', datafield: 'description', width: '40%' },
          {
            text: 'Actions',
            datafield: 'actions',
            width: '30%',
            createwidget: function (row, column, value, htmlElement) {
                var table = $('<table style="height: 100%; width: 100%; text-align: center;"></table>');
                var tr = $('<tr></tr>');
                var td = $('<td style="width: 50%;"></td>');
                table.appendTo(htmlElement);
                tr.appendTo(table);
                td.appendTo(tr);

                td = $('<td></td>');
                td.appendTo(tr);
                var button = $("<div style='margin: 5px;'>" + "Edit" + "</div>");
                button.appendTo(td);
                button.jqxButton({ theme:'light', template: "success", width: 70 });
                button.click(function (event) {
                    onEditButtonClick(row);
                });

                td = $('<td style="width: 50%;"></td>');
                td.appendTo(tr);
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

  refresh(){
    this.dataGrid.refresh();
  }

  filter(value){
    this.searchTxt = value;
    this.dataGrid.refresh();
  }
}
