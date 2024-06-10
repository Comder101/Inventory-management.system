// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { VscPreview } from "react-icons/vsc";
// import { GrAddCircle } from "react-icons/gr";
// import { MdDeliveryDining } from "react-icons/md";
// import MyNavitem from "./MyNavitem";
// import { Link, useNavigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import "./SideBar.css";

// const SideBar = ({ children }) => {
//   const navigate = useNavigate();

//   // return components
//   return (
//     <>
//       <div className="bg-white scrolling text-black">
//         <div className="main-container">
//           <motion.div
//             animate={{
//               width: "290px",
//               height: "h-screen",
//             }}
//             className={`sidebar pr-4`}
//           >
//             <div className="top_section">
//               <h2 className="py-8 px-6 w-full border-2 border-blue-500 font-bold rounded-sm text-center bg-tailtertiary3 text-black flex">
//                 ADMIN DASHBOARD
//               </h2>
//             </div>

//             {/* Home and Logout button */}
//             <div>
//               <div className="flex justify-center px-2 text-black font-bold">
//                 <button
//                   className=" bg-tailtertiary py-2 hover:bg-tailtertiary3 w-full rounded-sm"
//                   onClick={() => navigate("/dashboard/home")}
//                 >
//                   HOME
//                 </button>
//                 <button
//                   className="ml-2 py-2 bg-tailtertiary hover:bg-red-600 w-full rounded-sm"
//                   onClick={() => navigate("/")}
//                 >
//                   LOGOUT
//                 </button>
//               </div>
//             </div>

//             {/* routes */}
//             <section className="routes">

//               {/* Add Product Menu */}
//               <h2 className="border-2 border-black justify-center flex mx-1 py-2 bg-tailtertiary justify-center">
//                 Product Menu
//               </h2>

//               {/* Category */}
//               <div className="dropdown">
//                 <button
//                   className="btnclass btn-secondary dropdown-toggle"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Category
//                 </button>
//                 <ul class="dropdown-menu">
//                   <li>
//                     <Link class="dropdown-item" href="#">
//                       <MyNavitem
//                         path="/dashboard/addcategory"
//                         routename="Add Category"
//                         icon={<GrAddCircle />}
//                       />
//                     </Link>
//                   </li>
//                   <li>
//                     <Link class="dropdown-item" href="#">
//                       <MyNavitem
//                         path="/dashboard/editcategory"
//                         routename="Edit Category"
//                         icon={<GrAddCircle />}
//                       />
//                     </Link>
//                   </li>
//                 </ul>
//               </div>

//               {/* Subcategory */}
//               <div className="dropdown">
//                 <button
//                   className="btnclass btn-secondary dropdown-toggle"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Sub-Category
//                 </button>
//                 <ul class="dropdown-menu">
//                   <li>
//                     <Link class="dropdown-item" href="#">
//                       <MyNavitem
//                         path="/dashboard/addsubcategory"
//                         routename="Add SubCategory"
//                         icon={<GrAddCircle />}
//                       />
//                     </Link>
//                   </li>
//                   <li>
//                     <Link class="dropdown-item" href="#">
//                       <MyNavitem
//                         path="/dashboard/editsubcategory"
//                         routename="Edit SubCategory"
//                         icon={<GrAddCircle />}
//                       />
//                     </Link>
//                   </li>
//                 </ul>
//               </div>


//               {/* Brand */}
//               <div className="dropdown">
//                 <button
//                   className="btnclass btn-secondary dropdown-toggle"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Brand
//                 </button>
//                 <ul class="dropdown-menu">
//                   <li>
//                     <Link class="dropdown-item" href="#">
//                       <MyNavitem
//                         path="/dashboard/addbrand"
//                         routename="Add Brand"
//                         icon={<GrAddCircle />}
//                       />
//                     </Link>
//                   </li>
//                   <li>
//                     <Link class="dropdown-item" href="#">
//                       <MyNavitem
//                         path="/dashboard/editbrand"
//                         routename="Edit Brand"
//                         icon={<GrAddCircle />}
//                       />
//                     </Link>
//                   </li>
//                 </ul>
//               </div>



