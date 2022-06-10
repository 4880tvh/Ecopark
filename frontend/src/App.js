import './App.css';
import React, { useState  } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import SideBar from './shared/Layout/SideBar/SideBar';
import ListReceptionist from './Modules/Admin/ListEmployee/ListRe/ListRe';
import Login from './Modules/Auth/Login/Login';
import DashboardOfReceptionist from './Modules/Receptionist/Dashboard/Dashboard';
import PendingHistory from './Modules/Receptionist/Pending/PendingHistory/PendingHistory';
import AdminDashboard from './Modules/Admin/Dashboard';
import ListBike from './Modules/Admin/ListBike/Index';
import ListUser from './Modules/Receptionist/ListUser/Index';
import { AdminSidebarItem } from './Routes/AdminSidebarItem';
import { ReceptionistSidebarItem } from './Routes/ReceptionistSidebarItem';
import { StaffSidebarItem } from './Routes/StaffSidebarItem';
import { Box, Grid } from '@mui/material';
import ListStationComponent from './Modules/Admin/ListStation';
import BikeCategories from './Modules/Admin/BikeCategory/BikeCategory';
import BikeCategoriesOfStaff from './Modules/Staff/BikeCategory';
import DashboardOfStaff from './Modules/Staff/Dashboard/Index'
import ListBikeOfStaff from './Modules/Staff/ListBike/Index/index';
import BikeConfirm from './Modules/Staff/BikeConfirm';
import Statistical from './Modules/Receptionist/Statistical';


export default function App() {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [role, setRole] = useState(localStorage.getItem("role"));
    const user = {
        [role]: "true",
    }
    const sidebarItems = {
        admin: AdminSidebarItem,
        receptionist: ReceptionistSidebarItem,
        staff: StaffSidebarItem
    }
    return (
        <Router>
            <Box className="app" sx={{height: "1080px" ,width:"100%"}}>
                <Grid container item direction="row" >
                    {<Grid item sx={{width:"18%", height:"1080px"}} >
                        <SideBar items={sidebarItems[role]} />
                    </Grid>}
                    <Grid  item xs sx={{height:"1080px",}}>
                        <Routes>
                            <Route exact path="/login" element={<Login token={token} setToken={setToken} setRole={setRole} />} />
                            {(<Route exact path="/" element={<Navigate to={`/${role}`} />} />)}

                            {/*Admin routes*/}
                            {<Route exact path="/admin" element={<AdminDashboard setToken={setToken} />} />}
                            {<Route exact path="/admin/employee" element={<ListReceptionist />} />}
                            {<Route exact path="/admin/station" element={<ListStationComponent />} />}
                            {<Route exact path="/admin/bike" element={<ListBike />} />}
                            {<Route exact path="/admin/bike-category" element={<BikeCategories />} />}
                            {/*Receptionist routes */}
                            {<Route exact path="/receptionist" element={<DashboardOfReceptionist setToken={setToken} />} />}
                            {<Route exact path="/receptionist/pending" element={<PendingHistory />} />}
                            {<Route exact path="/receptionist/user" element={<ListUser />} />}
                            {<Route exact path="/receptionist/statistical" element={<Statistical />} />}
                            {/*Staff routes */}
                            {<Route exact path="/staff" element={<DashboardOfStaff setToken={setToken} />} />}
                            {<Route exact path="/staff/bike-confirm" element={<BikeConfirm />} />}
                            {<Route exact path="/staff/bike" element={<ListBikeOfStaff />} />}
                            {<Route exact path="/staff/bike-category" element={<BikeCategoriesOfStaff />} />}
                            <Route path="*" element={<Navigate to="/login" />} />
                        </Routes>
                    </Grid>
                </Grid>
            </Box>
        </Router>

    )
}
