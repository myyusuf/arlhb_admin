import Component from '../base/components/Component';
import Button from '../base/components/Button';
import SearchText from '../main/components/SearchText';
import RoleList from './RoleList';
import AddRoleWindow from './AddRoleWindow';
import EditRoleWindow from './EditRoleWindow';

export default class RolePage extends Component{

  constructor(options) {
    super(options);

    var _this = this;

    if(options.title){
      this.title = option.title;
    }else{
      this.title = "Role Management";
    }

    var onEditButtonClick = function(value){
      var editRoleWindow = new EditRoleWindow({
        data: value,
        onSaveSuccess: function(){
          _this.roleList.refresh();
        }
      });
      editRoleWindow.render($('#dialogWindowContainer'));
      editRoleWindow.open();
    }

    this.roleList = new RoleList({
      onEditButtonClick: onEditButtonClick
    });

    this.addRoleButton = new Button({
      title:'Add Role',
      height: 26,
      onClick: function(e){
        var addRoleWindow = new AddRoleWindow({
          onSaveSuccess: function(){
            _this.roleList.refresh();
          }
        });
        addRoleWindow.render($('#dialogWindowContainer'));
        addRoleWindow.open();
      },
      jqxOptions:{
        theme: 'light',
        template: 'primary',
      }
    });

    this.searchText = new SearchText({
      placeHolder: 'Role Name',
      onSearch: function(value){
        _this.roleList.filter(value);
      }
    });
  }

  render(container) {

    var _this = this;

    var table = $('<table style="height: 100%; width: 100%; "></table>');
    var tr = $('<tr></tr>');
    var td = $('<td colspan="2" style="padding: 10px; padding-bottom: 5px; height: 20px; "></td>');
    table.appendTo(container);
    tr.appendTo(table);
    td.appendTo(tr);
    td.html('<span class="page-title">' +
    this.title +
    '</span>');

    tr = $('<tr></tr>');
    td = $('<td style="padding-left: 10px; height: 20px; width: 30px;"></td>');
    tr.appendTo(table);
    td.appendTo(tr);
    this.addRoleButton.render(td);

    td = $('<td style=""></td>');
    td.appendTo(tr);
    this.searchText.render(td);

    tr = $('<tr></tr>');
    td = $('<td colspan="2" style=""></td>');
    tr.appendTo(table);
    td.appendTo(tr);

    this.roleList.render(td);
  }
}
