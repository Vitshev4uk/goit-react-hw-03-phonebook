import { Component } from 'react';
import css from 'components/ContactList/ContactList.module.css'
import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    const { filteredContacts, onContactDelete } = this.props;

    return (
      <ul className={css.ContactList}>
        {filteredContacts.map((contact, id) => {
          return (
            <li className={css.ContactListItem} key={id}>
              <p className={css.Name}>
                {contact.name}: {contact.number}
              </p>
              <button
                className={css.BtnSubmit}
                onClick={() => {
                  onContactDelete(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ),
  onContactDelete: PropTypes.func.isRequired
}

export default ContactList;
