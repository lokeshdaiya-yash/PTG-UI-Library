/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Mock mock data;
 * @description This file for mock data
**/

import { TreeviewItem } from "ngx-treeview";

export const GENDER_LIST = [
  {
    id: '1',
    name: 'male',
    default: true,
  },
  {
    id: '2',
    name: 'female',
  },
  {
    id: '3',
    name: 'other',
  },
];

export const CITY_LIST = [
  {
    id: '1',
    name: 'indore',
  },
  {
    id: '2',
    name: 'bhopal',
  },
  {
    id: '3',
    name: 'neemuch',
  },
  {
    id: '4',
    name: 'pune',
  },
  {
    id: '5',
    name: 'bangalore',
  },
  {
    id: '6',
    name: 'nagpur',
  },
  {
    id: '7',
    name: 'delhi',
  },
  {
    id: '8',
    name: 'hyderabad',
  },
  {
    id: '9',
    name: 'ahmedabad',
  },
  {
    id: '10',
    name: 'kanpur',
  },
  {
    id: '11',
    name: 'agra',
  },
  {
    id: '12',
    name: 'nashik',
  }
];

export const TODO = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

export const DONE = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

export const CHECKBOX_ARRAY = new TreeviewItem({
  text: 'IT', value: 9, children: [
    {
      text: 'Programming', value: 91, children: [{
        text: 'Frontend', value: 911, children: [
          { text: 'Angular JS', value: 9111 },
          { text: 'Angular 2', value: 9112 },
          { text: 'ReactJS', value: 9113}
        ]
      }, {
        text: 'Backend', value: 912, children: [
          { text: 'C#', value: 9121 },
          { text: 'Java', value: 9122 },
          { text: 'Python', value: 9123}
        ]
      }]
    },
    {
      text: 'Networking', value: 92, children: [
        { text: 'Internet', value: 921 },
        { text: 'Security', value: 922 }
      ]
    }
  ]
});
// table and dropdown data for download functionlity
export const TABLE_DATA = {
  columnsData:['SN', 'NAME', 'DESIGNATION', 'DEPARTMENT'],
  rowsData: [
    [1, 'Astik', 'Manager', 'Engineering and MBA'],
    [2, 'Yogita', 'QA', 'Testing'],
    [3, 'Rajesh', 'Manager', 'Management'],
    [4, 'Swapnil', 'Developer', 'Development'],
    [5, 'Anmol', 'Consultant', 'HR'],
    [6, 'Mansi', 'Software Developer', 'Engineering'],
    [7, 'Astik', 'Manager', 'Engineering and MBA'],
    [8, 'Yogita', 'QA', 'Testing'],
    [9, 'Rajesh', 'Manager', 'Management'],
    [10, 'Yogita', 'QA', 'Testing'],
  ]
};

export const FILE_TYPE = [
  {
    id: '1',
    name: 'Download PDF',
    value: 'PDF',
  },
  {
    id: '2',
    name: 'Download Excel',
    value: 'EXCEL',
  },
  {
    id: '3',
    name: 'Download Word',
    value: 'WORD',
  },
  {
    id: '4',
    name: 'Download PNG',
    value: 'PNG',
  },
];

