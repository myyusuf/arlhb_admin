import { getMenuData } from './app/base/ApplicationData';
import NavigationBar from "./app/base/components/NavigationBar";
import Menu from "./app/base/components/Menu";
import Tabs from "./app/base/components/Tabs";
import Button from "./app/base/components/Button";
import RoleList from "./app/user/RoleList";

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

var roleList = new RoleList();
var menu = new Menu({
  data: menuData,
  onClick: function(e){

  }
});

menu.render($('#top-menu'));
