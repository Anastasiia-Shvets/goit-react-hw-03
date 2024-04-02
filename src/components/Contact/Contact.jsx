import style from './Contact.module.css'

const Contact = ({ id, name, number, onDelete }) => {
    console.log(id, name, number);
    return (
        <li className={style.contactItem}>
            <div>
                <p>{name}</p>
                <p className={style.number}>{number}</p>
            </div>
            <button className={style.deleteButton} onClick={()=> onDelete(id)}>Delete</button>
        </li>
    )
}
export default Contact