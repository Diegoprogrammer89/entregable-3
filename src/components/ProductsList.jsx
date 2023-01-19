import Eliminar from "../assets/basura.png"
import Editar from "../assets/editar.png"


const ProductsList = ({ dataApi, deleteProduct, editProduct }) => {
	return (
		<div className="container-table">
			<table className="table">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Categoría</th>
						<th>Precio</th>
						<th>Estatus</th>
						<th>Editar</th>
						<th>Borrar</th>
					</tr>
				</thead>
				<tbody>
					{dataApi.map((dataApi, index) => (
						<tr key={index}>
							<td>{dataApi.name}</td>
							<td>{dataApi.category}</td>
							<td>{dataApi.price}</td>
							<td>{dataApi.isAvailable.toString()}</td>
							<td>
								<button
									className="bt_edit"
									onClick={() => editProduct(dataApi)}
								><img className="icon_2" src={Editar} alt="" /></button>
							</td>
							<td>
								<button
									className="bt_trash"
									onClick={() => deleteProduct(dataApi.id)}
								>
									
									<img className="icon_2" src={Eliminar} alt="" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductsList;
