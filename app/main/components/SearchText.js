import Button from '../../base/components/Button';
import TextBox from '../../base/components/TextBox';
import Component from "../../base/components/Component";

export default class SearchText extends Component{

  constructor(options) {
    super(options);

    var _this = this;

    this.searchTextBox = new TextBox({
      jqxOptions: {placeHolder: options.placeHolder, width: 250, height: 24}
    });

    var jqxOptions = {
      imgSrc:'/arlhb_assets/images/search.png',
      width: 30,
      height: 26
    };
    this.searchButton = new Button({
      jqxOptions: jqxOptions,
      onClick: function(){
        if(options.onSearch){
          options.onSearch(_this.searchTextBox.getValue());
        }
      }
    });

  }

  render(container) {

    var innerTable = $('<table style="height: 100%; width: 100%;"></table>');
    var innerTr = $('<tr></tr>');
    var innerTd = $('<td style="width: 50px; height: 100%;"></td>');
    innerTable.appendTo(container);
    innerTr.appendTo(innerTable);
    innerTd.appendTo(innerTr);
    this.searchTextBox.render(innerTd);

    innerTd = $('<td style="height: 100%; "></td>');
    var _tempContainer = $('<div style="margin-left: -5px;"></div>')
    _tempContainer.appendTo(innerTd);
    innerTd.appendTo(innerTr);
    this.searchButton.render(_tempContainer);

  }
}
