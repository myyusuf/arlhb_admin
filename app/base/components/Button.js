import { guid } from '../Utils';

export default class Button {

  constructor(options) {
    this.id = guid();
    this.onClick = options.onClick;
    this.jqxOptions = options.jqxOptions;

    if(options.title){
      this.title = options.title;
    }else{
      this.title = '';
    }

  }

  render(container) {
    var _this = this;

    var buttonContainer = $('<input type="button" />');
    buttonContainer.attr('id', this.id);
    buttonContainer.attr('value', this.title);
    buttonContainer.appendTo(container);

    buttonContainer.jqxButton(buttonOptions);

    if(this.onClick){
      $('#' + this.id).on('click', function () {
        _this.onClick();
      });
    }

  }
}