export const ACCORDIAN_DATA = [
  {
    title: 'Static Header 1',
    discription: 'This content is straight in the template.',
  },
  {
    title: 'Static Header 2',
    discription: 'This content is straight in the template.',
  },
  {
    title: 'Static Header 3',
    discription: 'This content is straight in the template.',
  },
  {
    title: 'Static Header 4',
    discription: 'This content is straight in the template.',
  }
];
export const USERSDATA =[
  {
    "id": 4,
    "username": "Rahul",
    "email": "rahul@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "male",
    "created_at": "2021-12-16T06:15:16.334Z",
    "updated_at": "2022-04-06T09:12:19.116Z",
    "city": "pune",
    "DOB": null
  },
  {
    "id": 5,
    "username": "Sachin",
    "email": "sachin@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2021-12-16T06:18:26.374Z",
    "updated_at": "2021-12-16T06:18:26.379Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 6,
    "username": "Rohit",
    "email": "rohit@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2021-12-16T06:25:26.650Z",
    "updated_at": "2021-12-16T06:25:26.656Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 8,
    "username": "ram",
    "email": "ram@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2021-12-16T06:57:17.661Z",
    "updated_at": "2021-12-16T06:57:17.667Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 10,
    "username": "Swapnil",
    "email": "swapnil@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 3,
      "name": "Admin",
      "description": "Admin user",
      "type": "admin"
    },
    "gender": "Male",
    "created_at": "2021-12-17T12:54:51.537Z",
    "updated_at": "2022-03-04T08:54:37.295Z",
    "city": "Pune",
    "DOB": "1999-07-21"
  },
  {
    "id": 11,
    "username": "Mohan",
    "email": "mohan99@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 2,
      "name": "Public",
      "description": "Default role given to unauthenticated user.",
      "type": "public"
    },
    "gender": "male",
    "created_at": "2021-12-27T13:40:18.864Z",
    "updated_at": "2022-02-22T10:42:06.774Z",
    "city": "Vidisha",
    "DOB": null
  },
  {
    "id": 13,
    "username": "devendra",
    "email": "devendra@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-01-27T11:14:40.013Z",
    "updated_at": "2022-01-27T11:14:40.019Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 15,
    "username": "mansi namdev",
    "email": "mansi@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-02-04T06:14:20.200Z",
    "updated_at": "2022-02-04T06:14:20.208Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 19,
    "username": "bhanu",
    "email": "bhanu@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 3,
      "name": "Admin",
      "description": "Admin user",
      "type": "admin"
    },
    "gender": "male",
    "created_at": "2022-02-11T10:48:05.567Z",
    "updated_at": "2022-03-04T09:05:22.518Z",
    "city": "Indore",
    "DOB": null
  },
  {
    "id": 26,
    "username": "ankit",
    "email": "ankit@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-02-11T11:55:22.358Z",
    "updated_at": "2022-02-11T11:55:22.370Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 29,
    "username": "user1",
    "email": "user1@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "role": {
      "id": 2,
      "name": "Public",
      "description": "Default role given to unauthenticated user.",
      "type": "public"
    },
    "gender": "Male",
    "created_at": "2022-02-14T13:11:03.453Z",
    "updated_at": "2022-02-14T13:11:03.460Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 30,
    "username": "ankitp.yash",
    "email": "ankit.patidar@yash.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-02-15T04:51:30.238Z",
    "updated_at": "2022-02-15T04:51:30.245Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 31,
    "username": "Raj Sharma",
    "email": "raj@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-02-15T05:03:39.237Z",
    "updated_at": "2022-02-15T05:03:39.243Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 32,
    "username": "Mohan Sharma",
    "email": "mj@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-02-15T05:05:25.865Z",
    "updated_at": "2022-02-15T05:05:25.870Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 33,
    "username": "Harsha",
    "email": "h1@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Female",
    "created_at": "2022-02-15T06:25:29.992Z",
    "updated_at": "2022-02-15T06:25:30.000Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 49,
    "username": "mansi",
    "email": "mansinamdev99@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "role": {
      "id": 2,
      "name": "Public",
      "description": "Default role given to unauthenticated user.",
      "type": "public"
    },
    "gender": "Female",
    "created_at": "2022-02-16T06:37:39.892Z",
    "updated_at": "2022-02-16T06:50:27.387Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 52,
    "username": "bs",
    "email": "bs@gmail.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-02-16T10:30:00.885Z",
    "updated_at": "2022-02-16T10:30:01.109Z",
    "city": "Indore",
    "DOB": null
  },
  {
    "id": 62,
    "username": "R J",
    "email": "rj@gmail.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-02-17T07:21:08.461Z",
    "updated_at": "2022-02-17T07:21:08.532Z",
    "city": "Bhopal",
    "DOB": null
  },
  {
    "id": 63,
    "username": "mansinamdev",
    "email": "abc@gamil.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-02-17T07:36:41.836Z",
    "updated_at": "2022-02-17T07:36:41.907Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 65,
    "username": "a",
    "email": "a@gmail.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-02-18T05:31:23.115Z",
    "updated_at": "2022-02-18T05:31:23.267Z",
    "city": "gujarat",
    "DOB": null
  },
  {
    "id": 66,
    "username": "o",
    "email": "o@gmail.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-02-21T13:51:23.204Z",
    "updated_at": "2022-02-21T13:51:23.271Z",
    "city": "Karnataka",
    "DOB": null
  },
  {
    "id": 67,
    "username": "priyanka",
    "email": "eve.holt@reqres.in",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Female",
    "created_at": "2022-02-22T06:37:42.772Z",
    "updated_at": "2022-02-22T06:37:43.338Z",
    "city": "Indore",
    "DOB": null
  },
  {
    "id": 68,
    "username": "vanshita",
    "email": "vanshita@gmail.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-02-22T06:55:49.824Z",
    "updated_at": "2022-02-22T06:55:49.884Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 69,
    "username": "harsha",
    "email": "harsha@yash.com",
    "provider": "local",
    "confirmed": false,
    "blocked": false,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-02-22T08:30:23.958Z",
    "updated_at": "2022-02-22T08:30:23.965Z",
    "city": "indore",
    "DOB": null
  },
  {
    "id": 70,
    "username": "Shyam",
    "email": "shyam@gmail.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-02-22T11:23:05.848Z",
    "updated_at": "2022-02-22T11:23:05.855Z",
    "city": "vidisha",
    "DOB": null
  },
  {
    "id": 71,
    "username": "gouri",
    "email": "gouri@gmail.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-02-22T11:32:15.105Z",
    "updated_at": "2022-02-22T11:32:15.111Z",
    "city": "vidisha",
    "DOB": null
  },
  {
    "id": 72,
    "username": "Shruti",
    "email": "shruti@gmail.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-02-22T11:37:35.588Z",
    "updated_at": "2022-02-22T11:37:35.593Z",
    "city": "vidisha",
    "DOB": null
  },
  {
    "id": 73,
    "username": "Swati",
    "email": "swati708@gmail.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-02-22T11:54:02.484Z",
    "updated_at": "2022-02-22T11:54:02.498Z",
    "city": "vidisha",
    "DOB": null
  },
  {
    "id": 74,
    "username": "Ram",
    "email": "r@gmail.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-02-22T13:13:50.911Z",
    "updated_at": "2022-02-22T13:21:41.465Z",
    "city": "Bhopal",
    "DOB": null
  },
  {
    "id": 85,
    "username": "saloni",
    "email": "saloni@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-02-24T09:11:34.071Z",
    "updated_at": "2022-02-24T09:11:34.076Z",
    "city": "vidisha",
    "DOB": null
  },
  {
    "id": 86,
    "username": "Radha",
    "email": "radhe@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-02-24T09:13:47.117Z",
    "updated_at": "2022-02-24T09:13:47.123Z",
    "city": "vidisha",
    "DOB": null
  },
  {
    "id": 87,
    "username": "ms",
    "email": "ms@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-02-24T09:44:41.550Z",
    "updated_at": "2022-02-24T09:44:41.557Z",
    "city": "Bhopal",
    "DOB": null
  },
  {
    "id": 88,
    "username": "shubham",
    "email": "shubham@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-02-24T09:45:34.605Z",
    "updated_at": "2022-02-24T09:45:34.610Z",
    "city": "vidisha",
    "DOB": null
  },
  {
    "id": 89,
    "username": "test",
    "email": "test@test.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-02-24T10:05:02.371Z",
    "updated_at": "2022-02-24T10:05:02.379Z",
    "city": "Bhopal",
    "DOB": null
  },
  {
    "id": 90,
    "username": "test1",
    "email": "test1@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-02-24T10:17:50.615Z",
    "updated_at": "2022-02-24T10:17:50.622Z",
    "city": "Bhopal",
    "DOB": null
  },
  {
    "id": 91,
    "username": "yogita",
    "email": "yogita@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-02-24T10:25:39.977Z",
    "updated_at": "2022-02-24T10:25:39.990Z",
    "city": "vidisha",
    "DOB": null
  },
  {
    "id": 92,
    "username": "xyz",
    "email": "xyz@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-02-24T10:29:49.710Z",
    "updated_at": "2022-02-24T10:29:49.715Z",
    "city": "Bhopal",
    "DOB": null
  },
  {
    "id": 93,
    "username": "abc",
    "email": "abc@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-02-24T10:32:11.937Z",
    "updated_at": "2022-02-24T10:32:11.943Z",
    "city": "Bhopal",
    "DOB": null
  },
  {
    "id": 94,
    "username": "v",
    "email": "v@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "male",
    "created_at": "2022-02-25T06:01:07.984Z",
    "updated_at": "2022-02-25T06:01:07.991Z",
    "city": "pune",
    "DOB": null
  },
  {
    "id": 95,
    "username": "ankuboss",
    "email": "ankit@mgial.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-03-01T05:57:03.600Z",
    "updated_at": "2022-03-01T05:57:03.607Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 96,
    "username": "ankkuboss",
    "email": "ankkuboss@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-03-01T05:58:43.315Z",
    "updated_at": "2022-03-01T05:58:43.321Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 97,
    "username": "rajjj",
    "email": "raj1@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-03-01T06:03:20.198Z",
    "updated_at": "2022-03-01T06:03:20.203Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 98,
    "username": "pwan",
    "email": "pawan@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-03-01T06:05:12.061Z",
    "updated_at": "2022-03-01T06:05:12.066Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 99,
    "username": "ajayaa",
    "email": "ajay@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-03-01T06:06:01.170Z",
    "updated_at": "2022-03-01T06:06:01.175Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 100,
    "username": "shubhra",
    "email": "shubhra@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-03-02T08:27:06.731Z",
    "updated_at": "2022-03-02T08:27:06.740Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 101,
    "username": "asd",
    "email": "asdd@yash.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-03-02T09:02:19.638Z",
    "updated_at": "2022-03-02T09:02:19.648Z",
    "city": "Karnataka",
    "DOB": null
  },
  {
    "id": 102,
    "username": "asdas",
    "email": "asdad@yash.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-03-02T09:02:49.025Z",
    "updated_at": "2022-03-02T09:02:49.030Z",
    "city": "Karnataka",
    "DOB": null
  },
  {
    "id": 103,
    "username": "ab",
    "email": "ab@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "male",
    "created_at": "2022-03-02T10:21:00.499Z",
    "updated_at": "2022-03-02T10:21:00.505Z",
    "city": "indore",
    "DOB": null
  },
  {
    "id": 104,
    "username": "Mohan12",
    "email": "mohan1@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-03-02T10:25:11.132Z",
    "updated_at": "2022-03-02T10:25:11.139Z",
    "city": "Karnataka",
    "DOB": null
  },
  {
    "id": 105,
    "username": "ASDASD",
    "email": "asd123@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-03-02T10:27:01.793Z",
    "updated_at": "2022-03-02T10:27:01.801Z",
    "city": "gujarat",
    "DOB": null
  },
  {
    "id": 106,
    "username": "sd",
    "email": "qw@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-03-02T10:28:11.144Z",
    "updated_at": "2022-03-02T10:28:11.148Z",
    "city": "indore",
    "DOB": null
  },
  {
    "id": 107,
    "username": "cholake",
    "email": "cholake@yash.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-03-02T10:30:36.887Z",
    "updated_at": "2022-03-02T10:30:36.896Z",
    "city": "indore",
    "DOB": null
  },
  {
    "id": 108,
    "username": "zz",
    "email": "zz@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "male",
    "created_at": "2022-03-02T10:34:03.411Z",
    "updated_at": "2022-03-02T10:34:03.416Z",
    "city": "indore",
    "DOB": null
  },
  {
    "id": 110,
    "username": "aaa",
    "email": "aaa@test.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "male",
    "created_at": "2022-03-02T10:41:19.130Z",
    "updated_at": "2022-03-02T10:41:19.141Z",
    "city": "indore",
    "DOB": "2021-11-15"
  },
  {
    "id": 111,
    "username": "harsha1",
    "email": "harsha1@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-03-02T11:30:41.773Z",
    "updated_at": "2022-03-02T11:30:41.781Z",
    "city": "goa",
    "DOB": "2022-02-26"
  },
  {
    "id": 112,
    "username": "gnu",
    "email": "gnu@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-03-02T12:36:10.108Z",
    "updated_at": "2022-03-02T12:36:10.114Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 113,
    "username": "ankit1",
    "email": "ankit1@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-03-02T13:08:48.715Z",
    "updated_at": "2022-03-02T13:08:48.720Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 114,
    "username": "harshazalawa",
    "email": "harsha@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "female",
    "created_at": "2022-03-02T13:44:33.496Z",
    "updated_at": "2022-03-02T13:44:33.501Z",
    "city": "indore",
    "DOB": "2022-02-27"
  },
  {
    "id": 115,
    "username": "ankit2",
    "email": "ankit2@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-03-03T09:29:32.354Z",
    "updated_at": "2022-03-03T09:29:32.364Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 117,
    "username": "ganesh",
    "email": "ganesh@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "1",
    "created_at": "2022-03-07T05:21:43.702Z",
    "updated_at": "2022-03-07T05:21:43.709Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 118,
    "username": "dev@yash.com",
    "email": "dev@yash.com",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "mail",
    "created_at": "2022-03-07T05:26:12.211Z",
    "updated_at": "2022-03-07T05:26:12.219Z",
    "city": "pune",
    "DOB": "2021-05-04"
  },
  {
    "id": 119,
    "username": "dsfgsg",
    "email": "dfgd@dfs.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "1",
    "created_at": "2022-03-07T07:18:36.699Z",
    "updated_at": "2022-03-07T07:18:36.708Z",
    "city": null,
    "DOB": "2022-03-01"
  },
  {
    "id": 120,
    "username": "Devang Kushwah",
    "email": "devang@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "male",
    "created_at": "2022-03-07T09:27:57.208Z",
    "updated_at": "2022-03-07T09:27:57.214Z",
    "city": "indore",
    "DOB": "1998-11-29"
  },
  {
    "id": 121,
    "username": "sdf",
    "email": "sdf@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "1",
    "created_at": "2022-03-09T10:39:41.029Z",
    "updated_at": "2022-03-09T10:39:41.038Z",
    "city": "pune",
    "DOB": "2022-02-27"
  },
  {
    "id": 122,
    "username": "Sunil Bhawsar",
    "email": "sunil@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "1",
    "created_at": "2022-03-09T11:25:00.402Z",
    "updated_at": "2022-03-09T11:25:00.410Z",
    "city": "indore",
    "DOB": "2022-03-09"
  },
  {
    "id": 123,
    "username": "Hello World",
    "email": "hello@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "1",
    "created_at": "2022-03-09T11:47:18.012Z",
    "updated_at": "2022-03-09T11:47:18.017Z",
    "city": "indore",
    "DOB": "2022-03-07"
  },
  {
    "id": 124,
    "username": "angular",
    "email": "angular@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-03-09T11:48:03.123Z",
    "updated_at": "2022-03-09T11:48:03.130Z",
    "city": "Indore",
    "DOB": null
  },
  {
    "id": 125,
    "username": "my test",
    "email": "mt@ms.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "Male",
    "created_at": "2022-03-11T06:57:16.383Z",
    "updated_at": "2022-03-11T06:57:16.392Z",
    "city": "Bhopal",
    "DOB": null
  },
  {
    "id": 126,
    "username": "swapnil",
    "email": "swapniljadhav.sj87@gmail.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "male",
    "created_at": "2022-03-11T12:35:11.675Z",
    "updated_at": "2022-03-11T12:35:11.780Z",
    "city": "pune",
    "DOB": "1999-07-20"
  },
  {
    "id": 127,
    "username": "bt",
    "email": "bt@gmail.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "male",
    "created_at": "2022-03-14T10:23:45.753Z",
    "updated_at": "2022-03-14T10:23:45.908Z",
    "city": "indore",
    "DOB": null
  },
  {
    "id": 128,
    "username": "new test",
    "email": "new12@ms.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "male",
    "created_at": "2022-03-14T10:27:28.117Z",
    "updated_at": "2022-03-14T10:27:28.213Z",
    "city": "indore",
    "DOB": null
  },
  {
    "id": 129,
    "username": "remo",
    "email": "remo@ms.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "male",
    "created_at": "2022-03-14T10:34:56.044Z",
    "updated_at": "2022-03-14T10:34:56.116Z",
    "city": "indore",
    "DOB": null
  },
  {
    "id": 130,
    "username": "soham",
    "email": "soham12@gmail.com",
    "provider": "local",
    "confirmed": null,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-03-29T05:55:25.278Z",
    "updated_at": "2022-03-29T05:55:25.369Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 131,
    "username": "ankkuboss1",
    "email": "ankkuboss@mailinator.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "male",
    "created_at": "2022-04-11T05:28:36.114Z",
    "updated_at": "2022-04-11T05:34:34.225Z",
    "city": "indore",
    "DOB": null
  },
  {
    "id": 132,
    "username": "mohan99",
    "email": "mohan909@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-19T05:31:09.959Z",
    "updated_at": "2022-05-19T05:31:09.969Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 133,
    "username": "akshay",
    "email": "akshayyash@yopmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": "male",
    "created_at": "2022-05-20T07:15:49.117Z",
    "updated_at": "2022-05-20T07:15:49.125Z",
    "city": "indore",
    "DOB": null
  },
  {
    "id": 134,
    "username": "ankkuboss47",
    "email": "ankkuboss47@mailinator.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-24T05:32:11.799Z",
    "updated_at": "2022-05-24T05:32:11.805Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 135,
    "username": "shivraj",
    "email": "surya@faze.app",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-24T11:53:06.213Z",
    "updated_at": "2022-05-24T11:53:06.221Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 136,
    "username": "surya",
    "email": "surya@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-24T11:57:02.572Z",
    "updated_at": "2022-05-24T11:57:02.577Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 137,
    "username": "good2see ",
    "email": "good@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-27T06:12:43.548Z",
    "updated_at": "2022-05-27T06:12:43.557Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 138,
    "username": "ankit4567",
    "email": "ankit324567@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-27T06:30:12.764Z",
    "updated_at": "2022-05-27T06:30:12.772Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 139,
    "username": "Rahul Jain",
    "email": "rahu124@yopmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-27T12:27:32.802Z",
    "updated_at": "2022-05-27T12:27:32.809Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 140,
    "username": "testing_register_123",
    "email": "testingegsiter@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-27T15:23:54.852Z",
    "updated_at": "2022-05-27T15:23:54.858Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 141,
    "username": "testing",
    "email": "testing@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-27T15:28:17.659Z",
    "updated_at": "2022-05-27T15:28:17.663Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 142,
    "username": "testing2",
    "email": "testinh2@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-27T15:34:19.594Z",
    "updated_at": "2022-05-27T15:34:19.598Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 143,
    "username": "test34234",
    "email": "test423423@test.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-27T15:42:07.708Z",
    "updated_at": "2022-05-27T15:42:07.713Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 144,
    "username": "aqwert",
    "email": "qwerty@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-29T13:43:42.105Z",
    "updated_at": "2022-05-29T13:43:42.111Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 145,
    "username": "Raj Sahu",
    "email": "raj12@yopmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-30T12:12:06.680Z",
    "updated_at": "2022-05-30T12:12:06.690Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 146,
    "username": "",
    "email": "devjain1@yopmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-30T12:20:45.836Z",
    "updated_at": "2022-05-30T12:20:45.841Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 147,
    "username": "hai",
    "email": "hai@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-30T17:02:35.375Z",
    "updated_at": "2022-05-30T17:02:35.383Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 148,
    "username": "yash",
    "email": "yash@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-30T18:19:40.480Z",
    "updated_at": "2022-05-30T18:19:40.487Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 149,
    "username": "tv",
    "email": "tv@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-30T18:22:18.161Z",
    "updated_at": "2022-05-30T18:22:18.167Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 150,
    "username": "tv1",
    "email": "tv1@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-30T18:24:29.123Z",
    "updated_at": "2022-05-30T18:24:29.128Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 151,
    "username": "tv2",
    "email": "tv2@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-30T18:26:14.300Z",
    "updated_at": "2022-05-30T18:26:14.305Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 152,
    "username": "tv3",
    "email": "tv3@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-30T18:27:07.971Z",
    "updated_at": "2022-05-30T18:27:07.977Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 153,
    "username": "tv4",
    "email": "tv4@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-30T18:28:31.408Z",
    "updated_at": "2022-05-30T18:28:31.413Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 154,
    "username": "tv5",
    "email": "tv5@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-30T18:32:50.704Z",
    "updated_at": "2022-05-30T18:32:50.711Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 155,
    "username": "local",
    "email": "local@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-30T18:36:16.326Z",
    "updated_at": "2022-05-30T18:36:16.331Z",
    "city": null,
    "DOB": null
  },
  {
    "id": 156,
    "username": "local1",
    "email": "local1@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "gender": null,
    "created_at": "2022-05-30T18:38:46.021Z",
    "updated_at": "2022-05-30T18:38:46.029Z",
    "city": null,
    "DOB": null
  }
]

