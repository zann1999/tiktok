import styles from 'src/components/Layout/components/searchResultAccount/searchResultAccount.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function SearchResultAccount() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhL6lJksohHGIn8xlCGBoIukbTPl7UEptRPg&usqp=CAU"></img>
            <div className={cx('user')}>
                <h4 className={cx('username')}>Lynhaky123123</h4>
                <h5 className={cx('name')}>Lý Nhã Kỳ</h5>
                <div className={cx('checked')}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </div>
            </div>
        </div>
    );
}

export default SearchResultAccount;
