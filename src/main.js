import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
    Button,
    Swipe,
    SwipeItem,
    CountDown,
    Tab,
    Tabs,
    Tabbar,
    TabbarItem,
    Icon,
    Sidebar,
    SidebarItem,
    NavBar,
    Badge,
    Grid,
    GridItem,
    Image as VanImage,
    Overlay
} from 'vant';

const app = createApp(App)
app.use(Swipe).use(SwipeItem).use(CountDown).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem)
    .use(Icon).use(Sidebar).use(SidebarItem).use(NavBar).use(Badge).use(Button).use(Grid)
    .use(GridItem).use(VanImage).use(Overlay)
app.use(store).use(router).mount('#app')