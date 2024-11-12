import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);

  const handleFilterChange = event =>
    dispatch(changeFilter(event.target.value));

  return (
    <div className={css.wrapper}>
      <p className={css.label}>Find contacts by name or number</p>
      <input
        className={css.field}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
