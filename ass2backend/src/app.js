import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router';
import { connect } from 'mongoose';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

connect('mongodb://127.0.0.1:27017/assigment2_frontend2');
app.use('/api', router);

export const viteNodeApp = app;
