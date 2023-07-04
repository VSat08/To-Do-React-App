import React from 'react'
import { Form, Label, Input, FormGroup } from 'reactstrap';



function SwitchTheme() {
    return (
        <Form className='px-3 pt-2'>
            <FormGroup>
                <Input type="checkbox" name='selectcolor' />
                <Label check>
                    Light
                </Label>
            </FormGroup>
            <FormGroup>
                <Input type="checkbox" name='selectcolor' />
                <Label check>
                    Dark
                </Label>
            </FormGroup>
            <FormGroup>
                <Input type="checkbox" name='selectcolor' />
                <Label check>
                    Dark 2
                </Label>
            </FormGroup>
            <FormGroup>
                <Input type="checkbox" name='selectcolor' />
                <Label check>
                    Dark 3
                </Label>
            </FormGroup>
        </Form>
    )
}

export default SwitchTheme