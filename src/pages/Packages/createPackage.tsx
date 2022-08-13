import React, { useEffect } from "react";
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

const theme = createTheme();

export default function CreatePackage(props:any) {
  const { ErrorMessage, SuccessMessage } = useAppSelector(
    (state) => state.package
  );
  const { auth } = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: any) => {
    console.log({ auth });
    try {
      dispatch(
        createPackageAsync({ ...data, rating: parseInt(data.rating) }, auth)
      );
      reset();
      // navigate('/')
      props.hide(false)
    } catch (error) {
      
    }

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
            Create Package
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
              label="Package name"
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
              id="package_description"
              label="Package Description "
              autoComplete="package_description"
              autoFocus
              type="package_description"
              {...register("package_description", {
                required: "required",
                minLength: {
                  value: 3,
                  message: "min length is 3",
                },
              })}
              error={
                errors.package_description &&
                errors.package_description.message !== undefined
              }
              helperText={getErrorMessage(errors, "package_description")}
            />

            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="rating"
              label="rating"
              autoComplete="rating"
              autoFocus
              type="number"
              defaultValue={1}
              {...register("rating", {
                required: "required",
              })}
              error={errors.rating && errors.rating.message !== undefined}
              helperText={getErrorMessage(errors, "rating")}
            /> */}
            <label htmlFor="recommended">Recommended</label>
            <Checkbox required id="recommended" {...register("recommended")} />
            <Button
              type="submit"
              fullWidth
              className="btn btn-outline-primary"
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
