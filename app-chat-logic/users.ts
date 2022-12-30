import {mockMessages} from '../app-data/messeges-data';
import { mockUserDetails } from '../app-data/users-data';

export interface message{
    "authorId":number,
    "id":number,
    "body":string,
    "timestamp":number,
    "likes":number[],
};
export interface userDetails{
    "id":number,
    "name":string,
}

export function MessagesAndNames(mockMessages:message[], mockUserDetails:userDetails[]){
    
    const newMessages = mockMessages.map((message)=>{
        
        const user = mockUserDetails.filter(u => 
            u.id === message.authorId);

        const newM = {...message, "authorName":user[0].name};
        return newM;
    });

    return newMessages;
    
}

export function UsersNamesAndId(mockUserDetails:userDetails[]){
    return mockUserDetails.map((usersDits) =>{return {"id":usersDits.id, "name":usersDits.name}});
}

export function getUser(userId: number, mockUserDetails:userDetails[]){
    const foundUser = mockUserDetails.find(user => user.id === userId);
    return foundUser;
}

//tests

// const users = [    {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
//   {
//     "id": 9,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//         "lat": "-43.9509",
//         "lng": "-34.4618"
//       }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//     }
//   },];

// console.log('ts-node workssssss');

// console.log(UsersNamesAndId(users));
//   const m = [    {
//     "authorId": 1,
//     "id": 8,
//     "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
//     "timestamp": 1671345253575,
//     "likes": [
//       1,
//       2,
//       3,
//       4,
//       5,
//       6,
//       7,
//       8
//     ]
//   },
//   {
//     "authorId": 9,
//     "id": 9,
//     "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
//     "timestamp": 1671345313575,
//     "likes": [
//       1,
//       2,
//       3,
//       4,
//       5,
//       6,
//       7,
//       8
//     ]
//   },
// ];

// console.log('test: ',MessagesAndNames(m, users));