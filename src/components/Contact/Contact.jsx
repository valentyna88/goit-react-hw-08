import { useDispatch } from 'react-redux';
import { MdPerson, MdPhone } from 'react-icons/md';
import { openDeleteModal, openEditModal } from '../../redux/modal/slice';
import css from './Contact.module.css';
import clsx from 'clsx';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(openDeleteModal(contact));
  };

  const handleEditModal = () => {
    dispatch(openEditModal(contact));
  };

  return (
    <div className={css.container}>
      <div>
        <p className={css.contactInfo}>
          <MdPerson className={css.icon} />
          {contact.name}
        </p>
        <p className={css.contactInfo}>
          <MdPhone className={css.icon} />
          {contact.number}
        </p>
      </div>
      <button
        type="button"
        className={clsx(css.btn, css.editBtn)}
        onClick={handleEditModal}
      >
        Edit
      </button>
      <button type="button" className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
