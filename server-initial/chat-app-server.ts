// const express = require('express');
import express from 'express';
import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import {MessagesAndNames, userDetails, message} from '../app-chat-logic/users';
import {mockMessages} from '../app-data/messeges-data';
import { mockUserDetails } from '../app-data/users-data';
import cors from 'cors';
import Users from '../routers/users';

const app = express();
app.use(cors());

// app.get('/', function (req, res) {
//     res.send('Hello World');
// });

// app.get('/all-users',(req: Request, res: Response) => {
//   res.send(MessagesAndNames(mockMessages,mockUserDetails));
// });

app.use('/users', Users);
// app.listen(3060, )

export default app;