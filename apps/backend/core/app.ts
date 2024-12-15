import express from 'express';
import userRoutes from '../routes/userRoutes'

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app