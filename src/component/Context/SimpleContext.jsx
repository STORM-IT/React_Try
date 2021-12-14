import { createContext } from "react";

export default createContext({
    ListPersons:[],
    name:"",
    age:"",
    showList:true,
    add_persons:()=>{},
    delete_person:()=>{},
    edite_person:()=>{},
     show_or_hiden:()=>{},
    clear_input:()=>{},
    set_name_age:()=>{}
});