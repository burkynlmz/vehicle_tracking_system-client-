import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderService from './headerService';
import EditService from './EditService';

const ListService = () => {
    const { id } = useParams(); // Route parametresini almak için useParams kullanılır
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const deleteService = async (id) => {
        console.log(id)
        try {
            const toastTrigger = document.getElementById('liveToastBtn')
            const toastLiveExample = document.getElementById('liveToast')


            const deleteService = await fetch(`http://localhost:7000/api/services/${id}`, {
                method: "DELETE"
            });

            setService(service.filter(service => service.id !== id));
            if (toastTrigger) {
                console.log(toastTrigger)
                console.log(toastLiveExample)
            }

            

        } catch (err) {
            console.error(err.message);
        }
    }


    useEffect(() => {
        // Asenkron veri yükleme işlevi
        const fetchService = async () => {
            try {

                const response = await fetch(`http://localhost:7000/api/services/${id}`, {
                    method: "GET"
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setService(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!service) {
        return <div>No service found</div>;
    }

    return (
        <Fragment>
            <HeaderService />
            <div>
                <table class="table mt-5 text-center">
                    <thead>
                        <tr>
                            <th scope="col">Servis Adı</th>
                            <th scope="col">Tarih</th>
                            <th scope="col">Yapıldığı KM</th>
                            <th scope="col">Yapılan İşlem</th>
                            <th scope="col">İlave Notlar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {service.map(service => (
                            <tr key={service.car_id}>
                                <td>{service.service_name}</td>
                                <td>{service.date}</td>
                                <td>{service.current_km}</td>
                                <td>{service.transaction_made}</td>
                                <td>{service.additional_note}</td>
                                
                                <td>
                                    <EditService service={service} />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        id="liveToast"
                                        onClick={() => deleteService(service.id)}>
                                        Sil
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>

    );
};

export default ListService;
