import * as React from "react";
import {makeStyles} from "@mui/styles";
import {Container, Grid, Typography, Icon} from "@mui/material";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFFFF",
  },
  details: {
    backgroundColor: "#F5F5F5",
    borderRadius: "20px",
  },
});
export default function Detail({details}) {
  const classes = useStyles();
  return (
    <Container sx={{width: "900px", marginTop: "9px", marginLeft: "8px"}}>
      <Grid
        container
        direction="row"
        className={classes.details}
        style={{width: "910px"}}
      >
        <Grid container item xs={6} sx={{paddingLeft: "4%", width: "450px"}}>
          <Grid
            container
            item
            direction="row"
            alignItems="center"
            sx={{height: "90px"}}
          >
            <Typography variant="h4" align="center" sx={{}}>
              {details.stationName}
            </Typography>
          </Grid>

          <Typography variant="h6" component="div" style={{}}>
            {details.address}
          </Typography>

          <Grid item container style={{marginTop: "4%", marginBottom: "4%"}}>
            <Grid container item xs={6}>
              <Grid container direction="column" item xs={9}>
                <Typography variant="h7">Num of type</Typography>
                <Typography variant="h7">
                  {details.listBikeCategory.length} types
                </Typography>
              </Grid>
            </Grid>

            <Grid container item xs={6}>
              <Grid container direction="column" item xs={9}>
                <Typography variant="h7">Bike amount</Typography>
                <Typography variant="h7">{details.numOfBike} bikes</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          xs={6}
          sx={{
            borderLeft: "2px",
            borderStyle: "solid",
            paddingLeft: "2%",
            width: "450px",
          }}
        >
          <Grid
            container
            item
            direction="row"
            alignItems="center"
            sx={{height: "90px"}}
          >
            <Typography variant="h4">Staff: {details.staffName}</Typography>
          </Grid>

          <Grid item container style={{marginTop: "4%", marginBottom: "4%"}}>
            <Grid container item xs={6}>
              <Grid container direction="column" item xs={9}>
                <Typography variant="h7">ID</Typography>
                <Typography variant="h7">{details.staffID}</Typography>
              </Grid>
            </Grid>

            <Grid container item xs={6}>
              <Grid
                container
                direction="column"
                item
                xs={9}
                sx={{marginLeft: "-28px"}}
              >
                <Typography variant="h7">Email</Typography>
                <Typography variant="h7">{details.staffEmail}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
