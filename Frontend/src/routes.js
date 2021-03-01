import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
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
        {/* <PrivateRoute path="/profileedit" exact component={ProfileEdit} /> */}



        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        //ADMIN 
        <Route path="/loc" exact component={SignupLoc} />
        
        <Route path="/admin" exact component={AdminHome} />
        <AdminShajiRoute path="/admin/shaji/dashboard" exact component={AdminShajiDash} />
        <AdminShajiRoute path="/admin/shaji/dashboard/menu" exact component={AdminShajiDashMenu}/>
        <AdminShajiRoute path="/admin/shaji/dashboard/orders" exact component={AdminShajiDashOrders}/>

        <AdminShajiRoute path="/admin/shaji/dashboard/menu/create" exact component={AdminShajiDashMenuCreate}/>
        <AdminShajiRoute path="/admin/shaji/dashboard/category/create" exact component={AdminShajiDashCategoryCreate}/>
        <AdminShajiRoute path="/admin/shaji/dashboard/category/show" exact component={AdminShajiDashCategoryShow}/>
        <AdminShajiRoute path="/admin/shaji/dashboard/category/edit/:cateId" exact component={AdminShajiDashCategoryEdit}/>
        <AdminShajiRoute path="/admin/shaji/dashboard/product/show" exact component={AdminShajiDashProductEdit}/>

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
        <AdminShajiRoute path="/admin/shaji/dashboard/orders/takeorder/:userId" exact component={AdminShajiOrderTakeOrder}/>
        <AdminShajiRoute path="/admin/shaji/dashboard/orders/orderout/:orderId/delivery" exact component={AdminShajiDashOrderOutDelivery}/>



        //Fleets Delivery Controls
        <AdminShajiRoute path="/admin/shaji/dashboard/fleets/addfleets" exact component={AddFleets}/>
        <AdminShajiRoute path="/admin/shaji/dashboard/fleets/editfleets" exact component={EditFleets}/>

        //Edit Fleets
        <AdminShajiRoute path="/admin/shaji/dashboard/fleets/editfleets/:fleetId" exact component={EditFleetsData}/>


      </Switch>
    </BrowserRouter>
  );
};


export default routes;
