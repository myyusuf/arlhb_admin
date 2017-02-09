import Button from './Button';
import ModalWindow from './ModalWindow';
import Label from './Label';

export default class AddWindow extends ModalWindow{

  constructor(options) {
    super(options);

    if(options.content){
      this.content = options.content;
    }else{
      this.content = new Label({text: 'No Content'});
    }

    this.saveButton = new Button({
      title: 'Save',
      onClick: function(){
        if(options.onSave){
          options.onSave();
        }
      },
      jqxOptions:{
        theme: 'light',
        template: 'success',
      }
    });

    this.cancelButton = new Button({
      title: 'Cancel',
      onClick: function(){
        if(options.onCancel){
          options.onCancel();
        }
      },
      jqxOptions:{
        theme: 'light',
        template: 'default',
      }
    });

  }

  appendWindowContentChild(windowContent){
    var table = $('<table style="height: 100%; width: 100%;"></table>');
    var tr = $('<tr></tr>');
    var td = $('<td></td>');
    table.appendTo(windowContent);
    tr.appendTo(table);
    td.appendTo(tr);
    this.content.render(td);

    tr = $('<tr></tr>');
    td = $('<td></td>');
    tr.appendTo(table);
    td.appendTo(tr);

    var innerTable = $('<table style="height: 100%; width: 100%;"></table>');
    var innerTr = $('<tr></tr>');
    var innerTd = $('<td style="width: 90%;"></td>');
    innerTable.appendTo(td);
    innerTr.appendTo(innerTable);
    innerTd.appendTo(innerTr);

    innerTd = $('<td></td>');
    innerTd.appendTo(innerTr);
    this.cancelButton.render(innerTd);

    innerTd = $('<td></td>');
    innerTd.appendTo(innerTr);
    this.saveButton.render(innerTd);
  }
}
