import {createRouter, createWebHashHistory} from "vue-router"

	const routes=[
  	  { path: "/insertar", component: ()=>import('../pages/EstudianteGuardarPage.vue') },
  	  { path: "/guardar", component: ()=>import('../pages/TokenGuardarPage.vue') }
	]

	const router = createRouter({
	    history: createWebHashHistory(),
	    routes
	});

    export default router