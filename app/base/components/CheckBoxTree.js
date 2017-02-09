import Tree from './Tree';

export default class CheckBoxTree extends Tree{

  constructor(options) {
    super(options);

    this.jqxOptions['hasThreeStates'] = true;
    this.jqxOptions['checkboxes'] = true;
  }

  getValue(){
    return this.treeContainer.jqxTree('getCheckedItems');
  }

}
