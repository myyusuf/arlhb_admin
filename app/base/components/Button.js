import Component from "./Component";

export default class Button extends Component{

  constructor(options) {
    super(options);
    this.onClick = options.onClick;

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

    buttonContainer.jqxButton(this.jqxOptions);

    if(this.onClick){
      $('#' + this.id).on('click', function () {
        _this.onClick();
      });
    }

  }
}
