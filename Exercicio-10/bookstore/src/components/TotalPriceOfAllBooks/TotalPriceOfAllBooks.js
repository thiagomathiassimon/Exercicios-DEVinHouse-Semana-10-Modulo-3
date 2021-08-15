import React from "react";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, Grid } from "@material-ui/core";
import { useStyles } from "./TotalPriceOfAllBooks.styles";

export const TotalPriceOfAllBooks = ({ totalPrice }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container justifyContent="center">
        <CardContent>
          <Typography className={classes.title}>
            Value of all books: R$ {totalPrice}
          </Typography>
        </CardContent>
      </Grid>
    </Card>
  );
};
