import React, { Fragment, useEffect, useState } from "react";

import EditCar from "./EditCar";
import InputCar from "./InputCar";
import { Link, useNavigate } from "react-router-dom";
import Header from "./header";

const ListCars = () => {

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    // delete car function
    const deleteCar = async (id) => {
        console.log(id)
        try {
            const toastTrigger = document.getElementById('liveToastBtn')
            const toastLiveExample = document.getElementById('liveToast')


            const deleteCar = await fetch(`http://localhost:7000/api/cars/${id}`, {
                method: "DELETE"
            });

            setCars(cars.filter(car => car.id !== id));
            if (toastTrigger) {
                console.log(toastTrigger)
                console.log(toastLiveExample)
            }

            

        } catch (err) {
            console.error(err.message);
        }
    }

    const getCars = async () => {
        try {
            const response = await fetch("http://localhost:7000/api/cars", {
                method: "GET"
            });
            const jsonData = await response.json();

            setCars(jsonData);
            
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        console.log('effect')
        getCars();
    }, []);



    return (
        <Fragment>
            <Header />
            <div>
                <div class="toast-container position-fixed bottom-0 end-0 p-3">
                    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <strong class="me-auto">Başarılı!</strong>
                            <small>15:36</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Araba silme işleminiz başarılı bir şekilde olmuştur.
                        </div>
                    </div>
                </div>
                <table class="table mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Plaka</th>
                            <th>Kullanıcı</th>
                            <th>Marka</th>
                            <th>Model</th>
                            <th>Model Yılı</th>
                            <th>Telefon Numarası</th>
                            <th>Gider</th>
                            <th>Trafik Sigorta Bitiş Tarihi</th>
                            <th>Kasko Bitiş Tarihi</th>
                            <th>Muayene Bitiş Tarihi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map(car => (
                            <tr key={car.id}>
                                <td>{car.plate}</td>
                                <td>{car.user}</td>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.model_year}</td>
                                <td>{car.telephone_no}</td>
                                <td>{car.expense}</td>
                                <td>{car.traffic_insurance_expiry_date}</td>
                                <td>{car.kasko_expiration_date}</td>
                                <td>{car.inspection_end_date}</td>

                                <td>
                                    <EditCar car={car} />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => { navigate('/service/' + car.id) }}
                                    >
                                        Detay
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        id="liveToast"
                                        onClick={() => deleteCar(car.id)}>
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

export default ListCars

// CAR.İD