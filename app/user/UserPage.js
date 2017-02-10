import Component from '../base/components/Component';
import Button from '../base/components/Button';
import SearchText from '../main/components/SearchText';
import UserList from './UserList';
import EditUserWindow from './EditUserWindow';
import UserBlockWindow from './UserBlockWindow';

export default class UserPage extends Component{

  constructor(options) {
    super(options);

    var _this = this;

    if(options.title){
      this.title = option.title;
    }else{
      this.title = "User Management";
    }

    var onEditButtonClick = function(value){
      var editUserWindow = new EditUserWindow({
        data: value,
        onSaveSuccess: function(){
          _this.dataGrid.refresh();
        }
      });
      editUserWindow.render($('#dialogWindowContainer'));
      editUserWindow.open();
    }

    var onBlockButtonClick = function(value){
      var userBlockWindow = new UserBlockWindow({
        data: value,
        onSaveSuccess: function(){
          _this.dataGrid.refresh();
        }
      });
      userBlockWindow.render($('#dialogWindowContainer'));
      userBlockWindow.open();
    }

    this.userList = new UserList({
      onEditButtonClick: onEditButtonClick,
      onBlockButtonClick: onBlockButtonClick
    });

    this.searchText = new SearchText({
      placeHolder: 'User Name',
      onSearch: function(value){
        _this.roleList.filter(value);
      }
    });
  }

  render(container) {

    var _this = this;

    var table = $('<table style="height: 100%; width: 100%; "></table>');
    var tr = $('<tr></tr>');
    var td = $('<td colspan="1" style="padding: 10px; padding-bottom: 5px; height: 20px; "></td>');
    table.appendTo(container);
    tr.appendTo(table);
    td.appendTo(tr);
    td.html('<span class="page-title">' +
    this.title +
    '</span>');

    tr = $('<tr></tr>');
    td = $('<td style="padding-left: 7px; height: 20px; width: 30px;"></td>');
    tr.appendTo(table);
    td.appendTo(tr);
    this.searchText.render(td);

    tr = $('<tr></tr>');
    td = $('<td colspan="1" style=""></td>');
    tr.appendTo(table);
    td.appendTo(tr);

    this.userList.render(td);
  }
}
