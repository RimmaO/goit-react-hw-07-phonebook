import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Item, Span } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operation';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <Span>
      <Item>
        {name}: {number}
      </Item>
      <Button onClick={handleDelete}>Delete</Button>
    </Span>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
