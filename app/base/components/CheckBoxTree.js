import Tree from './Tree';

export default class CheckBoxTree extends Tree{

  constructor(options) {
    super(options);

    this.jqxOptions['hasThreeStates'] = true;
    this.jqxOptions['checkboxes'] = true;
  }

  getValue(){
    var result = [];
    var items = this.treeContainer.jqxTree('getCheckedItems');
    for (var i=0; i<items.length; i++){
      result.push({
        id: items[i].id,
        label: items[i].label,
        checked: items[i].checked
      });
    }
    return result;
  }

}
