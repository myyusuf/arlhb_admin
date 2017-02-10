import Form from "./Form";

export default class SingleRowForm extends Form{

  constructor(options) {
    super(options);

  }

  renderItems(container){
    var form = $('<form></form>');
    form.appendTo(container);
    var table = $('<table style="width: 100%;"></table>');
    table.appendTo(form);
    for(var i=0; i<this.items.length; i++){
      var tr = $('<tr></tr>');
      tr.appendTo(table);

      var td = $('<td></td>');
      td.appendTo(tr);
      td.css('padding-top', '5px');
      td.css('padding-bottom', '5px');
      if(this.labelColumnWidth){
        td.css('width', this.labelColumnWidth);
      }

      var label = $('<span>' + this.items[i].label +'</span>');
      label.appendTo(td);

      tr = $('<tr></tr>');
      tr.appendTo(table);
      td = $('<td></td>');
      td.appendTo(tr);
      td.css('padding-top', '3px');
      td.css('padding-bottom', '3px');
      if(this.contentColumnWidth){
        td.css('width', this.contentColumnWidth);
      }

      this.items[i].content.render(td);
    }

    this.form = form;

  }

}
