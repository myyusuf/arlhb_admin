import { guid } from '../Utils';

export default class Component {

  constructor(options) {
    this.id = guid();
    this.theme = 'metro';

    if(options.jqxOptions){
      this.jqxOptions = options.jqxOptions;
    }else{
      this.jqxOptions = {};
    }

    this.jqxOptions['theme'] = this.theme;

  }

  render(container) {}
}
