import { app } from "./app";


const PORT = Number(process.env.PORT) ;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});