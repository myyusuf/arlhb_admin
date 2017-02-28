import Component from '../base/components/Component';
import Button from '../base/components/Button';
import SearchText from '../main/components/SearchText';
import LocationList from './LocationList';
import AddLocationWindow from './AddLocationWindow';
import EditLocationWindow from './EditLocationWindow';

export default class LocationPage extends Component{

  constructor(options) {
    super(options);

    var _this = this;

    if(options.title){
      this.title = option.title;
    }else{
      this.title = "Location Management";
    }

    var onEditButtonClick = function(value){
      var editLocationWindow = new EditLocationWindow({
        data: value,
        onSaveSuccess: function(){
          _this.locationList.refresh();
        }
      });
      editLocationWindow.render($('#dialogWindowContainer'));
      editLocationWindow.open();
    }

    this.locationList = new LocationList({
      onEditButtonClick: onEditButtonClick
    });

    this.addLocationButton = new Button({
      title:'Add Location',
      height: 26,
      onClick: function(e){
        var addLocationWindow = new AddLocationWindow({
          onSaveSuccess: function(){
            _this.locationList.refresh();
          }
        });
        addLocationWindow.render($('#dialogWindowContainer'));
        addLocationWindow.open();
      },
      jqxOptions:{
        theme: 'light',
        template: 'primary',
      }
    });

    this.searchText = new SearchText({
      placeHolder: 'Location Name',
      onSearch: function(value){
        _this.locationList.filter(value);
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
    this.addLocationButton.render(td);

    td = $('<td style=""></td>');
    td.appendTo(tr);
    this.searchText.render(td);

    tr = $('<tr></tr>');
    td = $('<td colspan="2" style=""></td>');
    tr.appendTo(table);
    td.appendTo(tr);

    this.locationList.render(td);
  }
}
