import { guid } from '../Utils';

export default class Component {

  constructor(options) {
    this.id = guid();
    this.theme = 'metro';

  }

  render(container) {

  }
}
