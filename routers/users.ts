
import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { MessagesAndNames, UsersNamesAndId, getUser } from '../app-chat-logic/users';
import {mockMessages} from '../app-data/messeges-data';
import { mockUserDetails } from '../app-data/users-data';

interface Message {
    id: number;
    body: string;
    authorId: number;
    authorName?: string;
    timestamp: number | Date;
    likes?: number[];
    status?: 'pending' | 'ok' | 'error';
}

export const Users = Router();
Users.use(bodyParser.json());

Users.get('/all',(req: Request, res: Response) => {
    res.send(MessagesAndNames(mockMessages,mockUserDetails));
});

Users.get('/names-and-id',(req: Request, res: Response) => {
    res.send(UsersNamesAndId(mockUserDetails));
});

Users.get('/:id',(req: Request, res: Response) => {
    const Userid = req.params?.id;
    
    res.send(getUser(+Userid,mockUserDetails));
});

Users.post('/add-message',(req: Request, res: Response) => {
    
    const message = req.body.message;
    message.likes = [];
    message.authorName = getUser(message.id,mockUserDetails);

    mockMessages.push(message);

    res.status(201).send(message);
    
});

Users.post('/change-likes', (req: Request, res: Response) => {
    const likeDetails = req.body.likeDetails;
    const messageId = likeDetails.messageId;
    
    
    mockMessages.forEach((m) => {
        if(m.id === messageId){
            
            if(likeDetails.like){
                m.likes.push(m.likes.length+1);
            }else{
                m.likes.push(m.likes.length-1);
            } 

        }
    });


    res.send(mockMessages).status(200);


});





export default Users;