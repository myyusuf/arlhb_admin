import Button from './Button';
import Window from './Window';

export default class ModalWindow extends Window{

  constructor(options) {
    super(options);
    this.jqxOptions['isModal'] = true;
    this.jqxOptions['autoOpen'] = false;
  }

}
