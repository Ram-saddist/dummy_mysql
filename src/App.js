import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
  	super();
  	this.state={
		students:[],
		student:{
			name:''
		},
	}
  }
	

	componentDidMount(){
	 	this.getProducts();
	}
	getProducts=_=>{
		fetch('http://localhost:5000/student')
	 	.then(response => response.json())
	 	.then(response=>this.setState({students:response.data}))
	 	.catch(err=>console.error(err))
	}
	add=_=>{
		const {student}=this.state;
		fetch(`http://localhost:5000/student/add?name=${student.name}`)
			.then(this.getProducts)
			.catch(err=> console.error(err))
	}
	Students=({id,name})=><div align="center" className="data" key={id}>Name:{name}</div>	

  render(){
  	const {students,student}=this.state;
    return(
       <div>
       {
           this.state.students.map((id,name)=>{
            <div key={id}>Name:{name}</div>
           }) 
       }
       <div>
        <img src="https://codegnan.com/assets/images/logo.jpg" alt="name"/>
       	<input className="noteInput"
       		value={student.name} 
       		onChange={e=> this.setState({
       								student:{name:e.target.value}
       							})
       				  }
       		type="text" placeholder="name..."/>
       	<button className="noteButton" onClick={this.add}>Submit</button>
       </div>
       </div>
      ); 
  }
}

export default App;
