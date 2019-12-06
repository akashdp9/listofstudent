import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
    // let skill = this.state.skills.split(',');
    // let final_state = this.state;
    // console.log("Skills is"+this.state.skills);
    // final_state['skills'] = skill;
    if(this.state.firstName !== '' && this.state.lastName !== '' && this.state.skills !== ''){
      console.log(this.state.skills);
      this.props.studentinfo(this.state);
      this.setState({
        firstName:'',
        lastName:'',
        skills:'',
        delete:''
      });
    }
  }

 




  render() {
    return (
      <div className="">
        <header className="heading">STUDENT INFORMATION SYSTEM</header>
        <div className='form'>
        <input type='text' className='fieldset' placeholder='First Name' onChange={(event)=>this.setState({firstName:event.target.value})} />
        <input type='text' className='fieldset' placeholder='Last Name'onChange={(event)=>this.setState({lastName:event.target.value})} />
        <input type='text' className='fieldset' placeholder='Skills'onChange={(event)=>this.setState({skills:event.target.value})} /><br></br>
        <button className='btn' onClick={this.addItems}>Submit</button>
        
        
        </div >
        
      </div>
    );
  }
}

class SearchName extends Component{

  render(){
    return(
      <div>
         <input type="text"  className='searchbtn' onChange={(event) => this.props.searchinfo(event.target.value)}  placeholder="Search By Name" ></input>
      </div>
    )}
}

class UpdateStudent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.item.firstName,
      lastName: this.props.item.lastName,
      update: false,
      skills: this.props.item.skills
    };
    this.editDetails = this.editDetails.bind(this);
    this.deleteDetails = this.deleteDetails.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
    this.refreshList=this.refreshList.bind(this)
  }

  editDetails() {
    this.setState(
      {
        update: true

      }
    );
    
  }

  deleteDetails(id){
    axios.delete('http://127.0.0.1:8000/students/delete/'+id.toString()+'/')
    .then(res => {
      this.refreshList();
    });
  }
  updateDetails(id){
    console.log(this.state.skills)
    axios.put('http://127.0.0.1:8000/students/update/'+id.toString()+'/', this.state)
    .then(res => {
      this.refreshList();
    });
    
  }
  refreshList(){
    axios.get('http://127.0.0.1:8000/students/')
  
    .then(res=>{
      this.setState({
        students:res.data
      })
    })
  }


  render() {
    let item = this.props.item;
    return (
      <tr >
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>
                <ul>
                  {item.skills.map((item,index)=>

                    <ol key={index}>{item}</ol>                  
                  )
                  }
                  </ul>
                 
                  </td>
                  <td>
                    <button className="editbtn" onClick={(event) =>this.editDetails(item.id)}>Edit</button>
                    {this.state.update ?
                    (
                      <div className='pop-up-form'>
        
                      <input type='text' className='fields'  value={this.state.firstName} placeholder='First-Name' onChange={(event)=>this.setState({firstName:event.target.value})} />
                      
                      <input type='text' className='fields' value={this.state.lastName} placeholder='Last-Name'onChange={(event)=>this.setState({lastName:event.target.value})} />
                      
                      <input type='text' className='fields' value={this.state.skills} onChange={(event)=>this.setState({skills:(event.target.value).toString()})} />
                      <button className="editbtn" onClick={(event)=>this.updateDetails(item.id)}>Update</button>
              
                      
                      </div>
                    ):null}
                    
                    <button className="editbtn" onClick={(event) => this.deleteDetails(item.id)}>Delete</button>
                  </td>
              </tr>  
    )
  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      students : [
        
      ],
      searchname:''
    }
    this.textshow = this.textshow.bind(this)
    this.sortedfirstname= this.sortedfirstname.bind(this)
    this.sortedlastName= this.sortedlastName.bind(this)
    this.searchItem= this.searchItem.bind(this)
    this.sortedskills= this.sortedskills.bind(this)
    
    
    
  }
  textshow(char)
  {

    let res = axios.post("http://127.0.0.1:8000/students/create/",char)
    console.log(res)
  }
  sortedfirstname(){
    let sortedfirstName= this.state.students.sort(function(a,b){
      let x = a.firstName.toLowerCase();
      let y = b.firstName.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    this.setState(
      {
        students:sortedfirstName
        
        })
      
  }

  sortedlastName(){
    let sortedlastName= this.state.students.sort(function(a,b){
     return a.lastName.localeCompare(b.lastName)})
   this.setState({
       students:sortedlastName
       
       })
     
  }

 sortedskills(){
  let sortedskills = this.state.students.sort(function(a,b){
      if (a.skills.length > b.skills.length) {
        return -1;
      }
      if (a.skills.length < b.skills.length) {
        return 1;
      }
      return 0;
    });
 
 
  this.setState({
    students:sortedskills
    });
  }

 searchItem(text){
  this.setState({
    searchname:text
  })
} 

componentDidMount(){
   axios.get("http://127.0.0.1:8000/students/")
   .then(res=> {
     this.setState({ students: res.data});
   })
}


 
 

  render() {
    return (
      <div className="App">
        <AddStudent studentinfo={this.textshow} />
        <SearchName searchinfo={this.searchItem}/>
        <table className="table_content">
          <thead className="table-row">
          <tr>
            <th className="table-heading" onClick={this.sortedfirstname}>Firstname</th>
            <th className="table-heading" onClick={this.sortedlastName}>Lastname</th>
            <th className="table-heading" onClick={this.sortedskills}>Skills</th>
            <th className="table-heading">Edit/Delete</th>
          </tr>
          </thead>
          <tbody>
          {this.state.students.filter(name => {
                  return name.firstName.toLowerCase().includes(this.state.searchname.toLowerCase()) ||
                  name.lastName.toLowerCase().includes(this.state.searchname.toLowerCase());
                })
            .map((item,index)=>(
              <UpdateStudent key={index} item={item}/>
          ))}
       </tbody>
       </table>

      </div>
    );
  }
}
export default App;