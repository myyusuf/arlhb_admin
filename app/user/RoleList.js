import { guid } from '../base/Utils';
import Button from '../base/components/Button';
import TextBox from '../base/components/TextBox';
import DataGrid from '../base/components/DataGrid';
import Label from '../base/components/Label';
import SearchHeader from '../main/components/SearchHeader';
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
          { name: 'description', type: 'string' },
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

    var jqxOptions = {
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
          { text: 'Role Id', datafield: 'roleId', width: '30%' },
          { text: 'Role Name', datafield: 'roleName', width: '30%' },
          { text: 'Description', datafield: 'description', width: '40%' }
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
      jqxOptions: jqxOptions
    });

    var searchTextBox = new TextBox({placeHolder: 'Role Name', width: 250, height: 24});

    var jqxOptions = {
      imgSrc:'/arlhb_assets/images/search.png',
      width: 30,
      height: 26
    };
    var searchButton = new Button({
      jqxOptions: jqxOptions,
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

    var pageTitleLabel = new Label({
      text: 'Role'
    });

    var searchHeader = new SearchHeader({
      onAddButtonClick: function(e){
        var addRoleWindow = new AddRoleWindow({
          onSaveSuccess: function(){
            _this.dataGrid.refresh();
          }
        });
        addRoleWindow.render($('#dialogWindowContainer'));
        addRoleWindow.open();
      }
    });

    var table = $('<table style="height: 100%; width: 100%; "></table>');
    var tr = $('<tr></tr>');
    var td = $('<td style="padding: 0; height: 40px;"></td>');
    table.appendTo(container);
    tr.appendTo(table);
    td.appendTo(tr);

    searchHeader.render(td);

    tr = $('<tr></tr>');
    td = $('<td style="padding: 0;"></td>');
    tr.appendTo(table);
    td.appendTo(tr);

    this.dataGrid.render(td);

  }
}
