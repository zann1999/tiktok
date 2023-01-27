import styles from 'src/components/Layout/components/opptions/opptions.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);
function Options({ children, className }) {
    return <div className={className}>{children}</div>;
}

export default Options;
