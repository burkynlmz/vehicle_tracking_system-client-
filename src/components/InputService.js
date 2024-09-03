import React, { Fragment, useState } from "react";
import button from "./ListCar";
import { useParams } from "react-router-dom";

const InputService = ({ service }) => {
    const [service_name, setService_name] = useState("");
    const [date, setDate] = useState(null);
    const [current_km, setCurrent_km] = useState(0);
    const [transaction_made, setTransaction_made] = useState("");
    const [additional_note, setAdditional_note] = useState("");
    const params = useParams();
    console.log(params)

    console.log(service)

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:7000/api/services', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    new_car_id: params.id,
                    new_service_name: service_name,
                    new_date: date,
                    new_current_km: current_km,
                    new_transaction_made: transaction_made,
                    new_additional_note: additional_note
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

        } catch (err) {
            console.error(err.message);

        }
    }
    return (
        <Fragment>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Servis Ekle
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Yeni Servis Bilgileri</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" >
                            <form onSubmit={(e) => { onSubmitForm(e) }}>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Servis Adı:</label>
                                    <input type="text" class="form-control" id="service_name" name="service_name" value={service_name} onChange={(e) => setService_name(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Tarih:</label>
                                    <input type="date" class="form-control" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Yapıldığı KM:</label>
                                    <input type="text" class="form-control" id="current_km" name="current_km" value={current_km} onChange={(e) => setCurrent_km(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Yapılan İşlem:</label>
                                    <input type="text" class="form-control" id="trasnsaction_made" name="transaction_made" value={transaction_made} onChange={(e) => setTransaction_made(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">İlave Notlar:</label>
                                    <input type="text" class="form-control" id="additional_note" name="additional_note" value={additional_note} onChange={(e) => setAdditional_note(e.target.value)} />
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                                    <button type="button" class="btn btn-primary" onClick={e => onSubmitForm(e)} data-bs-dismiss="modal">Kaydet</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>)

}

export default InputService;