import styles from 'src/components/Layout/DefaultLayout/Header/Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/asset/image';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/animations/scale.css';
import Popper from '../../components/popper';

import {
    faAngleLeft,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMessage,
    faMoon,
    faPaperPlane,
    faRightFromBracket,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Options from '../../components/opptions';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import SearchAccount from '../../components/searchAccount';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    const datamenu = [
        {
            className: 'opptionn',

            title: '  Xem hồ sơ',
            icon: <FontAwesomeIcon icon={faUser} />,
            userlogin: true,
        },
        {
            className: 'opptionn',

            title: '  Nhận xu',
            icon: <FontAwesomeIcon icon={faCoins} />,
            userlogin: true,
        },
        {
            className: 'opptionn',

            title: '  LIVE Studio',
            icon: <FontAwesomeIcon icon={faVideo} />,
            userlogin: true,
        },
        {
            className: 'opptionn',

            title: '  Cài đặt',
            icon: <FontAwesomeIcon icon={faGear} />,
            userlogin: true,
        },
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
        {
            className: 'opptionn buttobBorder',

            title: '  Log out',
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            userlogin: true,
            buttobBorder: true,
            href: '/logout',
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
                <SearchAccount />
                {/* search */}
                {currentUser ? (
                    <div className={cx('OnUser')}>
                        <button className={cx('upload')}>+ Tải lên</button>
                        <Tippy
                            interactive={true}
                            delay={[100, 200]}
                            render={(attrs) => (
                                <div className={cx('box-messageuser')} tabIndex="-1" {...attrs}>
                                    Tin nhắn
                                </div>
                            )}
                        >
                            <button className={cx('messageuser')}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </Tippy>
                        <Tippy
                            interactive={true}
                            delay={[100, 200]}
                            render={(attrs) => (
                                <div className={cx('box-mailuser')} tabIndex="-1" {...attrs}>
                                    Hộp thư
                                </div>
                            )}
                        >
                            <button className={cx('mailuser')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </Tippy>
                        <Tippy
                            interactive={true}
                            delay={[100, 500]}
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
                                                User={true}
                                            ></Options>
                                        </div>
                                    </Popper>
                                </div>
                            )}
                            onHide={() => setmenu(datamenu)}
                        >
                            <img
                                className={cx('profileUser')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/838a48cd75b7d86d0d1a48fa5a4659bc~c5_100x100.jpeg?x-expires=1676109600&x-signature=uqZfPbMPtQAjlsSx1GdefeSfECw%3D"
                                alt="Hồ sơ"
                            ></img>
                        </Tippy>
                    </div>
                ) : (
                    <div className={cx('login')}>
                        <button className={cx('upload')}>+ Tai len</button>

                        <button className={cx('loginn')}>Dang nhap</button>
                        <Tippy
                            interactive={true}
                            delay={[100, 500]}
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
                                        </div>
                                    </Popper>
                                </div>
                            )}
                            onHide={() => setmenu(datamenu)}
                        >
                            <button className={cx('option')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Tippy>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
