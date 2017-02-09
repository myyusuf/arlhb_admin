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

    var onEditButtonClick = function(value){
      // console.log("Value : " + value.bounddata);
      var editRoleWindow = new EditRoleWindow({
        data: value.bounddata,
        onSaveSuccess: function(){
          _this.dataGrid.refresh();
        }
      });
      editRoleWindow.render($('#dialogWindowContainer'));
      editRoleWindow.open();
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
                // $(htmlElement).append(button);
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
