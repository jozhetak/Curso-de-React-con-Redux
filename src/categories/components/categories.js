import React from 'react';
import Category from './category.js';
import './categories.css';
import Search from '../../widgets/containers/search.js';
//Reutilizo media para mostrar los resultados del search
import Media from '../../playlist/components/media';

function Categories(props){
	return (
		<div className="Categories">
			<Search />
			{
				props.search.length > 0 && <Category
									          key='search'
									          title='Resultados'
									          description='Tu busqueda...'
									          playlist={props.search}
									        />
			}
			{
				props.categories.map((item) => {
					return (
						<Category 
							key={item.id} 
							{...item} 
							handleOpenModal = {props.handleOpenModal}
						/>
					)
				} )
			}
		</div>
	)
}

export default Categories;