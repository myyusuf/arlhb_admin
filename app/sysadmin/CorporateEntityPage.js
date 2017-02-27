import Component from '../base/components/Component';
import Button from '../base/components/Button';
import SearchText from '../main/components/SearchText';
import CorporateEntityList from './CorporateEntityList';

export default class CorporateEntityPage extends Component{

  constructor(options) {
    super(options);

    var _this = this;

    if(options.title){
      this.title = option.title;
    }else{
      this.title = "Corporate Entities";
    }

    this.corporateEntityList = new CorporateEntityList({
    });

    this.searchText = new SearchText({
      placeHolder: 'Name',
      onSearch: function(value){
        _this.corporateEntityList.filter(value);
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

    // tr = $('<tr></tr>');
    // td = $('<td style="padding-left: 8px; height: 20px; width: 30px;"></td>');
    // tr.appendTo(table);
    // td.appendTo(tr);
    // this.searchText.render(td);

    tr = $('<tr></tr>');
    td = $('<td colspan="2" style=""></td>');
    tr.appendTo(table);
    td.appendTo(tr);

    this.corporateEntityList.render(td);
  }
}
