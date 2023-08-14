import { toast } from 'react-hot-toast';
import { Button, Input, Text, Wrap } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContacts } from 'redux/operation';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;

    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return toast.error(`${newContact.name} is already in contacts`);
    }

    dispatch(addContacts(newContact));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Wrap>
        <Text>Name</Text>
        <label>
          <Input
            type="text"
            name="name"
            placeholder="Enter a contact name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces.For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </Wrap>
      <Wrap>
        <Text>Number</Text>
        <label>
          <Input
            type="tel"
            name="number"
            placeholder="Enter a contact number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </Wrap>

      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default ContactForm;
