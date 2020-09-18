import React from 'react'
import Cook from '../cook.jpg'
import Patuh from '../patuh.jpg'
import RumahSakit from '../rumahsakit.jpg'
import Solusi from '../solusi.jpg'


class Beranda extends React.Component {
    render() {
        return(
            
            <div>
                <button type="button" class="btn btn-danger">
                <h2>Beranda</h2>
                </button>
  
               
                <center>

                <h1>Covid-19 - Indonesia: Puncak gelombang pertama 'yang tak berujung', mengapa protokol kesehatan sulit dipatuhi? </h1>
                <img src={Patuh} alt='patuh'/>
              

                <h6>Gelombang pertama penyebaran virus corona tidak menunjukkan akhir. Penyebabnya karena masyarakat kurang disiplin dalam menerapkan protokol kesehatan serta akibat dari relaksasi pembatasan sosial yang terlalu dini, kata peneliti dari Institut Teknologi Bandung.

Peningkatan kasus tersebut menurut Pengurus Pusat Perhimpunan Manajer Pelayanan Kesehatan Indonesia menyebabkan rumah sakit mengalami kelebihan kapasitas, dari ambang batas maksimal 65% menjadi kini mencapai 85%.

Kurang taatnya masyarakat menjalankan protokol kesehatan disebabkan empat hal yaitu, keterbatasan pengetahuan, tidak ada pengalaman dan pengelihatan, serta penyebaran berita bohong, kata pengamat sosial dari Universitas Indonesia. </h6>

                <h1>Puncak gelombang pertama yang tak berujung</h1>

                <h6>Sejak diumumkan pertama kali kasus virus corona di Indonesia oleh Presiden Joko Widodo pada Maret lalu, penyebaran kasus virus corona tidak menunjukkan penurunan hingga kini.

Bahkan, Kepala Pusat Pemodelan Matematika dan Simulasi Institut Teknologi Bandung (ITB), Nuning Nuraini, belum bisa melihat kapan puncak dan ujung dari penyebaran gelombang pertama. 
                  </h6>
                  <img src={Cook} alt='cook'/>
                  <h6>Indonesia menjadi negara di Asia Tenggara yang memiliki angka kematian tertinggi yaitu 9.100 orang dan total kasus konfirmasi positif mencapai 228.993 per data Rabu (16/09).

Sebelumnya pada Juli lalu, Presiden Joko Widodo memprediksi puncak kasus virus corona terjadi pada Agustus hingga September.

Prediksi juga dilakukan oleh Badan Intelijen Negara (BIN) yang menganalisis puncak jatuh pada akhir Juni hingga Juli. Gugus Tugas Percepatan Penanganan Covid-19 juga memperkirakan puncak pandemi akan dimulai pada awal Mei dan berakhir awal Juni.

Namun prediksi tersebut meleset dan ujung puncak virus corona belum terlihat. </h6>

                  <h1>Rumah sakit kelebihan kapasitas</h1>

                  <img src={RumahSakit} alt='rumahsakit'/>
                  <h6>Penambahan kasus akibat ketidakpatuhan masyarakat menerapkan protokol kesehatan berdampak langsung pada peningkatan okupansi rumah sakit (RS).

"Kapasitas 65% saja sudah warning, tapi sekarang sudah 85% overcapacity yang berdampak pada mutu layanan," kata pengurus Pusat Perhimpunan Manajer Pelayanan Kesehatan Indonesia (Permapkin) Hermawan Saputra.

Hermawan menyebut, di Indonesia terdapat sekitar 3.000 RS yang mana sekitar 1.000 berada di Jabodetabek, atau 2.000 RS ada di Pulau Jawa.

Tingkat okupansi merujuk pada fasilitas seperti ruang isolasi dan ruang ICU (Intensive Care Unit) di sebuah rumah sakit yang merawat pasien corona dengan gejala sedang hingga berat.

Selain kelebihan kapasitas, menurut data Ikatan Dokter Indonesia, 115 dokter meninggal dunia akibat pandemi Covid-19.</h6>

                <h1>Apa solusinya? </h1>
                <img src={Solusi} alt='Solusi'/>

                <h6>"Solusinya adalah community-based fighting initiative, atau perang akar rumput melawan Covid. Contoh, kalau mulai dari keluarga, RT, dan kampung ada kesadaran kolektif menegakan protokol kesehatan dan menyediakan tempat isolasi mandiri, tidak ada stigmatisasi, kebutuhan pokok dipenuhi, menjaga kebersihan bersama maka akan sangat terminimalisir kematian dan pasien di RS," kata Hermawan.

"Pertama adalah sosialisasi tiada henti dan tidak pernah bosan. Kedua, edukasi tokoh publik, karena karakter masyarakat patron-klien, untuk memberikan info benar dan positif kepada pengikutnya. Ketiga, demonstrasi simbolik seperti menunjukan peti, baju APD, dll di tempat umum untuk meningkatkan sense of crisis yang telah memudar, dan terakhir adalah terus melakukan isolasi bagi yang positif," kata Devie. </h6>
                  </center>
                

               
                
            </div>
        )
    }
}

export default Beranda;