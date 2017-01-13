import { guid } from '../base/Utils';
import Button from '../base/components/Button';
import ToggleButton from '../base/components/ToggleButton';
import TextBox from '../base/components/TextBox';
import DataGrid from '../base/components/DataGrid';
import AddRoleWindow from '../user/AddRoleWindow';
import EditRoleWindow from '../user/EditRoleWindow';

export default class RoleList {

  constructor() {
    this.id = guid();
  }

  render(container) {

    var _this = this;

    var url = "/roles";

    var source = {
        datatype: "json",
        datafields: [
          { name: 'roleId', type: 'int' },
          { name: 'roleName', type: 'string' },
        ],
        id: "roleId",
        url: url
    };

    var onSearch = function(data) {
          data['searchTxt'] = searchTextBox.getValue();
          return data;
    }

    var cellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
              var roleTypeDescription = "";

              if(value == 1){
                roleTypeDescription = "Role Type";
              }

              return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + ';">' + roleTypeDescription + '</span>';
            }

    var dataGridOptions = {
        width: '100%',
        height: '100%',
        pageable: true,
        altrows: true,
        theme: 'metro',
        virtualmode: true,
        rendergridrows: function (params) {
                    return params.data;
                },
        columns: [
          { text: 'Role Id', datafield: 'roleId', width: '50%' },
          { text: 'Role Name', datafield: 'roleName', width: '50%' }
        ],
        groups: []
    }

    this.dataGrid = new DataGrid({
      source: source,
      onSearch: onSearch,
      onRowDoubleClick: function(data){
        var editRoleWindow = new EditRoleWindow({
          data: data,
          onSaveSuccess: function(){
            _this.dataGrid.refresh();
          }
        });
        editRoleWindow.render($('#dialogWindowContainer'));
        editRoleWindow.open();
      },
      dataGridOptions: dataGridOptions
    });

    var searchTextBox = new TextBox({placeHolder: 'Role Name', width: 250, height: 24});
    var searchButton = new Button({
      imgSrc:'/arlhb_assets/images/search.png',
      theme: 'metro',
      width: 30,
      height: 26,
      onClick: function(){
        _this.dataGrid.refresh();
      }
    });

    var addRoleButton = new Button({
      title:'Add Role',
      template: 'primary',
      height: 26,
      onClick: function(){
        var addRoleWindow = new AddRoleWindow({
          onSaveSuccess: function(){
            _this.dataGrid.refresh();
          }
        });
        addRoleWindow.render($('#dialogWindowContainer'));
        addRoleWindow.open();
      }
    });

    var table = $('<table style="height: 100%; width: 100%; margin: -3px; "></table>');
    var tr = $('<tr></tr>');
    var td = $('<td style="padding: 0; height: 40px;"></td>');
    table.appendTo(container);
    tr.appendTo(table);
    td.appendTo(tr);

    var innerTable = $('<table style="height: 100%; width: 100%;"></table>');
    var innerTr = $('<tr></tr>');
    var innerTd = $('<td style="padding-top: 6px; padding-left: 10px; padding-right: 8px; width: 50px; height: 100%;"></td>');
    innerTable.appendTo(td);
    innerTr.appendTo(innerTable);
    innerTd.appendTo(innerTr);
    addRoleButton.render(innerTd);

    innerTd = $('<td style="padding-top: 6px; width: 200px; height: 100%;"></td>');
    innerTd.appendTo(innerTr);
    searchTextBox.render(innerTd);

    innerTd = $('<td style="padding-top: 6px; height: 100%; "></td>');
    var _tempContainer = $('<div style="margin-left: -5px;"></div>')
    _tempContainer.appendTo(innerTd);
    innerTd.appendTo(innerTr);
    searchButton.render(_tempContainer);

    tr = $('<tr></tr>');
    td = $('<td style="padding: 0;"></td>');
    tr.appendTo(table);
    td.appendTo(tr);

    this.dataGrid.render(td);

  }
}
