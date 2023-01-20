import Eliminar from "../assets/basura.png";
import Editar from "../assets/editar.png";
import Swal from "sweetalert2";
const eliminarProducto = ()=>{
	Swal.fire({ 
        	title:'<h1 class="rojo">¿..¡¡Eliminar!!..?</h1>',
            html: '<b class="orange">..¿estas seguro de eliminar este producto..?</b>',
            icon: 'question',
            background: '#0A1C3E',
            backdrop: false,
            timerProgressBar: true,
            toast: true,
            position: 'center-end',
        	
    })
	
}

const ProductsList = ({ dataApi, deleteProduct, editProduct }) => {
	return (
		<div className="container-table">
			<table className="table">
				<tbody className="table_card" >
					{dataApi.map((dataApi, index) => (
						<div className="info_table" key={index}>
                            <h2>Producto</h2>
							<div>
								<h3>Nombre:</h3> 
								{dataApi.name}
							</div>
							<div>
								<h3>Categoría:</h3>
								{dataApi.category}
							</div>
							<div>
								<h3>Precio:</h3>
								<p>$ {dataApi.price}</p>	
							</div>
							<div>
								<h3>Estatus:</h3>
								{dataApi.isAvailable.toString()}
								
							</div>
							<div>
								<h3 className="bt_modify">Editar</h3>
								<button
									className="bt_edit"
									onClick={() => editProduct(dataApi)}
										
									
									
									
								>
									<img
										className="icon_2"
										src={Editar}
										alt=""
									/>
								</button>
							</div>

							<div>
								<h3 className="bt_modify">Borrar</h3>
								<button
									className="bt_trash"
									onClick={() => eliminarProducto().deleteProduct(dataApi.id)}
									 			
								>
									<img
										// onClick={() => }
										className="icon_2"
										src={Eliminar}
										alt=""
									/>
								</button>
							</div>
						</div>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductsList;
