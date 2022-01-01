import React from 'react'

export default function Info({challangeTitle,...props}) {

    return (
        <div className="container">
        <div class="card text-center border border-info">
            <div className='card-header'>
                <h3>Yazma Hızı Testi</h3>
            </div>
            <div className="card-body">
                <p>Alttaki metni kutucuğa girmeye başladığınızda süreniz başlayacaktır. </p>
                <p>Testi bitirmek 'Enter' tuşunu kullanınız.</p>
                <p>Ayrıca karakter sınırını aştığınızda test otomatik olarak sonlanacaktır.</p>
            </div>
            <div className="card-footer">
                {challangeTitle}
            </div>
        </div>
    </div>
    )
}
