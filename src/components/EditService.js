import React, { Fragment, useState } from "react";

const EditService = ({ service }) => {
    
    const [service_name, setService_name] = useState(service.service_name);
    const [date, setDate] = useState(service.date);
    const [current_km, setCurrent_km] = useState(service.current_km);
    const [transaction_made, setTransaction_made] = useState(service.transaction_made);
    const [additional_note, setAdditional_note] = useState(service.additional_note);


    // edit data function
    const updateData = async (e) => {

        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:7000/api/services/${service.car_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    new_service_name: service_name,
                    new_date: date,
                    new_current_km: current_km,
                    new_transaction_made: transaction_made,
                    new_additional_note: additional_note
                })
            });

        } catch (err) {
            console.error(err.message);

        }
    }

    return (
        <Fragment>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${service.car_id}`}>Düzenle</button>

            <div class="modal fade" id={`id${service.car_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="carId">{service.car_id}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={(e) => { updateData(e) }}>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Servis İsmi:</label>
                                    <input type="text" class="form-control" id="service_name" name="service_name" value={service_name} onChange={(e) => setService_name(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Tarih:</label>
                                    <input type="date" class="form-control" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Yapılan KM:</label>
                                    <input type="text" class="form-control" id="current_km" name="current_km" value={current_km} onChange={(e) => setCurrent_km(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Yapılan İşlem:</label>
                                    <input type="text" class="form-control" id="transaction_made" name="transaction_made" value={transaction_made} onChange={(e) => setTransaction_made(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">İlave Notlar:</label>
                                    <input type="text" class="form-control" id="additional_note" name="additional_note" value={additional_note} onChange={(e) => setAdditional_note(e.target.value)} />
                                </div>
                                
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
}

export default EditService;