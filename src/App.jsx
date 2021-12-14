import React, { Component, useContext } from 'react'


import Persons from './component/PERSONS/person_map'

import { ToastContainer, toast } from 'react-toastify'
import SimpleContext from './component/Context/SimpleContext'
import 'react-toastify/dist/ReactToastify.css';
import Header from './component/Header/Header'

import React from 'react'

export default function App() {
  // state = {
  //   list_person: [{ name: "ahmad", age: 20, id: 1 }, { name: "reza", age: 20, id: 2 }],
  //   name: '',
  //   age: 0,
  //   show: true

  // }
  const [getListPersons,setListPersons]=useContext([]);
  const [getName,setName]=useContext("");
  const [getAge,setAge]=useContext("");
  const [getShowList,setShowList]=useContext(true);

  const add_persons = () => {

    const { name, age } = this.state;
    const List_P = this.state.list_person.slice()
    // const Random_id=Math.floor(Math.random() *1000);
    const person = { name: name, age: age, id: Math.floor(Math.random() * 1000) };

    List_P.push(person)
    toast.warn('🤞 success to add', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "bg-dark text-light"

    });

    this.setState(this.state.list_person = List_P)
    // console.log(list_person.length);
    this.clear_input();


  }

  const delete_person = (name) => {
    const Person_Backup = [...this.state.list_person];
    const filter_person = Person_Backup.filter(person => person.name != name);
    this.setState({ list_person: filter_person })

  }
  const edite_person = (name_new, age, id) => {
    debugger
    const Person_Backup = [...this.state.list_person];
    const find_Index = Person_Backup.findIndex(person => person.id == id);
    const find_Person = Person_Backup[find_Index];
    if (name_new) {
      find_Person.name = name_new;
    }
    if (age) {
      find_Person.age = age;

    }
    // Person_Backup.push(find_Person);
    this.setState({ list_person: Person_Backup });
    this.clear_input();
  }

  const set_name_age = (prop) => {
    if (prop.name) { this.state.name = prop.name; }
    if (prop.age) { this.state.age = prop.age; }
    console.log(this.state.name + " " + this.state.age);
  }
  const clear_input = () => {
    let input_text = document.querySelectorAll(".Clear");
    input_text.forEach(element => {
      element.value = ""
    });
  }
  const show_or_hiden = () => {
    this.setState({ show: !this.state.show })
    //console.log(this.state.show);
  }

  return (
    <div>

    </div>
  )
}


export default class App extends Component {


  
  // event=>(alert(event.target.value))


  render() {




    const { show } = this.state;
    var Check_show_person = null;
    // // var container_person=document.getElementById("container_person");
    if (show) {
      Check_show_person = <Persons />;

      // //   container_person.classList.add("Height100");
      // //   // Check_show_person = <Persons person={this.state.list_person} delete_person={this.delete_person} edite_person={this.edite_person} />;
    }
    // // else{
    // //   container_person.classList.remove("Height100");
    // // }
    console.log(Check_show_person);

    return (
      <SimpleContext.Provider
        value={{
          state: this.state,
          add_persons: this.add_persons,
          delete_person: this.delete_person,
          edite_person: this.edite_person,
          show_or_hiden: this.show_or_hiden,
          clear_input: this.clear_input,
          set_name_age: this.set_name_age,

        }} >
        <Header />
        {Check_show_person}
        <ToastContainer />
      </SimpleContext.Provider>
    )


  }
}









// class App extends Component {
//   render() {
//     return (
//       <div>
//         ali
//       </div>
//     )
//   }
// }