//               {/* UOM */}
//               <div className="dropdown">
//                 <button
//                   className="btnclass btn-secondary dropdown-toggle"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   UOM
//                 </button>
//                 <ul class="dropdown-menu">
//                   <li>
//                     <Link class="dropdown-item" href="#">
//                       <MyNavitem
//                         path="/dashboard/AddUom"
//                         routename="Add UOM"
//                         icon={<GrAddCircle />}
//                       />
//                     </Link>
//                   </li>
//                   <li>
//                     <Link class="dropdown-item" href="#">
//                       <MyNavitem
//                         path="/dashboard/EditUom"
//                         routename="Edit UOM"
//                         icon={<GrAddCircle />}
//                       />
//                     </Link>
//                   </li>
//                 </ul>
//               </div>


//               {/* Product */}
//               <MyNavitem
//                 path="/dashboard/addproduct"
//                 routename="Add Product"
//                 icon={<GrAddCircle />}
//               />

//               {/* <MyNavitem
//                 path="/dashboard/viewproducts"
//                 routename="View/Edit/Delete Products"
//                 icon={<VscPreview />}
//               /> */}


//               {/* ADD ROLE MENU */}
//               <h2 className="border-2 border-black justify-center flex  mx-1 py-2 bg-tailtertiary justify-center">
//                 Add Role Menu
//               </h2>

//               {/* Delivery Agent */}
//               <MyNavitem
//                 path="/dashboard/adddeliveryagent"
//                 routename="Delivery Agent"
//                 icon={<GrAddCircle />}
//               />
//               {/* Inventory Manager */}
//               <MyNavitem
//                 path="/dashboard/addinventorymanager"
//                 routename="Inventory Manager"
//                 icon={<GrAddCircle />}
//               />

//               {/* Vendor */}
//               <MyNavitem
//                 path="/dashboard/addvendor"
//                 routename="Vendor"
//                 icon={<GrAddCircle />}
//               />


//               {/* Finance Manager */}
//               <MyNavitem
//                 path="/dashboard/addfinancemanager"
//                 routename="Finance Manager"
//                 icon={<GrAddCircle />}
//               />

//               {/* Customer */}
//               <MyNavitem
//                 path="/dashboard/addcustomer"
//                 routename="Customer"
//                 icon={<GrAddCircle />}
//               />




//               <h2 className="border-2 border-black justify-center flex  mx-1 py-2 bg-tailtertiary justify-center">
//                 View Edit Delete Menu
//               </h2>
//               <MyNavitem
//                 path="/dashboard/viewproducts"
//                 routename="Products"
//                 icon={<VscPreview />}
//               />
//               <MyNavitem
//                 path="/dashboard/viewdeliveryagents"
//                 routename="Delivery Agents"
//                 icon={<VscPreview />}
//               />
//               <MyNavitem
//                 path="/dashboard/viewinventorymanagers"
//                 routename="Inventory Managers"
//                 icon={<VscPreview />}
//               />
//               <MyNavitem
//                 path="/dashboard/viewvendors"
//                 routename="Vendors"
//                 icon={<VscPreview />}
//               />
//               <MyNavitem
//                 path="/dashboard/viewfinancemanagers"
//                 routename="Finance Managers"
//                 icon={<VscPreview />}
//               />
//               <MyNavitem
//                 path="/dashboard/viewcustomers"
//                 routename="Customers"
//                 icon={<VscPreview />}
//                 className=""
//               />
//             </section>
//           </motion.div>

//           <main>{children}</main>
//         </div>
//       </div>
//       <Outlet />
//     </>
//   );
// };

