const routes = [
    {
        path: '/',
        component: () => import('./layout/MainLayout.vue'),
        children: [
            { path: '/', component: () => import('./views/DashboardView.vue') },
            { path: '/scores', component: () => import ('./views/ScoreListingView.vue')}
        ]
    }
]

export default routes
