import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/upload';
import HeaderOnly from '~/components/Layout/HeaderOnly';
import Search from '~/pages/Search';
import Feedback from '~/pages/feedback';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    { path: '/Feedback', component: Feedback, layout: null },
]; // khong can dang nhap van xem duoc
const privateRoutes = []; // can phai dang nhap
export { publicRoutes, privateRoutes };
