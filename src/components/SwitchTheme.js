import React from 'react'
import { Form, Label, Input, FormGroup } from 'reactstrap';


function SwitchTheme() {
    
    return (
        <Form className='px-3 pt-2'>
            <FormGroup>
                <Label check>
                <Input type="radio" name='selectcolor' value='OrangeFun'  style={{'borderRadius':'2px'}}/>
                    Light <small>(<em>To be updated Soon....</em>)</small>
                </Label>
            </FormGroup>
            <FormGroup>
                <Label check>
                    <Input type="radio" name='selectcolor' value='DeepSpace'  style={{'borderRadius':'2px'}} />
                    Dark <small>(<em>To be updated Soon....</em>)</small>
                </Label>
            </FormGroup>
            <FormGroup>
                <Label check>
                <Input type="radio" name='selectcolor' value='Lawrencium' style={{'borderRadius':'2px'}}/>
                    Dark 2 <small>(<em>To be updated Soon....</em>)</small>
                </Label>
            </FormGroup>
            <FormGroup>
                <Label check>
                    <Input type="radio" name='selectcolor' value='Frost'  style={{'borderRadius':'2px'}}/>
                    Dark 3 <small>(<em>To be updated Soon....</em>)</small>
                </Label>
            </FormGroup>
        </Form>
    )
}

export default SwitchTheme