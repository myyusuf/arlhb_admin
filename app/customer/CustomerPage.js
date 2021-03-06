import Component from '../base/components/Component';
import Button from '../base/components/Button';
import SearchText from '../main/components/SearchText';
import CustomerList from './CustomerList';
import AddRoleWindow from '../user/AddRoleWindow';
import EditRoleWindow from '../user/EditRoleWindow';

export default class CustomerPage extends Component{

  constructor(options) {
    super(options);

    var _this = this;

    if(options.title){
      this.title = option.title;
    }else{
      this.title = "Customer Management";
    }

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

    this.customerList = new CustomerList({
      onEditButtonClick: onEditButtonClick
    });

    this.addRoleButton = new Button({
      title:'Add Role',
      height: 26,
      onClick: function(e){
        var addRoleWindow = new AddRoleWindow({
          onSaveSuccess: function(){
            _this.dataGrid.refresh();
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
      placeHolder: 'Customer Name',
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
    td = $('<td style="padding-left: 7px; height: 20px; width: 30px;"></td>');
    tr.appendTo(table);
    td.appendTo(tr);
    // this.addRoleButton.render(td);
    //
    // td = $('<td style=""></td>');
    // td.appendTo(tr);
    this.searchText.render(td);

    tr = $('<tr></tr>');
    td = $('<td colspan="2" style=""></td>');
    tr.appendTo(table);
    td.appendTo(tr);

    this.customerList.render(td);
  }
}
