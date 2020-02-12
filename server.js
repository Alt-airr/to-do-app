let express = require('express');
let app = express();
let cors = require('cors');
app.use(cors());
let data =  [
    {
        id: '1',
        title: "Go shopping",
        completed: false,
        description: 'Take some food for cat'
    },
    {
        id: '2',
        title: 'Feed the cat',
        description: 'Matters of prime importance',
        completed: false,
    },
    {
        id: '3',
        title: 'Discover a new chemical element',
        description: 'If time is left',
        completed: false,
    },
    {
        id: '4',
        title: 'Go to training',
        description: 'Don\'t forget to have a tight lunch before',
        completed: false,
    },
    {
        id: '5',
        title: 'Watch some movie',
        description: '',
        completed: false,
    }
]

app.get("/data", function(request, response){
    response.send(data)});


app.listen(3001, function() {
    console.log('App running on port 3001,');
});