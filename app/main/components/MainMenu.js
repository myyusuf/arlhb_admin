import { guid } from '../../base/Utils';
import Menu from "../../base/components/Menu";
import Component from "../../base/components/Component";

export default class MainMenu extends Component{

  constructor(options) {
    super(options);

    var menuData = [
      {
          "id": "1",
          "text": "Home",
          "parentid": "-1",
          "subMenuWidth": '250px'
      },
      {
          "id": "2",
          "text": "Customer Payment",
          "parentid": "-1",
          "subMenuWidth": '250px'
      },
      {
          "id": "3",
          "text": "Customer Transaction",
          "parentid": "-1"
      },
      {
          "id": "4",
          "text": "Bank Transaction",
          "parentid": "-1"
      },
      {
          "id": "5",
          "text": "Administration",
          "parentid": "-1"
      },
      {
          "id": "51",
          "text": "Active Sessions",
          "parentid": "5"
      },
      {
          "id": "52",
          "text": "Corporate Entity",
          "parentid": "5"
      },
      {
          "id": "53",
          "text": "Country Zone",
          "parentid": "5"
      },
      {
          "id": "54",
          "text": "Customer",
          "parentid": "5"
      },
      {
          "id": "55",
          "text": "Holidays",
          "parentid": "5"
      },
      {
          "id": "56",
          "text": "Location",
          "parentid": "5"
      },
      {
          "id": "57",
          "text": "Operational Time",
          "parentid": "5"
      },
      {
          "id": "58",
          "text": "Role",
          "parentid": "5"
      },
      {
          "id": "59",
          "text": "User",
          "parentid": "5"
      },
      {
          "id": "6",
          "text": "Report",
          "parentid": "-1"
      }
    ];

    this.menu = new Menu({
      data: menuData,
      onClick: function(e){
        if(options.onClick){
          options.onClick(e);
        }
      },
      jqxOptions:{
        width: '100%',
        height: '100%'
      }
    });
  }

  render(container) {

    this.menu.render(container);

  }
}
