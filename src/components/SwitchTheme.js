import React from 'react'
import { Form, Label, Input, FormGroup } from 'reactstrap';


function SwitchTheme() {
    
    return (
        <Form className='px-3 pt-2'>
            <FormGroup>
                <Label check>
                <Input type="radio" name='selectcolor' value='OrangeFun'  style={{'borderRadius':'2px'}}/>
                    Light
                </Label>
            </FormGroup>
            <FormGroup>
                <Label check>
                    <Input type="radio" name='selectcolor' value='DeepSpace'  style={{'borderRadius':'2px'}}/>
                    Dark
                </Label>
            </FormGroup>
            <FormGroup>
                <Label check>
                <Input type="radio" name='selectcolor' value='Lawrencium' style={{'borderRadius':'2px'}}/>
                    Dark 2
                </Label>
            </FormGroup>
            <FormGroup>
                <Label check>
                    <Input type="radio" name='selectcolor' value='Frost'  style={{'borderRadius':'2px'}}/>
                    Dark 3
                </Label>
            </FormGroup>
        </Form>
    )
}

export default SwitchTheme