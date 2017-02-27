import Component from "./Component";

export default class TreeGrid extends Component{

  constructor(options) {
    super(options);

    var _this = this;

    this.source = options.source;
    this.onSearch = options.onSearch;

    var dataAdapter = new $.jqx.dataAdapter(this.source, {
      formatData: function(data) {
        if(_this.onSearch){
          return _this.onSearch(data);
        }else{
          return data;
        }
      },
      downloadComplete: function(data, status, xhr) {
          if (!_this.source.totalRecords) {
              _this.source.totalRecords = data.totalRecords;
          }
      },

    });

    this.jqxOptions['source'] = dataAdapter;
    // this.jqxOptions['pageable'] = true;
    this.jqxOptions['columnsResize'] = true;
  }

  render(container) {

    var _this = this;

    var treeContainer = $('<div></div>');
    treeContainer.appendTo(container);

    treeContainer.jqxTreeGrid(this.jqxOptions);

    // treeContainer.on('itemClick',function (event)
    // {
    //     var args = event.args;
    //     var item = treeContainer.jqxTree('getItem', args.element);
    //     if(_this.onClick){
    //       _this.onClick(item);
    //     }
    // });

    this.treeContainer = treeContainer;
  }

  refresh(){
    console.log('treegrid updateBoundData');
    this.treeContainer.jqxTreeGrid('updateBoundData');
  }

}
