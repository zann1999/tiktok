import styles from 'src/components/Layout/DefaultLayout/Header/Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/asset/image';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/animations/scale.css';
import Popper from '../../components/popper';
import SearchResultAccount from '../../components/searchResultAccount';
import {
    faAngleLeft,
    faBackspace,
    faCircle,
    faCircleQuestion,
    faCircleXmark,
    faClose,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faMoon,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Options from '../../components/opptions';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setsearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1, 2]);
        }, 2000);
    }, []);
    const datamenu = [
        {
            className: 'opptionn',
            title: ' Tiếng Việt',
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            onclick: true,
        },
        {
            className: 'opptionn',

            title: ' Phản hồi và trợ giúp',
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            href: '/feedback',
        },
        {
            className: 'opptionn',

            title: '  Phím tắt trên bàn phím',
            icon: <FontAwesomeIcon icon={faKeyboard} />,
        },
        {
            className: 'opptionn',

            title: '  Chế độ tối',
            icon: <FontAwesomeIcon icon={faMoon} />,
        },
    ];
    const datamenu2 = [
        {
            classNameicon: 'iconbackmenu',
            className: 'opptionn',
            icon: <FontAwesomeIcon icon={faAngleLeft} />,

            title: 'Language',
            onclick: true,
        },
        {
            className: 'opptionn',

            title: 'English',
            code: 'en',
        },
        {
            className: 'opptionn',

            title: 'Tiếng Việt',
            code: 'vi',
        },
    ];
    const [menu, setmenu] = useState(datamenu);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo}></img>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('box-searchResult')} tabIndex="-1" {...attrs}>
                            <Popper>
                                <div>
                                    <h4 className={cx('account')}>Tài khoản</h4>
                                    <SearchResultAccount />
                                    <SearchResultAccount />
                                    <SearchResultAccount />
                                    <SearchResultAccount />
                                </div>
                            </Popper>
                        </div>
                    )}
                >
                    <div className={cx('inputsearch')}>
                        <input type={'text'} placeholder={'Tim kiem tai khoan va video'}></input>
                        <button className={cx('load')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <button className={cx('close')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <button className={cx('search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('login')}>
                    <button className={cx('upload')}>+ Tai len</button>
                    <button className={cx('loginn')}>Dang nhap</button>
                    <Tippy
                        interactive={true}
                        delay={[100, 500000]}
                        render={(attrs) => (
                            <div className={cx('box-option')} tabIndex="-1" {...attrs}>
                                <Popper>
                                    <div className={cx('wrapoption')}>
                                        <Options
                                            datas={menu}
                                            onClick={() => {
                                                if (menu.length === datamenu.length) {
                                                    setmenu(() => datamenu2);
                                                } else {
                                                    setmenu(() => datamenu);
                                                }
                                            }}
                                        ></Options>
                                        {/* <Options className={cx('opptionn')} href={'/feedback'}>
                                            <FontAwesomeIcon icon={faCircleQuestion} />
                                            <> </>Phản hồi và trợ giúp
                                        </Options>
                                        <Options className={cx('opptionn')}>
                                            <FontAwesomeIcon icon={faKeyboard} />
                                            <> </>Phím tắt trên bàn phím
                                        </Options>
                                        <Options className={cx('opptionn')}>
                                            <FontAwesomeIcon icon={faMoon} />
                                            <> </> Chế độ tối
                                        </Options> */}
                                    </div>
                                </Popper>
                            </div>
                        )}
                    >
                        <button className={cx('option')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
