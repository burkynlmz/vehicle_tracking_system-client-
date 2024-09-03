import React, { Fragment, useState } from "react";

const InputCar = ({ car }) => {

    const [plate, setPlate] = useState("");
    const [user, setUser] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [model_year, setModel_year] = useState(0);
    const [telephone_no, setTelephone_no] = useState("");
    const [expense, setExpense] = useState(0);
    const [traffic_insurance_expiry_date, setTraffic_insurance_expiry_date] = useState(null);
    const [kasko_expiration_date, setKasko_expiration_date] = useState(null);
    const [inspection_end_date, setInspection_end_date] = useState(null);
    const [purchase_or_rental_date, setPurchase_or_rental_date] = useState(null);
    const [arvento_id, setArvento_id] = useState(0);
    const [annual_km_limit, setAnnual_km_limit] = useState(0);


    const onSubmitForm = async (e) => {
        e.preventDefault();
        console.log(plate)
        try {
            const response = await fetch('http://localhost:7000/api/cars', {
                method: "POST",
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
                    new_annual_km_limit: annual_km_limit,
                    new_arvento_id: arvento_id
                })
            });

        } catch (err) {
            console.error(err.message);

        }
    }

    return (
        <Fragment>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Araba Ekle
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Yeni Araba</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" >
                            <form onSubmit={(e) => { onSubmitForm(e) }}>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Plaka:</label>
                                    <input type="text" class="form-control" id="plate" name="plate" placeholder="örnek: 06 OSKA 0606" value={plate} onChange={(e) => setPlate(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Kullanıcı:</label>
                                    <input type="text" class="form-control" id="user" name="user" placeholder="örnek: Ricardo Quaresma" value={user} onChange={(e) => setUser(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Marka:</label>
                                    <input type="text" class="form-control" id="marka" name="marka" placeholder="örnek: OSKA" value={brand} onChange={(e) => setBrand(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Model:</label>
                                    <input type="text" class="form-control" id="model" name="model" placeholder="örnek: Multijet Sport Eniyistajyer" value={model} onChange={(e) => setModel(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Modal Yılı:</label>
                                    <input type="number" class="form-control" id="model_year" name="model_year" placeholder="örnek: 1903" value={model_year} onChange={(e) => setModel_year(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="telephone_no" class="col-form-label">Telefon Numarası:</label>
                                    <input type="tel" class="form-control" id="telephone_no" name="telephone_no"  value={telephone_no} onChange={(e) => setTelephone_no(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Gider:</label>
                                    <input type="text" class="form-control" id="expense" name="expense" placeholder="0000" value={expense} onChange={(e) => setExpense(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Trafik Sigorta Bitiş Tarihi:</label>
                                    <input type="date" class="form-control" id="traffic_insurance_expiry_date" name="traffic_insurance_expiry_date" placeholder="Yıl-Ay-Gün" value={traffic_insurance_expiry_date} onChange={(e) => setTraffic_insurance_expiry_date(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Kasko Bitiş Tarihi:</label>
                                    <input type="date" class="form-control" id="kasko_expiration_date" name="kasko_expiration_date" placeholder="Yıl-Ay-Gün" value={kasko_expiration_date} onChange={(e) => setKasko_expiration_date(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Muayene Bitiş Tarihi:</label>
                                    <input type="date" class="form-control" id="inspection_end_date" name="inspection_end_date" placeholder="Yıl-Ay-Gün" value={inspection_end_date} onChange={(e) => setInspection_end_date(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Satın Alma veya Kiralama Tarihi:</label>
                                    <input type="date" class="form-control" id="purchase_or_rental_date" name="purchase_or_rental_date" placeholder="Yıl-Ay-Gün" value={purchase_or_rental_date} onChange={(e) => setPurchase_or_rental_date(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Yıllık km:</label>
                                    <input type="text" class="form-control" id="annual_km_limit" name="annual_km_limit" placeholder="0000" value={annual_km_limit} onChange={(e) => setAnnual_km_limit(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Arvento ID:</label>
                                    <input type="number" class="form-control" id="arvento_id" name="arvento_id" placeholder="0000" value={arvento_id} onChange={(e) => setArvento_id(e.target.value)} />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                                    <button type="submit" class="btn btn-primary" onClick={e => onSubmitForm(e)} data-bs-dismiss="modal">Kaydet</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )



}




export default InputCar;