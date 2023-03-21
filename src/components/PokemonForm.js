import React from "react";
import { Form, FormInput } from "semantic-ui-react";

function PokemonForm({ form, setForm, handleSubmit }) {
// FUNCTION TO RESET STATE OF THE FORM
  const handleForm = e => {
    if(e.target.name === 'front' || e.target.name === 'back') {
      setForm({...form, })
      // console.log(form.sprites)
    } else {
      setForm({...form, [e.target.name]: e.target.value})
    }
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={ handleSubmit }
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={ form.name } onChange={ handleForm } />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={ form.hp } onChange={ handleForm } />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={ form.fornt }
            onChange={ handleForm }
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={ form.back }
            onChange={ handleForm }
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
