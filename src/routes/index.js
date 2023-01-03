import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/upload';
import HeaderOnly from '~/components/Layout/HeaderOnly';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
]; // khong can dang nhap van xem duoc
const privateRoutes = []; // can phai dang nhap
export { publicRoutes, privateRoutes };
