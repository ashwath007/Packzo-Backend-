import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import Home from "./core/Home";
// import Signup from "./user/Signup";
// import Signin from "./user/Signin";
// import AdminRoute from "./auth/helper/AdminRoutes";
// import PrivateRoute from "./auth/helper/PrivateRoutes";
// import UserDashBoard from "./user/UserDashBoard";
// import AdminDashBoard from "./user/AdminDashBoard";
// import AddCategory from "./admin/AddCategory";
// import ManageCategories from "./admin/ManageCategories";
// import AddProduct from "./admin/AddProduct";
// import ManageProducts from "./admin/ManageProducts";
// import UpdateProduct from "./admin/UpdateProduct";
// import Cart from "./core/Cart";
// import AdminHome from "./user/AdminHome";
// import CreateAdmin from "./admin/CreateAdmin";

// import AddFleets from "./user/AdminMenus/Fleets/AddFleets" 
// import EditFleets from "./user/AdminMenus/Fleets/EditFleets" 

// import AdminShajiRoute from "./auth/helper/AdminShajiRoutes";
// import AdminShajiDashMenu from "./user/AdminMenus/AdminShajiDashMenu";
// import AdminShajiDashOrders from "./user/AdminMenus/AdminShajiDashOrders";
// import AdminShajiDashMenuCreate from "./user/AdminMenus/AdminShajiDashMenuCreate";
// import AdminShajiDashCategoryCreate from "./user/AdminMenus/AdminShajiDashCategoryCreate";
// import AdminShajiDashCategoryShow from "./user/AdminMenus/AdminShajiDashCategoryShow";
// import AdminShajiDashCategoryEdit from "./user/AdminMenus/AdminShajiDashCategoryEdit";
// import AdminShajiDashProductEdit from "./user/AdminMenus/AdminShajiDashProductEdit";
// import AdminShajiDash from "./user/AdminMenus/AdminShajiDash";
// import Verification from "./user/Verification";
// import Purchase from "./core/Purchase";
// import Bill from "./core/Bill";
// import Cod from "./core/Cod";
// import Order from "./core/Order";
// import Profile from "./core/Profile";
// // import ProfileEdit from "./core/ProfileEdit";
// import AdminShajiDashOrderOutDelivery from "./user/AdminMenus/AdminShajiDashOrderOutDelivery"
// import AdminShajiOrderTakeOrder from "./user/AdminMenus/AdminShajiOrderTakeOrder";
// import SignupLoc from "./user/SignupLoc"
// import Fleetsignin from "./user/FleetsMenu/Fleetsignin"
// import FleetHome from "./user/FleetsMenu/FleetHome"
// import EditFleetsData from "./user/AdminMenus/Fleets/EditFleetsData"




import AdminHome from "./user/AdminHome";
import AdminDash from "./admin/AdminDash"; //Need to design Admin Dash
import CreateStore from "./admin/CreateStore";
import CreateAdmin from "./admin/CreateAdmin";
import CreateProduct from './admin/CreateProduct';
import UpdataProduct from './admin/UpdateProduct';

import AllStore from './admin/AllStore';
import AllProduct from './admin/AllProducts';

import StoreOption from "./admin/StoreOption";
import CreateCategory from "./admin/CreateCategory";
import AllCategory from "./admin/AllCategory";
import EditCategory from "./admin/EditCategory";





const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>


      <Route  path="/admin" exact component={AdminHome} />
      <Route path="/createAdmin" exact component={CreateAdmin} />

      {/* /admin/home */}
      <Route  path="/admin/packzo/dashboard" exact component={AdminDash} />
      <Route  path="/admin/packzo/CreateStore" exact component={CreateStore} />
      <Route  path="/admin/packzo/AllStore" exact component={AllStore} />
      <Route  path="/admin/:adminId/product/createingproduct/:storeId" exact component={CreateProduct} />
      {/* http://localhost:8000/api/admin/adminId/product/createproduct/storeId */}
      <Route  path="/admin/:adminId/product/allproduct/:storeId" exact component={AllProduct} />
      <Route  path="/admin/:adminId/product/updateproduct/:productId" exact component={UpdataProduct} />

      <Route  path="/admin/:adminId/createCategory" exact component={CreateCategory} />
      <Route  path="/admin/:adminId/allCategory" exact component={AllCategory} />
      <Route  path="/admin/:adminId/editCategory" exact component={EditCategory} />




      {/* /admin/adminId/product/createproduct/storeId */}
      <Route  path="/admin/:adminId/store/option/:storeId" exact component={StoreOption} />






































        {/* <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/cart" exact component={Cart} />
        //Fleets
        <Route path="/fleets" exact component={Fleetsignin} />
        <Route path="/fleets/allorders" exact component={FleetHome} />
        
        //
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <PrivateRoute path="/cart/purchase" exact component={Purchase} />
        <PrivateRoute path="/cart/bill" exact component={Bill} />
        <PrivateRoute path="/cart/bill/cod" exact component={Cod} />
        <PrivateRoute path="/order" exact component={Order} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/profileedit" exact component={ProfileEdit} /> */}

{/* 

        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        //ADMIN 
        <Route path="/loc" exact component={SignupLoc} />
        
        <Route path="/admin" exact component={AdminHome} />
        <Route path="/createAdmin" exact component={CreateAdmin} />

        <AdminRoute path="/admin/shaji/dashboard" exact component={AdminShajiDash} />
        <AdminRoute path="/admin/shaji/dashboard/menu" exact component={AdminShajiDashMenu}/>
        <AdminRoute path="/admin/shaji/dashboard/orders" exact component={AdminShajiDashOrders}/>

        <AdminRoute path="/admin/shaji/dashboard/menu/create" exact component={AdminShajiDashMenuCreate}/>
        <AdminRoute path="/admin/shaji/dashboard/category/create" exact component={AdminShajiDashCategoryCreate}/>
        <AdminRoute path="/admin/shaji/dashboard/category/show" exact component={AdminShajiDashCategoryShow}/>
        <AdminRoute path="/admin/shaji/dashboard/category/edit/:cateId" exact component={AdminShajiDashCategoryEdit}/>
        <AdminRoute path="/admin/shaji/dashboard/product/show" exact component={AdminShajiDashProductEdit}/>

        //USER
        <Route path="/verification/:uId" exact component={Verification} />


        //
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />

        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute path="/admin/shaji/dashboard/orders/takeorder/:userId" exact component={AdminShajiOrderTakeOrder}/>
        <AdminRoute path="/admin/shaji/dashboard/orders/orderout/:orderId/delivery" exact component={AdminShajiDashOrderOutDelivery}/>



        //Fleets Delivery Controls
        <AdminRoute path="/admin/shaji/dashboard/fleets/addfleets" exact component={AddFleets}/>
        <AdminRoute path="/admin/shaji/dashboard/fleets/editfleets" exact component={EditFleets}/>

        //Edit Fleets
        <AdminRoute path="/admin/shaji/dashboard/fleets/editfleets/:fleetId" exact component={EditFleetsData}/> */}


      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
