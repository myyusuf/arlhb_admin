import Tree from './Tree';

export default class CheckBoxTree extends Tree{

  constructor(options) {
    super(options);

    this.jqxOptions['hasThreeStates'] = true;
    this.jqxOptions['checkboxes'] = true;
  }

  getCheckedItems(){
    this.treeContainer.jqxTree('getCheckedItems');
  }

}
