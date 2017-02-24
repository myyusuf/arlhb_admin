import Component from '../../base/components/Component';
import CheckBoxTree from '../../base/components/CheckBoxTree';

export default class AuthoritiesTree extends Component{

  constructor(options) {
    super(options);
    var _this = this;

    this.data = [];

    this.checkBoxTree = new CheckBoxTree({
      data: this.data,
      jqxOptions:{
        height: 230,
        width: 275
      }
    });

  }

  render(container) {
    this.checkBoxTree.render(container);
    this.loadAuthorities();
  }

  loadAuthorities(){
    var _this = this;

    var url = "/user/authorities";
    $.ajax({
      method: "GET",
      url: url,
      data: {}
    }).done(function(data) {
        var _convertedToHierarchical = _this._convertArray(data);
        _this.checkBoxTree.refreshData(_convertedToHierarchical);
    }).fail(function() {
      var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
      $("#errorNotification").html('<div>' + errorMessage + '</div>');
      $("#errorNotification").jqxNotification("open");
    });

  }

  _convertArray(array){

    var map = {};
    for(var i = 0; i < array.length; i++){
        var obj = array[i];
        obj.items= [];

        map[obj.id] = obj;

        var parent = obj.parentId || '-';
        if(!map[parent]){
            map[parent] = {
                items: []
            };
        }
        map[parent].items.push(obj);
    }
    return map['-'].items;
  }

  getValue(){
    return this.checkBoxTree.getValue();
  }

}
