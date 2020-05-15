import Home from './pages/Home.vue'
import ElTable from './pages/ElTable.vue'
import NotFound from './pages/404.vue'
import About from './pages/About.vue'

export default {
  '/': Home,
  '/404': NotFound,
  '/about': About,
  '/el-table': ElTable
}
