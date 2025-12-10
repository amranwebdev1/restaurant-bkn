import app from './App.js';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;

app.listen(port,()=>{
  console.log(`Your server is running at ${port}`)
})
export default app;