import React from "react";
import { Form, FormInput } from "semantic-ui-react";

function PokemonForm({ form, setForm, handleSubmit }) {
  // FUNCTION TO RESET STATE OF THE FORM
  const handleForm = e => setForm({ ...form, [e.target.name]: e.target.value })
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={form.name} onChange={handleForm} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={form.hp} onChange={handleForm} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="spritesFront"
            value={form.spritesFornt}
            onChange={handleForm}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="spritesBack"
            value={form.spritesBack}
            onChange={handleForm}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
