import styles from 'src/components/Layout/components/opptions/opptions.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);
function Options({ datas, onClick, index }) {
    return (
        <div>
            {datas.map((data) => {
                if (!data.href) {
                    if (data.onclick && !data.classNameicon) {
                        return (
                            <div className={data.className} onClick={onClick} key={index}>
                                {data.icon}
                                {data.title}
                            </div>
                        );
                    } else {
                        if (!data.classNameicon) {
                            return (
                                <div className={data.className} key={index}>
                                    {data.icon}
                                    {data.title}
                                </div>
                            );
                        } else {
                            return (
                                <div className={data.className} onClick={onClick} key={index}>
                                    <div className={data.classNameicon}>{data.icon}</div>
                                    {data.title}
                                </div>
                            );
                        }
                    }
                } else {
                    return (
                        <a className={data.className} href={data.href} key={index}>
                            {data.icon}
                            {data.title}
                        </a>
                    );
                }
            })}
        </div>
    );
}

export default Options;
