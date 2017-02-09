import Component from "./Component";

export default class DataGrid extends Component{

  constructor(options) {
    super(options);

    var _this = this;

    this.source = options.source;
    this.onSearch = options.onSearch;
    this.onRowDoubleClick = options.onRowDoubleClick;

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
    this.jqxOptions['altrows'] = true;
    this.jqxOptions['columnsresize'] = true;
    this.jqxOptions['pagesizeoptions'] = ['20', '50', '100'];
    this.jqxOptions['pagesize'] = '20';
  }

  render(container) {
    var _this = this;

    var dataGridContainer = $('<div style="width: 100%; height: 100%"></div>');
    dataGridContainer.appendTo(container);
    dataGridContainer.jqxGrid(this.jqxOptions);

    if(this.onRowDoubleClick){
      dataGridContainer.on('rowdoubleclick', function (event){
        var args = event.args;
        var rowIndex = args.rowindex;
        var data = dataGridContainer.jqxGrid('getrowdata', rowIndex);
        _this.onRowDoubleClick(data);
      });
    }

    this.dataGridContainer = dataGridContainer;
  }

  refresh(){
    this.dataGridContainer.jqxGrid('gotopage', 0);
    this.dataGridContainer.jqxGrid('updatebounddata');
  }

  addGroup(groupName){
    this.dataGridContainer.jqxGrid('addgroup', groupName);
  }
}
