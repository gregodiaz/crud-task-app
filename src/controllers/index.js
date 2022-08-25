export const handleError = (req, res, next) => {
  console.log("Error handling middleware called");
  console.log("Path: ", req.path);

  res.status(500).send("Oops! something went wrong!");
  next();
};
