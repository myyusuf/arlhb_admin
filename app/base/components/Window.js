import Button from './Button';
import Component from './Component';

export default class Window extends Component{

  constructor(options) {
    super(options);

    if(options.title){
      this.title = options.title;
    }else{
      this.title = '';
    }

  }

  appendWindowContentChild(windowContent){}

  render(container) {

    var _this = this;

    var windowContainer = $('<div></div>');
    windowContainer.appendTo(container);

    windowContainer.attr('id', this.id);

    var windowTitle = $('<div>' + this.title + '</div>');
    windowTitle.appendTo(windowContainer);

    var windowContent = $('<div></div>');
    windowContent.appendTo(windowContainer);

    this.appendWindowContentChild(windowContent)

    windowContainer.jqxWindow(this.jqxOptions);

    windowContainer.on('close', function (event) {
      windowContainer.jqxWindow('destroy');
    });

    this.windowContainer = windowContainer;

  }

  getId(){
    return this.id;
  }

  open(){
    this.windowContainer.jqxWindow('open');
  }

  close(){
    this.windowContainer.jqxWindow('close');
  }

  destroy(){
    this.windowContainer.jqxWindow('destroy');
  }
}