export const TITLE = [
  {
    id: '1',
    name: 'Mr',
  },
  {
    id: '2',
    name: 'Mrs',
  },
];
export const STATE = [
  {
    id: '1',
    name: 'Madhya Pradesh',
  },
  {
    id: '2',
    name: 'Uttar Pradesh',
  },
  {
    id: '3',
    name: 'Rajasthan',
  },
  {
    id: '4',
    name: 'Himachal Pradesh',
  },
];
export const COUNTRY = [
  {
    id: '1',
    name: 'India',
  },
  {
    id: '2',
    name: 'USA',
  },
  {
    id: '3',
    name: 'Russia',
  },
  {
    id: '4',
    name: 'China',
  },
];
export const CARD_TYPE = [
  {
    id: '1',
    name: 'Visa',
    default: true,
  },
  {
    id: '2',
    name: 'MasterCard',
  },
];
export const EXP_MONTH = [
  {
    id: '1',
    name: '01',
    default: true,
  },
  {
    id: '2',
    name: '02',
  },
  {
    id: '3',
    name: '03',
  },
  {
    id: '4',
    name: '04',
  },
  {
    id: '5',
    name: '05',
  },
  {
    id: '6',
    name: '06',
  },
  {
    id: '7',
    name: '07',
  },
  {
    id: '8',
    name: '08',
  },
  {
    id: '9',
    name: '09',
  },
  {
    id: '10',
    name: '10',
  },
  {
    id: '11',
    name: '11',
  },
  {
    id: '12',
    name: '12',
  },
];
