import schema from '../schemas/index';
import {fromJS} from 'immutable';

const initialState = fromJS({
	entities: schema.entities,
	categories: schema.result.categories,
	search: '',
})

//Reducer y acciones
function data (state = initialState, action) {
	switch (action.type) {
		case 'SEARCH_VIDEO': {
			// let results = []
			// action.payload.query && (
		    //     state.data.categories.map(category => {
		    //         category.playlist.map(item => {
		    //             if(item.title.toLowerCase().includes(action.payload.query.toLowerCase()) || item.author.toLowerCase().includes(action.payload.query.toLowerCase())){
		    //                 results.push(item)
		    //             }
		    //         })
		    //     })
	        // )
	        // return {
	        // 	...state,
	        // 	search:results
			// }
			// Al estilo de inmutable
			//nos regresara un nuevo mapa inmutable con get('nombre de la clave', valor)
			return state.set('search', action.payload.query)

		}
		default:
			return state
	}
}
export default data;