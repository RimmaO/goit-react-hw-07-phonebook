import { Input, Text } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <>
      <Text>Find contacts by name</Text>
      <label>
        <Input
          onChange={handleChange}
          value={filter}
          type="text"
          name="filter"
          placeholder="Enter a contact name"
          pattern="[A-Za-z0-9]+"
          title="Name may contain only letters, apostrophe, dash and spaces.For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </>
  );
};

export default Filter;
