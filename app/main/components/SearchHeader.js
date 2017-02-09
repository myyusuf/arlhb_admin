import Button from '../../base/components/Button';
import TextBox from '../../base/components/TextBox';
import Component from "../../base/components/Component";

export default class SearchHeader extends Component{

  constructor(options) {
    super(options);

    var jqxOptions = {placeHolder: 'Role Name', width: 250, height: 24}
    this.searchTextBox = new TextBox({
      jqxOptions: jqxOptions
    });

    var jqxOptions = {
      imgSrc:'/arlhb_assets/images/search.png',
      width: 30,
      height: 26
    };
    this.searchButton = new Button({
      jqxOptions: jqxOptions,
      onClick: function(){
        if(options.onSearchButtonClick){
          options.onSearchButtonClick(e);
        }
      }
    });

    this.addRoleButton = new Button({
      title:'Add Role',
      template: 'primary',
      height: 26,
      onClick: function(e){
        if(options.onAddButtonClick){
          options.onAddButtonClick(e);
        }
      }
    });

  }

  render(container) {

    var innerTable = $('<table style="height: 100%; width: 100%;"></table>');
    var innerTr = $('<tr></tr>');
    var innerTd = $('<td style="padding-top: 6px; padding-left: 10px; padding-right: 8px; width: 50px; height: 100%;"></td>');
    innerTable.appendTo(container);
    innerTr.appendTo(innerTable);
    innerTd.appendTo(innerTr);
    this.addRoleButton.render(innerTd);

    innerTd = $('<td style="padding-top: 6px; width: 200px; height: 100%;"></td>');
    innerTd.appendTo(innerTr);
    this.searchTextBox.render(innerTd);

    innerTd = $('<td style="padding-top: 6px; height: 100%; "></td>');
    var _tempContainer = $('<div style="margin-left: -5px;"></div>')
    _tempContainer.appendTo(innerTd);
    innerTd.appendTo(innerTr);
    this.searchButton.render(_tempContainer);

  }
}
