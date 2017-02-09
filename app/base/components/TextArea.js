import Component from "./Component";

export default class TextArea extends Component{

  constructor(options) {
    super(options);

    this.initialValue = options.value;
  }

  render(container) {
    var textAreaContainer = $('<textarea></textarea>');
    textAreaContainer.attr('id', this.id);
    textAreaContainer.appendTo(container);

    textAreaContainer.jqxInput(this.jqxOptions);

    if(this.initialValue){
      textAreaContainer.val(this.initialValue);
    }

    this.component = textAreaContainer;
  }

  getValue(){
    return this.component.val();
  }
}
