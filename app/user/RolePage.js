import Component from '../base/components/Component';
import SearchHeader from '../main/components/SearchHeader';
import RoleList from './RoleList';
import AddRoleWindow from './AddRoleWindow';
import EditRoleWindow from './EditRoleWindow';

export default class RolePage extends Component{

  constructor(options) {
    super(options);

    var onEditButtonClick = function(value){
      var editRoleWindow = new EditRoleWindow({
        data: value,
        onSaveSuccess: function(){
          _this.dataGrid.refresh();
        }
      });
      editRoleWindow.render($('#dialogWindowContainer'));
      editRoleWindow.open();
    }

    this.roleList = new RoleList({
      onEditButtonClick: onEditButtonClick
    });
  }

  render(container) {

    var _this = this;

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

    this.roleList.render(td);
  }
}
