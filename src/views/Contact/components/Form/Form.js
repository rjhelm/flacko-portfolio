import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  message: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 1200,
    }
  },
};

const Form = () => {
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (formState.isValid) {
      window.location.replace('/');
    }

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <form name="contact-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              placeholder="First name"
              label="First name *"
              variant="outlined"
              size="medium"
              name="firstName"
              fullWidth
              helperText={
                hasError('firstName') ? formState.errors.firstName[0] : null
              }
              error={hasError('firstName')}
              onChange={handleChange}
              type="firstName"
              value={formState.values.firstName || ''}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="Last name"
              label="Last name *"
              variant="outlined"
              size="medium"
              name="lastName"
              fullWidth
              helperText={
                hasError('lastName') ? formState.errors.lastName[0] : null
              }
              error={hasError('lastName')}
              onChange={handleChange}
              type="lastName"
              value={formState.values.lastName || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              error={hasError('email')}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Your Message"
              label="Message *"
              variant="outlined"
              size="medium"
              name="message"
              fullWidth
              helperText={
                hasError('message') ? formState.errors.message[0] : null
              }
              error={hasError('message')}
              onChange={handleChange}
              type="message"
              value={formState.values.message || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;