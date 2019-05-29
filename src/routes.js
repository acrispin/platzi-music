import PmHome from '@/components/Home.vue'
import PmAbout from '@/components/About.vue'
import PmTrackDetail from '@/components/TrackDetail.vue'

const routes = [
    {
        path: '/', 
        component: PmHome, 
        name: 'home'
    },
    {
        path: '/about', 
        component: PmAbout, 
        name: 'about'
    },
    {
        path: '/track/:id', 
        component: PmTrackDetail, 
        name: 'track'
    }
]

export default routes;
