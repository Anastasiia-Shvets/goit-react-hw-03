import Contact from '../Contact/Contact'
import style from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
    console.log(contacts);
    return (
        <ul className={style.listContact}>
            {contacts.map(contact => (
                <Contact key={contact.id}
                    contact={contact}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                onDelete={onDeleteContact}/>
            ))}
        </ul>
    )
}
export default ContactList