// export default SideBar;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { VscPreview } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ children }) => {
  const navigate = useNavigate();
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [viewMenuOpen, setViewMenuOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <motion.div
          animate={{ width: "290px" }}
          className="bg-white shadow-lg"
        >
          <div className="flex flex-col h-screen p-4 space-y-4">
            <div className="text-center">
              <h2 className="py-4 px-6 w-full border border-blue-500 font-bold rounded-sm bg-blue-100 text-blue-700">
                ADMIN DASHBOARD
              </h2>
            </div>

            <div className="flex justify-center space-x-2">
              <button
                className="flex-1 bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600"
                onClick={() => navigate("/dashboard/home")}
              >
                HOME
              </button>
              <button
                className="flex-1 bg-red-500 text-white py-2 rounded-sm hover:bg-red-600"
                onClick={() => navigate("/")}
              >
                LOGOUT
              </button>
            </div>

            <div className="space-y-4">
              <button
                className="w-full py-2 bg-gray-200 text-gray-700 font-semibold rounded flex justify-between items-center"
                onClick={() => setProductMenuOpen(!productMenuOpen)}
              >
                <span className="flex-1 text-center">Product Menu</span>
                <span>{productMenuOpen ? "▲" : "▼"}</span>
              </button>
              {productMenuOpen && (
                <div className="space-y-2">
                  <div className="dropdown">
                    <button className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Category
                    </button>
                    <ul className="dropdown-menu mt-2 w-full bg-white shadow-lg rounded">
                      <li>
                        <Link to="/dashboard/addcategory" className="block px-4 py-2 hover:bg-gray-100">
                          Add Category
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/editcategory" className="block px-4 py-2 hover:bg-gray-100">
                          Edit Category
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <button className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Sub-Category
                    </button>
                    <ul className="dropdown-menu mt-2 w-full bg-white shadow-lg rounded">
                      <li>
                        <Link to="/dashboard/addsubcategory" className="block px-4 py-2 hover:bg-gray-100">
                          Add SubCategory
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/editsubcategory" className="block px-4 py-2 hover:bg-gray-100">
                          Edit SubCategory
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <button className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Brand
                    </button>
                    <ul className="dropdown-menu mt-2 w-full bg-white shadow-lg rounded">
                      <li>
                        <Link to="/dashboard/addbrand" className="block px-4 py-2 hover:bg-gray-100">
                          Add Brand
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/editbrand" className="block px-4 py-2 hover:bg-gray-100">
                          Edit Brand
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <button className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      UOM
                    </button>
                    <ul className="dropdown-menu mt-2 w-full bg-white shadow-lg rounded">
                      <li>
                        <Link to="/dashboard/AddUom" className="block px-4 py-2 hover:bg-gray-100">
                          Add UOM
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/EditUom" className="block px-4 py-2 hover:bg-gray-100">
                          Edit UOM
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <Link to="/dashboard/addproduct" className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Add Product
                    </Link>
                  </div>
                </div>
              )}

              <button
                className="w-full py-2 bg-gray-200 text-gray-700 font-semibold rounded flex justify-between items-center"
                onClick={() => setRoleMenuOpen(!roleMenuOpen)}
              >
                <span className="flex-1 text-center">Add Role Menu</span>
                <span>{roleMenuOpen ? "▲" : "▼"}</span>
              </button>
              {roleMenuOpen && (
                <div className="space-y-2">
                  {/* <div className="dropdown">
                    <Link to="/dashboard/adddeliveryagent" className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Delivery Agent
                    </Link>
                  </div>
                  <div className="dropdown">
                    <Link to="/dashboard/addinventorymanager" className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Inventory Manager
                    </Link>
                  </div> */}
                  <div className="dropdown">
                    <Link to="/dashboard/addvendor" className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Vendor
                    </Link>
                  </div>
                  {/* <div className="dropdown">
                    <Link to="/dashboard/addfinancemanager" className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Finance Manager
                    </Link>
                  </div> */}
                  {/* <div className="dropdown">
                    <Link to="/dashboard/addcustomer" className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Customer
                    </Link>
                  </div> */}
                </div>
              )}

              <button
                className="w-full py-2 bg-gray-200 text-gray-700 font-semibold rounded flex justify-between items-center"
                onClick={() => setViewMenuOpen(!viewMenuOpen)}
              >
                <span className="flex-1 text-center">Edit Menu</span>
                <span>{viewMenuOpen ? "▲" : "▼"}</span>
              </button>
              {viewMenuOpen && (
                <div className="space-y-2">
                  <div className="dropdown">
                    <Link to="/dashboard/viewproducts" className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Products
                    </Link>
                  </div>
                  {/* <div className="dropdown">
                    <Link to="/dashboard/viewdeliveryagents" className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Delivery Agents
                    </Link>
                  </div>
                  <div className="dropdown">
                    <Link to="/dashboard/viewinventorymanagers" className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Inventory Managers
                    </Link>
                  </div> */}
                  <div className="dropdown">
                    <Link to="/dashboard/viewvendors" className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Vendors
                    </Link>
                  </div>
                  {/* <div className="dropdown">
                    <Link to="/dashboard/viewfinancemanagers" className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Finance Managers
                    </Link>
                  </div> */}
                  {/* <div className="dropdown">
                    <Link to="/dashboard/viewcustomers" className="btnclass w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Customers
                    </Link>
                  </div> */}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <main className="flex-1 p-6">{children}</main>
      </div>
      <Outlet />
    </>
  );
};

export default SideBar;




