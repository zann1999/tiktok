import styles from 'src/components/Layout/components/popper/popper.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Popper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Popper;
