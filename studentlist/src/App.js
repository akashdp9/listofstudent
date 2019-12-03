import React, { Component } from 'react';
import './App.css';

class AddStudent extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      skills:'',
      
    }
    this.addItems = this.addItems.bind(this)
    
   
  }

  addItems(){
    let skill = this.state.skills.split(',');
    let final_state = this.state;
    console.log("Skills is"+this.state.skills);
    final_state['skills'] = skill;
    if(this.state.firstName !== '' && this.state.lastName !== '' && this.state.skills !== ''){
      console.log(this.state.skills);
      this.props.studentinfo(this.state);
      this.setState({
        firstName:'',
        lastName:'',
        skills:''
      });
    }
  }

 




  render() {
    return (
      <div className="">
        <div className='form'>
        <input type='text' className='fieldset' placeholder='First Name' onChange={(event)=>this.setState({firstName:event.target.value})} />
        <input type='text' className='fieldset' placeholder='Last Name'onChange={(event)=>this.setState({lastName:event.target.value})} />
        <input type='text' className='fieldset' placeholder='Skills'onChange={(event)=>this.setState({skills:event.target.value})} /><br></br>
        <button className='btn' onClick={this.addItems}>submit</button>
        </div >
        <div className="searchbtn"><input type="text" className="fieldset" placeholder="search by name"/></div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      students : [
        {
          'firstName': 'Akash',
          'lastName': 'Deep',
          'skills': ['Python','HTML','CSS']
        },
        {
          'firstName': 'Pramod',
          'lastName': 'Roy',
          'skills': ['Python', 'HTML', 'CSS', 'CAT']
        },
        {
          'firstName': 'Abhishek',
          'lastName': 'Singh',
          'skills': ['Python', 'Git', 'CSS']
        }
      ]
    }
    this.textshow = this.textshow.bind(this)
    this.sorteditems= this.sorteditems.bind(this)
    
    
  }
  textshow(char)
  {
    this.setState({
      students: [...this.state.students,char]
    })
  }
  sorteditems(){
    let sortedfirstName= this.state.students.sort(function(a,b){
     return a.firstName.localeCompare(b.firstName)})
   this.setState(
     {
       students:sortedfirstName
       })
 }

 
 

  render() {
    return (
      <div className="App">
        <AddStudent studentinfo={this.textshow} />
        <table className="table_content">
          <thead className="table-row">
          <tr>
            <th className="table-heading" onClick={this.sorteditems}>Firstname</th>
            <th className="table-heading">Lastname</th>
            <th className="table-heading">Skills</th>
          </tr>
          </thead>
          <tbody>
            {this.state.students.map((item,index)=>(
            <tr key={index} >
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>
                <ul>
                  {item.skills.map((item,index)=>
                    <ol key={item}>{item}</ol>
                  )
                  }
                  </ul></td>
              </tr>
          ))}
       </tbody>
       </table>

      </div>
    );
  }
}
export default App;








