import Button from './Button';
import ModalWindow from './ModalWindow';
import Label from './Label';

export default class ViewWindow extends ModalWindow{

  constructor(options) {
    super(options);

    if(options.content){
      this.content = options.content;
    }else{
      this.content = new Label({text: 'No Content'});
    }

    var title = options.saveButtonTitle? options.saveButtonTitle : 'OK';

    this.saveButton = new Button({
      title: title,
      onClick: function(){
        if(options.onSave){
          options.onSave();
        }
      },
      jqxOptions:{
        width: 90,
        theme: 'light',
        template: 'primary',
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
    var innerTd = $('<td style="width: 30%;"></td>');
    innerTable.appendTo(td);
    innerTr.appendTo(innerTable);
    innerTd.appendTo(innerTr);

    innerTd = $('<td style="width: 40%; text-align: center;"></td>');
    innerTd.appendTo(innerTr);
    this.saveButton.render(innerTd);

    innerTd = $('<td style="width: 30%;"></td>');
    innerTd.appendTo(innerTr);

  }
}
