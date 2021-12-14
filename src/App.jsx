import React, { Component, useState } from 'react'


import Persons from './component/PERSONS/person_map'

import { ToastContainer, toast } from 'react-toastify'
import SimpleContext from './component/Context/SimpleContext'
import 'react-toastify/dist/ReactToastify.css';
import Header from './component/Header/Header'


export default function App() {
  // state = {
  //   list_person: [{ name: "ahmad", age: 20, id: 1 }, { name: "reza", age: 20, id: 2 }],
  //   name: '',
  //   age: 0,
  //   show: true

  // }
  const [getListPersons, setListPersons] = useState([]);
  const [getName, setName] = useState("");
  const [getAge, setAge] = useState("");
  const [getShowList, setShowList] = useState(true);

  const add_persons = () => {

    const name = getName;
    const age = getAge;
    const List_P = getListPersons.slice()
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

    setListPersons(List_P);
    // console.log(list_person.length);
    clear_input();


  }

  const delete_person = (id) => {
    const Person_Backup = getListPersons;
    const filter_person = Person_Backup.filter(person => person.id != id);
    setListPersons(filter_person)

  }
  const edite_person = (name_new, age, id) => {
    debugger
    const Person_Backup = getListPersons;
    const find_Index = Person_Backup.findIndex(person => person.id == id);
    const find_Person = Person_Backup[find_Index];
    if (name_new) {
      find_Person.name = name_new;
    }
    if (age) {
      find_Person.age = age;

    }
    // Person_Backup.push(find_Person);
    setListPersons(Person_Backup);
    clear_input();
  }

  const set_name_age = (prop) => {
    if (prop.name) { setName(prop.name) }
    if (prop.age) { setAge(prop.age) }
    //console.log(this.state.name + " " + this.state.age);
  }
  const clear_input = () => {
    let input_text = document.querySelectorAll(".Clear");
    input_text.forEach(element => {
      element.value = ""
    });
  }
  const show_or_hiden = () => {
    // this.setState(setShowList = !getShowList)
    setShowList (!getShowList); 
    // console.log(this.state.show);
  }

  const  show  = getShowList;
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
  //console.log(Check_show_person);
  return (

    <SimpleContext.Provider
      value={{
        ListPersons:getListPersons ,
        name:getName ,
        age: getAge,
        showList:getShowList ,
        add_persons: add_persons,
        delete_person: delete_person,
        edite_person: edite_person,
        show_or_hiden: show_or_hiden,
        clear_input: clear_input,
        set_name_age: set_name_age,

      }} >
      <Header />
      {Check_show_person}
      <ToastContainer />
    </SimpleContext.Provider>

  )
}
