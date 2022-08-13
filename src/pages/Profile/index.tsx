import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createPackageAsync } from "../../app/redux/package/packageSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { profileUserAsync, updateUserAsync } from "../../app/redux/user/userSlice";
const theme = createTheme();

export default function Profile(props: any) {
  const { ErrorMessage, SuccessMessage } = useAppSelector(
    (state) => state.package
  );
  const { auth, user } = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({defaultValues:{name:user?.name, email:user?.email}});

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: any) => {
    console.log({ auth });
    try {
      dispatch(
        updateUserAsync(user?.user_id, { ...data, password:user?.password, user_id:user?.user_id}, auth)
      );
      reset();
      // navigate('/')
      props.hide(false);
  setTimeout(() => {
    dispatch(
      profileUserAsync(auth)
      )
  }, 3000);
    } catch (error) {}
  };

  function getErrorMessage(error: any, field: string): string {
    if (error && error[field]) return error[field].message;
    return "";
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Update Profile
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              autoComplete="name"
              autoFocus
              type="text"
              {...register("name", {
                required: "required",
                minLength: {
                  value: 3,
                  message: "min length is 3",
                },
              })}
              error={errors.name && errors.name.message !== undefined}
              helperText={getErrorMessage(errors, "name")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              disabled
              autoComplete="email"
              autoFocus
              type="text"
              {...register("email", {
                required: "required",
              })}
              error={errors.email && errors.email.message !== undefined}
              helperText={getErrorMessage(errors, "email")}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
            <Typography component="h5" variant="h6" color="#f00">
              {ErrorMessage}
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
