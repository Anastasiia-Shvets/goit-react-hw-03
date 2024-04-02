import style from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {
    return (
        <>
            <label className={style.searchLabel}>Find contacts by name</label>
            <input
                className={style.searchInput}
                type="text"
                placeholder="Search contacts"
                value={value}
                onChange={onChange}
            />
        </>

    )
}
export default SearchBox