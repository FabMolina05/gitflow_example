import { useEffect, useState } from 'react';
import './App.css';

interface Vehiculo {
    id: string;
    modelo: string;
    marca: string;
    placa: string;
}

function App() {
    const [vehiculos, setVehiculos] = useState<Vehiculo[]>();

    useEffect(() => {
        populateVehiculosData();
    }, []);

    const contents = vehiculos === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Placa</th>                    
                </tr>
            </thead>
            <tbody>
                {vehiculos.map(vehiculo =>
                    <tr key={vehiculo.id}>
                      
                        <td>{vehiculo.id}</td>
                        <td>{vehiculo.marca}</td>
                        <td>{vehiculo.modelo}</td>
                        <td>{vehiculo.placa}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tableLabel">Vehiculos</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );

    async function populateVehiculosData() {        
        const response = await fetch('https://localhost:7251/api/Vehiculo');    
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setVehiculos(data);
        }
    }
}

export default App;