import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Item, Span } from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operation';
import { selectError, selectIsLoading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleDelete = () => dispatch(deleteContacts({ id, name }));

  return (
    <Span>
      <Item>
        {name}: {number}
      </Item>
      <Button onClick={handleDelete}>
        Delete {isLoading && !error && <Loader />}
      </Button>
    </Span>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
