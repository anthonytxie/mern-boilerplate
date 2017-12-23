require('./db/mongoose.js');
import app from './app';
const PORT = process.env.PORT || 1995;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
