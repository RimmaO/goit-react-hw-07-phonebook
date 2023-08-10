import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const getFilterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  // console.log(getFilterContacts);

  return (
    <ul>
      {getFilterContacts &&
        getFilterContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
