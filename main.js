import { getMenuData } from './app/base/ApplicationData';
import MainMenu from "./app/main/components/MainMenu";
import RoleList from "./app/user/RoleList";

var roleList = new RoleList();
var mainMenu = new MainMenu({
  onClick: function(e){
    roleList.render($('#content'));
  }
});

mainMenu.render($('#top-menu'));
