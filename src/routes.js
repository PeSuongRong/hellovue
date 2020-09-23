import Hello from './components/HelloWorld'
import Tab from './components/Tab'
import ChangeButton from './components/ChangeButton'
import Table from './components/Table'

export const routes = [
    {
        path: '/tab', name: 'tab', component: Tab
    },
    {
        path: '/hello', name: 'Hello', component: Hello
    },
    {
        path: '/table', name: 'table', component: Table
    },
    {
        path: '/button', name: 'button', component: ChangeButton
    }
]