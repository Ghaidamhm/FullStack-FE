import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";

export default function CommentBox({ ErrorMessage, submitData }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data: any) => {
    submitData(data);
    reset();
  };
  function getErrorMessage(error: any, field: string): string {
    if (error && error[field]) return error[field].message;
    return "";
  }

  return (
    <div className="comment-box">
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
          id="content"
          label="content"
          autoComplete="content"
          autoFocus
          type="content"
          {...register("content", {
            required: "required",
          })}
          error={errors.content && errors.content.message !== undefined}
          helperText={getErrorMessage(errors, "content")}
        />

        <Button
          type="submit"
          className="btn btn-outline-primary"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Comment
        </Button>
        <Typography component="h3" variant="h5" color="#f00">
          {ErrorMessage}
        </Typography>
      </Box>
    </div>
  );
}
