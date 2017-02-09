import { guid } from '../Utils';

export default class Component {

  constructor(options) {
    this.id = guid();

    var defaultTheme = 'metro';

    if(options.jqxOptions){
      this.jqxOptions = options.jqxOptions;
    }else{
      this.jqxOptions = {};
    }

    if(this.jqxOptions.theme == undefined){
        this.jqxOptions['theme'] = defaultTheme;
    }

  }

  render(container) {}
}
