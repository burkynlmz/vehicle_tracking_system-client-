import React, { Fragment, useState } from "react";

const EditCar = ({ car }) => {
    const [plate, setPlate] = useState(car.plate);
    const [user, setUser] = useState(car.user);
    const [brand, setBrand] = useState(car.brand);
    const [model, setModel] = useState(car.model);
    const [model_year, setModel_year] = useState(car.model_year);
    const [telephone_no, setTelephone_no] = useState(car.telephone_no);
    const [expense, setExpense] = useState(car.expense);
    const [traffic_insurance_expiry_date, setTraffic_insurance_expiry_date] = useState(car.traffic_insurance_expiry_date);
    const [kasko_expiration_date, setKasko_expiration_date] = useState(car.kasko_expiration_date);
    const [inspection_end_date, setInspection_end_date] = useState(car.inspection_end_date);

    const [purchase_or_rental_date, setPurchase_or_rental_date] = useState(car.purchase_or_rental_date);
    const [arvento_id, setArvento_id] = useState(car.arvento_id);
    const [annual_km_limit, setAnnual_km_limit] = useState(car.annual_km_limit);


    // edit data function
    const updateData = async (e) => {

        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:7000/api/cars/${car.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    new_plate: plate,
                    new_user: user,
                    new_brand: brand,
                    new_model: model,
                    new_model_year: model_year,
                    new_telephone_no: telephone_no,
                    new_expense: expense,
                    new_traffic_insurance_expiry_date: traffic_insurance_expiry_date,
                    new_kasko_expiration_date: kasko_expiration_date,
                    new_inspection_end_date: inspection_end_date,

                    new_purchase_or_rental_date: purchase_or_rental_date,
                    new_arvento_id: arvento_id,
                    new_annual_km_limit: annual_km_limit

                })
            });


        } catch (err) {
            console.error(err.message);
        }
    }


    return (
        <Fragment>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${car.id}`}>Düzenle</button>

            <div class="modal fade" id={`id${car.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="carPlate">{car.plate}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={(e) => { updateData(e) }}>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Plaka:</label>
                                    <input type="text" class="form-control" id="plate" name="plate" value={plate} onChange={(e) => setPlate(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Kullanıcı:</label>
                                    <input type="text" class="form-control" id="user" name="user" value={user} onChange={(e) => setUser(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Marka:</label>
                                    <input type="text" class="form-control" id="brand" name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Model:</label>
                                    <input type="text" class="form-control" id="model" name="model" value={model} onChange={(e) => setModel(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Model Yılı:</label>
                                    <input type="number" class="form-control" id="model_year" name="model_year" value={model_year} onChange={(e) => setModel_year(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="telephone_no" class="col-form-label">Telefon Numarası:</label>
                                    <input type="tel" class="form-control" id="telephone_no" name="telephone_no" value={telephone_no} onChange={(e) => setTelephone_no(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Gider:</label>
                                    <input type="text" class="form-control" id="expense" name="expense" value={expense} onChange={(e) => setExpense(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Trafik Sigorta Bitiş Tarihi:</label>
                                    <input type="date" class="form-control" id="traffic_insurance_expiry_date" name="traffic_insurance_expiry_date" value={traffic_insurance_expiry_date} onChange={(e) => setTraffic_insurance_expiry_date(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Kasko Bitiş Tarihi:</label>
                                    <input type="date" class="form-control" id="kasko_expiration_date" name="kasko_expiration_date" value={kasko_expiration_date} onChange={(e) => setKasko_expiration_date(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Muayene Bitiş Tarihi:</label>
                                    <input type="date" class="form-control" id="inspection_end_date" name="inspection_end_date" value={inspection_end_date} onChange={(e) => setInspection_end_date(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Satın Alma veya Kiralama Tarihi:</label>
                                    <input type="date" class="form-control" id="purchase_or_rental_date" name="purchase_or_rental_date" value={purchase_or_rental_date} onChange={(e) => setPurchase_or_rental_date(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Yıllık km:</label>
                                    <input type="text" class="form-control" id="annual_km_limit" name="annual_km_limit" value={annual_km_limit} onChange={(e) => setAnnual_km_limit(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Arvento ID:</label>
                                    <input type="number" class="form-control" id="arvento_id" name="arvento_id" value={arvento_id} onChange={(e) => setArvento_id(e.target.value)} />
                                </div>
                                {/* <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="user" name="user" defaultValue={car.user} ></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="message-text" value={car.user} ></textarea>
                                </div> */}
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                                    <button type="submit" class="btn btn-primary" onClick={e => updateData(e)} data-bs-dismiss="modal">Kaydet</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${car.id}`}>
                Edit
            </button>

            <div class="modal" id={`id${car.id}`}>
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Edit Car</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body">
                            <input type="text" className="form-control"  />
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateData(e)}>Edit</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal" >Close</button>
                        </div>

                    </div>
                </div>
            </div> */}
        </Fragment>
    )
};

export default EditCar;