import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./CardContainer.styles";
import { Grid } from "@material-ui/core";

export const CardContainer = (props) => {
  const classes = useStyles();

  const { book } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container justifyContent="center">
          <Typography
            component="h1"
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {book.title}
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Typography
            component="h2"
            className={classes.pos}
            color="textSecondary"
          >
            {book.subtitle}
          </Typography>
        </Grid>
        <Typography variant="body2" component="p">
          Author: {book.authorName}
        </Typography>
        <Typography variant="body2" component="p">
          Publishing Company: {book.publishingCompany}
        </Typography>
        <Typography variant="body2" component="p">
          Price: R$ {book.price}
        </Typography>
      </CardContent>
    </Card>
  );
};
