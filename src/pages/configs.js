import Home from './Home'
import DefaultLayout from '../containers/DefaultLayout'

const routes = [
    {
        Component: Home,
        secured: false,
        path: '/',
        Layout: DefaultLayout,
    },
]

export default routes
