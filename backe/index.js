const cors =require('cors');
const express=require('express');
const mysql =require('mysql');

const app=express();

const SELECT='SELECT * FROM student';
const connection =mysql.createConnection({

	host:'localhost',
	user:'root',
	password:'root',
	database:'first_db'
});

connection.connect(err=>{
	if(err)
		return err;
});

app.use(cors());

app.get('/',(req,res)=>{
	res.send('hello this is from server');
});

app.get('/student/add',(req,res)=>{
	const {name}=req.query;
	const insert=`INSERT INTO student(name) VALUE('${name}')`;
	connection.query(insert,(err,results)=>{
		if(err)
			return res.send(err);
		else
			return res.send('success');
	})
});

app.get('/student',(req,res)=>{
	connection.query(SELECT,(err,results)=>{
		if(err)
			return res.send(err)
		else{
			return res.json({
				data:results
			})
		}
	});
});


app.listen(5000,()=>{
	console.log(`Listening on port 5000`)
})