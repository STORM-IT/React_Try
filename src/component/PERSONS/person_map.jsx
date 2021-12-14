import React from 'react'
import App from '../../App';
import SimpleContext from '../Context/SimpleContext';
import { Button, InputGroup, FormControl } from 'react-bootstrap'
debugger
const persons = () => {
    var Name = "";
    var Age = "";
    return (
        <SimpleContext.Consumer>
            {context => (
                <div id="container_person" className=''>
                    {context.ListPersons.map((item) => {
                        return (
                            <div className='box_person'>
                                <p>your name is = {item.name}</p>
                                <p>your age is = {item.age}</p>
                                <InputGroup>
                                <FormControl onChange={event => Name = event.target.value} className="Clear" placeholder={item.name}/>
    
                                    <Button variant='primary' onClick={() => context.edite_person(Name, Age, item.id)} className="btn  w-25">Edite</Button>
                                </InputGroup>
                                <br />
                                <InputGroup>
                                <FormControl onChange={event => Age = event.target.value} className="Clear" placeholder={item.age}/>
                                <Button variant='primary' onClick={() => context.edite_person(Name, Age, item.id)} className="w-25">Edite</Button>
                                </InputGroup>
            
                                
                                <br />
                                <div className='d-grid gap-1'>
                                    <Button variant="danger btn-sm mt-3 w-100" onClick={() => context.delete_person(item.id)} size='sm'>X</Button>
                                </div>


                            </div>
                        )
                    })}
                </div>
            )

            }

        </SimpleContext.Consumer>
    )
}

export default persons;