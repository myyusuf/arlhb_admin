import Button from '../base/components/Button';
import Form from '../base/components/Form';
import ViewWindow from '../base/components/ViewWindow';
import Component from '../base/components/Component';
import UserViewForm from './UserViewForm';

export default class ViewUserWindow extends Component{

  constructor(options) {
    super(options);
    var _this = this;

    var userViewForm = new UserViewForm({
      data: options.data
    });

    var jqxOptions = {
      width: 380,
      height: 330,
    };

    this.window = new ViewWindow({
      title: 'View User',
      content: userViewForm,
      onSave: function(){
        _this.window.close();
      },
      jqxOptions: jqxOptions
    });

  }

  render(container) {
    var _this = this;
    this.window.render(container);
  }

  open(){
    this.window.open();
  }
}
