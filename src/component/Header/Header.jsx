import {React,useContext} from 'react'
import { Button, Alert, Badge } from 'react-bootstrap'

import SimpleContext from '../Context/SimpleContext'
const Header = () => {
    const context=useContext(SimpleContext);
    const {ListPersons}=context;
    var Color_Badge="";
    if (ListPersons.length>5) {
        Color_Badge="success"
    }
    else if (ListPersons.length <3) {
        Color_Badge="danger"
    }
    else{
        Color_Badge="warning"
    }
    return (<SimpleContext.Consumer>
        {context => (
            <form action='#' onSubmit={event => event.preventDefault()} className="box_obj">
                <Alert className='' id='Close'>
                    <p> Please write your information and click <kbd className="bg-success">Add Person</kbd></p>
                </Alert>
                <br />
                <Badge pill bg='light' className='p-2 display-3' >Youre lenght list persons is <Badge bg={Color_Badge}>{context.ListPersons.length}</Badge> 👀</Badge>
                <br />
                <input onChange={event => { context.set_name_age({ name: event.target.value }) }} type="text" name="" className="Clear" id="" placeholder="please type your name" />
                <br />
                <input onChange={event => { context.set_name_age({ age: event.target.value }) }} type="text" name="" className="Clear" id="" placeholder="please type your age" />
                <br />
                <Button type='submit' onClick={context.add_persons} className="btn btn-success mb-5 mt-2">Add persons</Button>
                <br />
                <br />
                <Button onClick={context.show_or_hiden} className={context.showList ? "btn-warning" : "btn-info"}>
                    {context.showList ? "HIDEN" : "SHOW"}
                </Button>
                <hr />
            </form>
        )}
    </SimpleContext.Consumer>
    )
}
export default Header


