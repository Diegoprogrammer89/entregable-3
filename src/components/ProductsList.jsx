const ProductsList = ({ dataApi, deleteProduct, editProduct }) => {
    return (
        <div className="container-table">
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Categoria</th>
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
                                >AQUI
                                    <i className="bx bx-edit-alt"></i>
                                </button>
                            </td>
                            <td>
                                <button
                                    className="bt_trash"
                                    onClick={() => deleteProduct(dataApi.id)}
                                    ><h1>aquiiiiii</h1>
                                    <i className="bx bxs-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
  };
  
  export default ProductsList