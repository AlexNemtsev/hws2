import s from './Loader.module.css';
import spinner from './Loading.svg';

export const Loader = () => (
    <div className={s.loader}>
        <img src={spinner} alt="" />
    </div>
);
