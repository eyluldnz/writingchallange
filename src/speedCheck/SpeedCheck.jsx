import React from 'react';

function SpeedCheck() {
    return (
        <React.Fragment>
            <div className="container">
                <div class="card text-center border border-info">
                    <div className='card-header'>
                        <h3>Yazma Hızı Testi</h3>
                    </div>
                    <div className="card-body">
                        <p>Alttaki metni kutucuğa girmeye başladığınızda süreniz başlayacaktır. </p>
                        <p>Testi bitirmek 'ctrl+enter' kombinasyonunu kullanınız.</p>
                        <p>Ayrıca karakter sınırını aştığınızda test otomatik olarak sonlanacaktır.</p>
                    </div>
                    <div className="card-footer">
                        Hello
                    </div>
                </div>
            </div>
            <hr />
            <div className="input-group mb-3">
                <input type="text" class="form-control" placeholder="Metni Giriniz" />
                <button className="btn btn-outline-secondary" type="button" id='reset' >Temizle</button>
            </div>
            <hr />
            <div className="card-deck">
                <div className="card">
                    <div className="card-body">
                        Süre:
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        Doğruluk:
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        DBK:
                    </div>
                </div>

            </div>
        </React.Fragment>

    );
}

export default SpeedCheck;