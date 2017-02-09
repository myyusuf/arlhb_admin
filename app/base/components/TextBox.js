import Component from "./Component";

export default class TextBox extends Component{

  constructor(options) {
    super(options)

    if(options.title){
      this.title = options.title;
    }else{
      this.title = 'Button';
    }
    
    this.initialValue = options.value;
  }

  render(container) {
    var textBoxContainer = $('<input type="text" />');
    textBoxContainer.attr('id', this.id);
    textBoxContainer.appendTo(container);

    textBoxContainer.jqxInput(this.jqxOptions);

    if(this.initialValue){
      textBoxContainer.val(this.initialValue);
    }

    this.component = textBoxContainer;
  }

  getId(){
    return this.id;
  }

  getValue(){
    if(this.component){
      return this.component.val();
    }else{
      return this.initialValue;
    }

  }
}
