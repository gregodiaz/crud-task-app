export const handleError = (error, req, res, next) => {
  console.log('Error:', error.message);
  res.send('Oops! something went wrong!')
}
