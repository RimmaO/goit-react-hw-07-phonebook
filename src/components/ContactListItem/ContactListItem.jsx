import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Item, Span } from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operation';
import { toast } from 'react-hot-toast';
import { selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    return () => {
      if (isLoading === id) {
        toast.error(`You have removed ${name} from your contacts`);
      }
    };
  }, [id, isLoading, name]);

  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <Span>
      <Item>
        {name}: {number}
      </Item>
      <Button onClick={handleDelete}>
        Delete {isLoading === id && <Loader />}
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
