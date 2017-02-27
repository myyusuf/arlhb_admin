import { getMenuData } from './app/base/ApplicationData';
import MainMenu from "./app/main/components/MainMenu";
import RolePage from "./app/user/RolePage";
import UserPage from "./app/user/UserPage";
import CustomerPage from "./app/customer/CustomerPage";
import ActiveSessionPage from "./app/user/ActiveSessionPage";

var rolePage = new RolePage({});
var userPage = new UserPage({});
var activeSessionPaga = new ActiveSessionPage({});
var customerPage = new CustomerPage({});

var mainMenu = new MainMenu({
  onClick: function(e){
    $('#content').empty();
    if(e == 58){
      rolePage.render($('#content'));
    }else if(e == 59){
      userPage.render($('#content'));
    }else if(e == 51){
      activeSessionPaga.render($('#content'));
    }else if(e == 542){
      customerPage.render($('#content'));
    }

  }
});

mainMenu.render($('#top-menu'));
