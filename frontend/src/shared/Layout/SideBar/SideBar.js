import Logo from "../../images/login-logo.png";
import {useNavigate} from "react-router";
import {Box, Button, Grid, Icon} from "@mui/material";
import "./SideBar.css";
export default function Sidebar({items}) {
  let navigate = useNavigate();
  const handleClick = (href) => {
    navigate(href);
  };
  return (
    <Box
      sx={{
        height: "95vh",
        width: "100%",
        backgroundColor: "#235390",
        backgroundImage: `url(https://d35aaqx5ub95lt.cloudfront.net/images/star-pattern.svg)`,
        backgroundSize: "300%",
        borderRadius: "30px",
        margin: "35px 15px",
      }}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item alignItems="center">
          <img
            src={Logo}
            alt="logo"
            style={{
              marginLeft: "28%",
              marginTop: "15%",
              marginBottom: "10%",
              width: "45%",
            }}
          />
        </Grid>
        <Grid item container direction="column" spacing={2}>
          {items.map((item, index) => (
            <Grid key={index} item width="100%" alignItems="center">
              <Button
                // variant='contained'
                onClick={() => handleClick(item.href)}
                id="NewmemberSideBar"
              >
                {item.title}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid item container direction="column" spacing={2} style={{ marginTop: "20%" }}>
          <Grid key={6} item width="100%" alignItems="center">
            
            <Button
              variant='text'
              // onClick={() => handleClick(item.href)}
              id="NewmemberSideBar"
            >
              Settings
            </Button>
          </Grid>
          <Grid key={7} item width="100%" alignItems="center">
            <Button
              // variant='contained'
              // onClick={() => handleClick(item.href)}
              id="NewmemberSideBar"
            >
              Logout
            </Button>
          </Grid>   
        </Grid>
      </Grid>
    </Box>
  );
}
