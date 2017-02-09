import { getMenuData } from './app/base/ApplicationData';
import MainMenu from "./app/main/components/MainMenu";
import RolePage from "./app/user/RolePage";

var rolePage = new RolePage({});
var mainMenu = new MainMenu({
  onClick: function(e){
    rolePage.render($('#content'));
  }
});

mainMenu.render($('#top-menu'));
