import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Container,
  Typography,
  Avatar,
  Icon,
} from "@mui/material";

import {Image} from "react";
import {makeStyles} from "@mui/styles";
import {Box, width} from "@mui/system";
import {useEffect} from "react";
import {getByID} from "../../Store/ListStationStore";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fffff",
    height: "210px",
  },
  list: {
    backgroundColor: "#E7EAED",
  },
});

export default function Station({data, setChosenData}) {
  const classes = useStyles();
  const handleClick = async () => {
    const chosenData = await getByID(data._id);
    setChosenData(chosenData);
  };
  return (
    <Box className={classes.root}>
      <Card
        style={{borderRadius: "5px", paddingLeft: "2%", cursor: "pointer"}}
        onClick={handleClick}
      >
        <CardContent>
          <Grid container direction="column">
            <Grid container item xs={6} direction="row" spacing={2}>
              <Grid item xs={3}>
                <img
                  src={require("../../../../shared/images/fuel-station.png")}
                  style={{width: "70px"}}
                />
              </Grid>
              <Grid container item xs={6} direction="column">
                <Typography variant="h5">{data.name}</Typography>
                {data.location && (
                  <Typography variant="h7">{data.location.name}</Typography>
                )}
              </Grid>
              <Grid item xs={3}>
                {/* <Icon color="primary" sx={{margin: "0px 0px 0px 60px"}}></Icon> */}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
