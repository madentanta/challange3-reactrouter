import React from 'react'
import Npp from '../npp.jpg'
import Grafik from '../grafik.jpg'
import Grifik from '../grifik.jpg'
class Image extends React.Component {
    render() {
        return(
            <div>
 <button type="button" class="btn btn-danger">
                <h2>informasi</h2>
                </button>
  <center>
               <h1>Pandemi COVID-19 di Indonesia: Catatan Kasus Harian Tertinggi hingga 41 Wilayah Masuk Zona Merah </h1>


                <center>
                <img src={Npp} alt='npp'/>
                </center>

                <h6>Sebagai informasi, kasus harian merujuk pada kasus virus corona yang dilaporkan dalam satu hari atau juga biasa disebut sebagai kasus baru.

Pada Rabu ini, Satgas COVID-19 melaporkan 3.963 temuan kasus baru. Diketahui ini merupakan laporan kasus harian tertinggi yang pernah dicatat sejak 2 Maret 2020 silam.

Laporan ini pun menambah jumlah kasus infeksi virus corona di Tanah Air menjadi 228.993 orang.

Lebih lanjut, dirincikan bahwa dari keseluruhan kasus tersebut, sebanyak 164.101 pasien telah dinyatakan sembuh.

Sementara, kasus kematian terkait pandemi ini berada pada angka 9.100 jiwa.

Pemerintah juga menyampaikan bahwa hingga Rabu ini masih ada 55.792 kasus aktif.

Perlu diketahui, kasus aktif merupakan kasus atau pasien virus corona yang masih dalam masa perawatan.

</h6>

<img src={Grafik} alt='grafik'/>
<h6>Grafik perkembangan kasus COVID-19 di Indonesia per 16 September 2020 (covid19.go.id)
 </h6>
 <img src={Grifik} alt='grifik'/>
 <h6>Grafik perkembangan COVID-19 per hari di Indonesia dari 2 Maret hingga 16 September 2020 (covid19.go.id)
 </h6>

                </center>
            </div>
        )
    }
}

export default Image;