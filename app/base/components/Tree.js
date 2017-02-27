import Component from "./Component";

export default class Tree extends Component{

  constructor(options) {
    super(options);
    this.data = options.data;
    this.onClick = options.onClick;
  }

  render(container) {

    var _this = this;

    var treeContainer = $('<div></div>');
    treeContainer.appendTo(container);

    this.jqxOptions['source'] = this.data;
    treeContainer.jqxTree(this.jqxOptions);

    treeContainer.on('itemClick',function (event)
    {
        var args = event.args;
        var item = treeContainer.jqxTree('getItem', args.element);
        if(_this.onClick){
          _this.onClick(item);
        }
    });

    this.treeContainer = treeContainer;
  }

  refresh(){
    this.treeContainer.jqxTree('refresh');
  }

  refreshData(data){
    this.treeContainer.jqxTree({source: data});
  }
}
