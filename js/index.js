let div = document.createElement('div');
div.className = 'container w-50 py-5';
let div2 = document.createElement('div');
div2.className = 'row justify-content-center text-center fixed-top bg-header';

let col = document.createElement('div');
col.className = 'col-md-11';
col.innerHTML = '<img src="asset/img/logo.webp" alt="Logo" width="120px" class="img-fluid border-bottom m-2">';

div.append(div2);
div2.append(col);

document.querySelector('#app').append(div);

// ==================================================
let container = document.createElement('div');
container.className = 'container';
let row = document.createElement('div');
row.className = 'row justify-content-center px-2';

let button = document.createElement('div');
button.className = 'd-flex col-md-8 col-lg-9';
button.innerHTML = `<a href="#" target="_blank" class="btn btn-outline-warning rounded-pill w-100 my-1 m-2">Login</a>
<a href="#" class="btn btn-outline-warning rounded-pill w-100 my-1 m-2">Register</a>`;

let colRef = document.createElement('div');
colRef.className = 'col-sm-11 col-md-8 col-lg-9';
colRef.innerHTML = `<a href="https://13.213.113.183/mobile/register" rel="nofollow noreferrer" target="_blank"><button type="login" class="button w-100 text-black fs-5 my-3">
Big77 Daftar Situs Judi 138 Slot Online Terpercaya Dan Terbaik</button></a>`;

let rowbank = document.createElement('div');
rowbank.className = 'row justify-content-center text-center mb-4';
// let colBom = document.createElement('div');
// colBom.className = 'col-md-8 col-lg-9';
// colBom.innerHTML = '<img src="asset/img/bom.png" alt="Logo" width="150px" class="img-fluid m-2">';

let colBank = document.createElement('div');
colBank.className = 'col-sm-11 col-md-7 col-lg-8';
let borderBank = document.createElement('div');
borderBank.className = 'border-bank p-3';
borderBank.innerHTML = ' <img src="asset/img/bank.webp" alt="Bank Lokal" class="img-fluid" width="792px" height="auto" />';

container.append(row, rowbank);
row.append(button, colRef);

rowbank.append(colBank);
colBank.append(borderBank);

// ==================================================

document.querySelector('#app').append(container);

let containerTable = document.createElement('div');
containerTable.className = 'container';
let rowTable = document.createElement('div');
rowTable.className = 'row justify-content-center text-white px-3';
let divColTable = document.createElement('div');
divColTable.className = 'col-md-8 col-lg-9';
let divTable = document.createElement('div');
divTable.className = 'table';
divTable.id = 'table';


let table = document.createElement('table');
table.className = 'list_table';
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

containerTable.append(rowTable);
rowTable.append(divColTable);
divColTable.append(divTable);
divTable.append(table);
table.append(thead, tbody);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Tentang Situs Slot Online BIG77";
heading_1.setAttribute("colspan", "3");

row_1.appendChild(heading_1);
thead.appendChild(row_1);

// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.setAttribute("class", "p-2");
row_2_data_1.innerHTML = "Nama Situs";
let row_2_data_2 = document.createElement('td');
row_2_data_2.setAttribute("class", "p-2");
row_2_data_2.innerHTML = '<a href="https://13.213.113.183/" title="Big77" rel="noopener"target="_blank">Big77</a>';

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
tbody.appendChild(row_2);

// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.setAttribute("class", "p-2");
row_3_data_1.innerHTML = "Jenis Permainan";
let row_3_data_2 = document.createElement('td');
row_3_data_2.setAttribute("class", "p-2");
row_3_data_2.innerHTML = '<a href="#" title="Slot Online">Slot Online</a></td>';

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
tbody.appendChild(row_3);

// Creating and adding data to third row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.setAttribute("class", "p-2");
row_4_data_1.innerHTML = "Minimal Deposit";
let row_4_data_2 = document.createElement('td');
row_4_data_2.setAttribute("class", "p-2");
row_4_data_2.innerHTML = 'Rp20.000';

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
tbody.appendChild(row_4);

// Creating and adding data to third row of the table
let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.setAttribute("class", "p-2");
row_5_data_1.innerHTML = "Metode Deposit";
let row_5_data_2 = document.createElement('td');
row_5_data_2.setAttribute("class", "p-2");
row_5_data_2.innerHTML = 'Transfer Bank, E-Wallet/QRIS, Pulsa';

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
tbody.appendChild(row_5);

// Creating and adding data to third row of the table
let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.setAttribute("class", "p-2");
row_6_data_1.innerHTML = "Mata Uang";
let row_6_data_2 = document.createElement('td');
row_6_data_2.setAttribute("class", "p-2");
row_6_data_2.innerHTML = 'IDR (Indonesian Rupiah)';

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
tbody.appendChild(row_6);

// Creating and adding data to third row of the table
let row_7 = document.createElement('tr');
let row_7_data_1 = document.createElement('td');
row_7_data_1.setAttribute("class", "p-2");
row_7_data_1.innerHTML = "Jam Operasional";
let row_7_data_2 = document.createElement('td');
row_7_data_2.setAttribute("class", "p-2");
row_7_data_2.innerHTML = '24 Jam Online';

row_7.appendChild(row_7_data_1);
row_7.appendChild(row_7_data_2);
tbody.appendChild(row_7);

// Creating and adding data to third row of the table
let row_8 = document.createElement('tr');
let row_8_data_1 = document.createElement('td');
row_8_data_1.setAttribute("class", "p-2");
row_8_data_1.innerHTML = "Daftar Sekarang";
let row_8_data_2 = document.createElement('td');
row_8_data_2.setAttribute("class", "p-2");
row_8_data_2.innerHTML = '<a href="https://13.213.113.183/mobile/register" rel="nofollow noopener"target="_blank" title="Daftar Slot Online BomSlot">Klik Disini</a>';

row_8.appendChild(row_8_data_1);
row_8.appendChild(row_8_data_2);
tbody.appendChild(row_8);
// Adding the entire table to the body tag
document.querySelector('#app').appendChild(containerTable);


let containerContent = document.createElement('div');
containerContent.setAttribute("class", "container bg-card py-4");

let rowContent = document.createElement('div');
rowContent.setAttribute("class", "row justify-content-center text-white");

let colBanner = document.createElement('div');
colBanner.setAttribute("class", "col-md-8 col-lg-12 text-center");
let titleBanner = document.createElement('p');
titleBanner.setAttribute("class", "fs-4");
titleBanner.innerHTML = 'Situs Slot Online Terpercaya Indonesia';

let imgBanner = document.createElement('div');
imgBanner.setAttribute("class", "text-center");
imgBanner.innerHTML = '<img src="asset/img/bomslot-3.jpg" class="img-fluid border" alt="banner"><hr style="color: #FFFFFF;">';

let colBody = document.createElement('div');
colBody.setAttribute("class", "col-md-8 col-lg-11");

let titleBody = document.createElement('h1');
titleBody.setAttribute("class", "text-warning text-center");
titleBody.innerHTML = 'Big77 Situs Judi Slot Gacor Online & Slot Online Terpercaya';

let divBody = document.createElement('div');
divBody.setAttribute("class", "text-white justify");

let descBody = document.createElement('p');
descBody.innerHTML = `Big77 merupakan situs judi slot gacor online yang resmi saat ini dengan ribuan permainan slot online paling atraktif saat ini dan selalu menemani anda selama 24 jam penuh. 
Saat ini pemain dapat dengan mudah untuk mengakses situs slot online Big77 dengan berbagai link alternatif yang kami sediakan untuk anda. Big 77 slot sudah hadir selama 5 tahun dengan harapan 
kami untuk membantu para member mendapatkan income tambahan karena di masa pandemi yang tidak menentu ini untuk mendapatkan uang tambahan merupakan hal yang sulit. <br><br>
Ada begitu banyak di luar sana daftar situs judi slot gacor online yang beredar tentunya kalian bingung manakah yang bisa dipercaya. Anda tidak perlu khawatir Big77 sudah dicap sebagai daftar 
situs judi slot online terpercaya dengan layanan terbaik. Ada begitu banyak pilihan provider yang bisa kalian dapatkan ketika bergabung dengan kami, tentu hal tersebut menjadi keunggulan kami dibanding situs slot lain. <br><br>
Keunggulan Big77 sangat besar dibandingkan dengan situs judi slot lain. Seperti keamanan server serta jaringan kami yang sudah sangat memadai dengan teknologi saat ini. Big77 slot dijuluki juga sebagai Judi Slot 
Gacor karena kami selalu memberikan bocoran slot gacor hari ini secara cuma-cuma yang bisa kalian dapatkan ketika bertanya kepada customer service kami perihal permainan dengan rtp tertinggi hari ini.
`;

let titleBody_2 = document.createElement('h2');
titleBody_2.setAttribute("class", "text-warning text-center");
titleBody_2.innerHTML = '12 Daftar Situs Judi Slot Online Terbaik Dan Terpercaya Big77';

let divBody_2 = document.createElement('div');
divBody_2.setAttribute("class", "text-white justify");

let descBody_2 = document.createElement('p');
descBody_2.innerHTML = `Ketika anda memasuki situs judi slot online terbaik yaitu Big77 ada begitu banyak pilihan provider slot online yang bisa anda coba. Situs Big77 sudah bekerja sama dengan Provider Slot Terbaik  selama 
beberapa tahun belakang ini. Big77 akan menjelaskan kepada anda provider apa saja yang bisa anda dapatkan ketika menjadi member resmi kami. Berikut 14 Daftar situs judi slot online terbaik dan terpercaya yang bisa anda coba : <br><br>
<ul>
<li><b>Judi Slot Online Pragmatic Play</b><br>
Pragmatic Play adalah provider slot yang memiliki berbagai permainan slot paling tenar saat ini yang bisa anda coba mainkan setiap hari tanpa letih seperti Sweet Bonanza, Starlight Princess, Gates of Olympus. 
Hampir semua permainan yang dihadirkan selalu mudah anda jumpai di youtube dan dimainkan oleh artis-artis ternama.</li><br>
<li><b>Judi Slot Online PGSOFT</b><br>
PGSOFT merupakan provider slot online dengan nuansa permainan berbeda dengan Pragmatic Play, anda bisa menjumpai ratusan permainan yang mudah menang dan bisa anda mainkan dimanapun dan kapan saja.</li><br>
<li><b>Judi Slot Online Microgaming</b><br>
Microgaming cukup menjadi primadona di berbagai website, provider yang satu ini telah memiliki berbagai permainan yang sangat dicintai para pemain slot online. RTP permainan dari provider ini berkisar dari 93.2% hingga 95.9%.</li><br>
<li><b>Judi Slot Online Habanero</b><br>
Selanjutnya adalah provider habanero, provider slot online terbaru ini menghadirkan ragam permainan judi online yang sangat menarik dan sayang untuk dilewatkan. Adapun keunggulan dari provider ini adalah puluhan permainan yang sangat gampang untuk dengan RTP sangat tinggi.</li><br>
<li><b>Judi Slot Online Spadegaming</b><br>
Tentu hampir semua pemain judi slot online pasti mengetahui provider Spadegaming ini ada begitu banyak keuntungan dari game slot online ini. Provider slot online ini telah berdiri sangat lama dan sungguh menghibur para pemain dengan tema permainan slot sangat mengasyikan</li><br>
<li><b>Judi Slot Online BNG</b><br>
Selanjutnya ada BNG yang cukup dikenal oleh banyak pemain, bahkan di situs slot kami BIG 77 sangat banyak sekali para pemain yang mendapatkan jackpot ketika mencoba permainan yang dihadirkan oleh BNG ini.</li><br>
<li><b>Judi Slot Online Toptrend Gaming</b><br>
Pilihan selanjutnya ini tidak akan membuat anda pusing sebab di BNG sendiri ada begitu banyak pilihan permainan slot online yang bisa anda coba. Puluhan permainan ini memiliki tema permainan yang unik dan cocok untuk anda coba sambil bersantai.</li><br>
<li><b>Judi Slot Online BBIN</b><br>
Provider slot BBIN memiliki segudang pilihan permainan judi slot online yang bisa anda coba untuk mainkan. Tidak salah jika permainan slot ini mempunyai winrate yang sangat tinggi dan bisa menjadi referensi anda dalam mencari permainan slot mudah jackpot</li><br>
<li><b>Judi Slot Online CQ9</b><br>
Slot Online CQ9 sangat populer di asia, karena memang hampir seluruh permainan yang disajikan sangat menarik serta sangat mudah dalam mendapatkan kemenangan. Ada puluhan permainan yang bisa anda coba ketika bergabung dengan premainan slot online ini.</li><br>
<li><b>Judi Slot Online BBP</b><br>
BBP ada keunggulan tersendiri yang bisa menjadi pembeda dibandingkan provider lain. Ada berbagai bonus yang bisa kalian raih ketika mencoba provider slot paling gacor ini dengan kemudahan dalam mendapatkan kemenangan ada di depan mata.</li><br>
<li><b>Judi Slot Online Joker123</b><br>
Provider selanjutnya adalah Joker123 dengan sejarah mereka menjadi raja provider tidak ada salahnya bagi pemain untuk menikmati rangkuman permainan slot online yang bisa anda coba untuk mainkan ini. Tentu dalam mendapatkan jackpot serta maxwin 
provider slot ini termasuk sangat sering membagikan kepada para playernya di Big77 Slot.</li><br>
<li><b>Judi Slot Online Slot88</b><br>
Provider satu ini terbilang cukup baru tetapi mereka sudah bisa membuktikan bahwa bahwa permainan slot yang mereka hadirkan memiliki tampilan yang sangat menarik. Dengan kesempatan untuk mendapatkan jackpot dari permainan slot online ini sangat besar hingga 96.9% sangat besar bukan, jadi para pemain tidak perlu lagi.</li><br>
</ul>
`;


let titleBody_3 = document.createElement('h2');
titleBody_3.setAttribute("class", "text-warning text-center justify-content-between");
titleBody_3.innerHTML = '5 Permainan Slot Gacor Pragmatic Play Paling Mudah Menang Pilihan BIG77';

let divBody_3 = document.createElement('div');
divBody_3.setAttribute("class", "text-white justify");

let descBody_3 = document.createElement('p');
descBody_3.innerHTML = `Saat ini Big 77 Slot menghadirkan 5 permainan slot gacor paling sering dan dimainkan oleh banyak pihak. Perkembangan permainan slot pun sangat tidak terbendung begitu juga permainan yang dihadirkan saat ini memiliki fitur menarik dengan kemudahan pemain mendapatkan jackpot juga terbuka lebar. 
Berikut adalah 5 Permainan Slot Gacor Pragmatic Pilihan Big77 Slot wajib untuk anda coba :<br><br>
<ul>
<li><b>Slot Gacor Pragmatic Play - Aztec Gems</b><br>
Aztec Gems bisa dikatakan sebagai permainan slot gacor mudah menang, hampir semua permainan keluaran Pragmatic Play menghadirkan permainan yang sangat menarik dan bisa mendatangkan keuntungan. RTP dari permainan slot ini berkisar hingga 96.7% tentu sangat tinggi bukan, 
kalian bisa mencoba permainan slot online Aztec Gems ini di situs BIG77.</li><br>
<li><b>Slot Gacor Pragmatic Play - Pyramid Bonanza</b><br>
Kelebihan Pyramid Bonanza tentu sangat terlihat, permainan slot online keluaran Pragmatic Play ini menghadirkan RTP permainan hingga 97.1%. Para member kami dapat mencoba permainan satu ini dengan bergabung terlebih dahulu di Big77 Slot Online.</li><br>
<li><b>Slot Gacor Pragmatic Play - Wild West Gold</b><br>
Selanjutnya ada permainan slot gacor online lain Wild West Gold selalu menghadirkan rangkuman permainan yang mudah menang saat ini. Wild West Gold termasuk ke dalam permainan yang memberi jackpot terbesar, Nuansa Cowboy Texas ini bisa menjadi referensi anda untuk mengisi waktu luang di hari minggu.</li><br>
<li><b>Slot Gacor Pragmatic Play - Great Rhino Megaways</b><br>
Permainan slot Great Rhino Megaways menghadirkan suasana binatang-binatang dengan design yang sangat menarik permainan slot satu ini cocok untuk anda mainkan. RTP dari permainan slot online ini berkisar 96.3%. 
Itulah 6 permainan slot gacor Pragmatic Play yang bisa mengantarkan anda mendapatkan kemenangan. Ayo segera mainkan permainan slot pilihan kami dan raih jackpot sebesar besarnya.</li><br>
</ul>`;

let titleBody_4 = document.createElement('h2');
titleBody_4.setAttribute("class", "text-warning text-center");
titleBody_4.innerHTML = 'Big77 Slot Menyediakan Keamanan Terjamin Di Situs Slot Gacor Terbaik Indonesia';

let divBody_4 = document.createElement('div');
divBody_4.setAttribute("class", "text-white justify");

let descBody_4 = document.createElement('p');
descBody_4.innerHTML = `Bermain aman di situs Big77 Slot penuh dengan keberuntungan dan mudah dijalankan untuk keberuntungan besar. Perkembangan dunia yang pesat membuat anda merasa selangkah lebih dekat dengan apapun termasuk kemenangan di slot gacor. Tidak ada jarak sehingga anda sekarang 
dapat bermain di mana saja. Hal ini terjadi pada semua jenis permainan judi, sebelumnya permainan ini hanya bisa dijalankan secara langsung, bahkan Indonesia tidak termasuk dalam golongan negara yang membenarkan perjudian.<br><br>
Keamanan bermain di situs slot gacor Indonesia Big 77 Slot Login
Tapi sekarang agen online semakin berkembang. Bahkan website kami punya banyak pemain yang tidak bisa dihitung, mereka umumnya suka memasang permainan judi yang sangat populer. Apakah anda tertarik untuk memasang game bersama kami?<br><br>

<ul>
<li><b>Tidak ada tindakan buruk atau curang sama sekali</b><br>
Situs slot gacor Big77 online merupakan website resmi yang memungkinkan para penggemar mendapatkan berbagai kesempatan bermain hanya dengan smartphone. Bersama kami anda selalu merasa nyaman dan aman. Karena disini tidak akan ada tindakan curang yang dilakukan oleh player atau bandar.<br><br>
Situs bermain online akan memberikan pengalaman yang menarik dan tidak biasa. Bahkan untuk anda pemain baru yang akan memasang taruhan untuk pertama kalinya. Nantinya tidak akan pernah kecewa ketika bekerjasama, karena anda belum tentu menemukan fasilitas yang berkualitas di bandar lain.</li><br>
<li><b>Waspada pada akun id </b><br>
Ikut memasang game di sini sebagai member resmi Big77 membuat anda merasa santai setiap kali memasang taruhan. Karena tempat bermain online kami memang telah mendapat pengakuan dari banyak penggemar di dunia. <br><br>
Bahkan setiap member dapat memasang game dengan proses yang mudah. Hal yang harus kamu pastikan adalah, jangan pernah meminjamkan akun id resmi. Karena bisa menyebabkan anda mendapatkan banyak kerugian.<br><br>
Anda akan selalu merasa nyaman bersama kami, karena ada dukungan dari berbagai fasilitas di dalamnya. Bahkan secara berkala jenis permainan lain akan tersedia. Kami akan memberikan informasi terupdate yang membuat anda semua semakin bersemangat, karena anda dapat bermain dengan 
lebih percaya diri dan mendapatkan keberuntungan setelahnya.</li><br>
<li><b>Rasakan kenyamanan bermain setiap hari</b><br>
Tidak hanya bermain game dengan sistem online, anda akan mendapatkan kemudahan dalam masalah transaksi. Jika sebelumnya anda harus pergi ke mesin atm setiap ingin memasang taruhan, kini hanya menggunakan internet banking saja sudah selesai. 
Setiap smartphone dilengkapi dengan layanan ini, sehingga anda tidak akan kesulitan jika bermain di zaman modern ini.</li>
</ul>
Pastikan anda menjadi member yang jujur, agar semua hasil keberuntungan bisa dirasakan secara maksimal. Jika tidak sabar ingin memulai slot gacor, waktunya membuat akun id resmi dan memasangnya dengan minimal modal terlebih dahulu`;

let titleBody_5 = document.createElement('h2');
titleBody_5.setAttribute("class", "text-warning text-center");
titleBody_5.innerHTML = 'FAQ - Pertanyaan Umum Seputar Situs Judi Slot Online BIG77';

let divBody_5 = document.createElement('div');
divBody_5.setAttribute("class", "text-white justify");

let descBody_5 = document.createElement('p');
descBody_5.innerHTML = `
Kami akan merangkum seputar pertanyaan yang sering ditanyakan oleh para member kami seputar BIG77 Slot. Jika anda merasa kesusahan dalam melakukan pendaftaran, deposit dan withdraw silahkan hubungi customer service kami yang siap 
membantu anda selama 24 jam penuh. Berikut adalah pertanyaan yang sering ditanyakan oleh para member kami terhadap situs BIG77. <br> <br>
<b>Q: Apakah situs Slot Big77 Dapat Dipercaya ?</b><br>
A : Tentu saja, karena di situs slot online terpercaya kami ini akan selalu membayarkan seluruh kemenangan anda tanpa ada sedikitpun potongan. Situs slot kami juga bekerjasama dengan penyedia 
lisensi resmi PAGCOR sehingga anda tidak perlu khawatir untuk bertaruh di situs kami.<br><br>

<b>Q : Permainan Judi Online Apa Saja Yang Disediakan Big77</b><br>
A : Pemain dapat mencoba berbagai pilihan permainan seperti Slot Online, Bola Online, Casino Online, Togel Online dan Sabung Ayam.<br><br>

<b>Q : Metode Deposit Yang Disediakan Oleh Big77</b><br>
A : Kami menyediakan berbagai pilihan anda dalam melakukan deposit seperti Bank Lokal : BCA, Mandiri, Bri, Danamon dan Bni. Untuk E-Wallet dan Pulsa yaitu : Xl, Telkomsel serta Dana, Ovo dan Gopay.<br><br>

<b>Q : Berapakah RTP yang diberikan oleh Situs Slot Big77</b><br>
A : Kami memberikan RTP untuk seluruh permainan sebesar 94.4% secara rata-rata dengan perhitungan kami.`;

containerContent.append(rowContent);
rowContent.append(colBanner, colBody);
colBanner.append(titleBanner, imgBanner);
colBody.append(titleBody, divBody, titleBody_2, divBody_2, titleBody_3, divBody_3, titleBody_4, divBody_4, titleBody_5, divBody_5);
divBody.append(descBody);
divBody_2.append(descBody_2);
divBody_3.append(descBody_3);
divBody_4.append(descBody_4);
divBody_5.append(descBody_5);

// TABLE DI CONTENT
// let tableContent = document.createElement('table');
// tableContent.className = 'list_table';
// let theadContent = document.createElement('thead');
// let tbodyContent = document.createElement('tbody');

// containerContent.append(rowContent);
// rowContent.append(colBody);
// colBody.append(tableContent);
// tableContent.append(theadContent, tbodyContent);

// // Creating and adding data to first row of the table
// let row_1_content = document.createElement('tr');
// let heading_1_content = document.createElement('th');
// heading_1_content.innerHTML = "Slot Online Bomslot";
// heading_1_content.setAttribute("colspan", "3");

// row_1_content.appendChild(heading_1_content);
// theadContent.appendChild(row_1_content);

// // Creating and adding data to second row of the table
// let row_2_content = document.createElement('tr');
// let row_2_data_1_content = document.createElement('td');
// row_2_data_1_content.setAttribute("class", "tab-title p-2");
// row_2_data_1_content.innerHTML = "Nama Game:";
// let row_2_data_2_content = document.createElement('td');
// row_2_data_2_content.setAttribute("class", "p-2");
// row_2_data_2_content.innerHTML = 'Slot Online';

// row_2_content.appendChild(row_2_data_1_content);
// row_2_content.appendChild(row_2_data_2_content);
// tbodyContent.appendChild(row_2_content);

// // Creating and adding data to third row of the table
// let row_3_content = document.createElement('tr');
// let row_3_data_1_content = document.createElement('td');
// row_3_data_1_content.setAttribute("class", "p-2");
// row_3_data_1_content.innerHTML = "Platform:";
// let row_3_data_2_content = document.createElement('td');
// row_3_data_2_content.setAttribute("class", "p-2");
// row_3_data_2_content.innerHTML = 'ANDROID, IOS, WINDOWS, OSX, dan WEB';

// row_3_content.appendChild(row_3_data_1_content);
// row_3_content.appendChild(row_3_data_2_content);
// tbodyContent.appendChild(row_3_content);

// // Creating and adding data to third row of the table
// let row_4_content = document.createElement('tr');
// let row_4_data_1_content = document.createElement('td');
// row_4_data_1_content.setAttribute("class", "p-2");
// row_4_data_1_content.innerHTML = "Kategori:";
// let row_4_data_2_content = document.createElement('td');
// row_4_data_2_content.setAttribute("class", "p-2");
// row_4_data_2_content.innerHTML = 'Game';

// row_4_content.appendChild(row_4_data_1_content);
// row_4_content.appendChild(row_4_data_2_content);
// tbodyContent.appendChild(row_4_content);

// // Creating and adding data to third row of the table
// let row_5_content = document.createElement('tr');
// let row_5_data_1_content = document.createElement('td');
// row_5_data_1_content.setAttribute("class", "p-2");
// row_5_data_1_content.innerHTML = "Rating:";
// let row_5_data_2_content = document.createElement('td');
// row_5_data_2_content.setAttribute("class", "p-2");
// row_5_data_2_content.innerHTML = '5 (7785188 suara )';

// row_5_content.appendChild(row_5_data_1_content);
// row_5_content.appendChild(row_5_data_2_content);
// tbodyContent.appendChild(row_5_content);

// // Creating and adding data to third row of the table
// let row_6_content = document.createElement('tr');
// let row_6_data_1_content = document.createElement('td');
// row_6_data_1_content.setAttribute("class", "p-2");
// row_6_data_1_content.innerHTML = "Minimal Deposit:";
// let row_6_data_2_content = document.createElement('td');
// row_6_data_2_content.setAttribute("class", "p-2");
// row_6_data_2_content.innerHTML = 'Rp. 10.000';

// row_6_content.appendChild(row_6_data_1_content);
// row_6_content.appendChild(row_6_data_2_content);
// tbodyContent.appendChild(row_6_content);

// Content After Table 
// let divBody_5 = document.createElement('div');
// divBody_5.setAttribute("class", "text-white mt-4");

// let descBody_5 = document.createElement('p');
// descBody_5.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsum soluta ver. <ul> <li>Sweet Bonanza</li><li>Gate of Olympus (Slot Zeus)</li><li>Aztec Gems</li><li>Jokers Jewels </li ><li>Starlight Princess </li><li>Wild West Gold </li></ul >  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quas exercitationem non. Cum repudiandae reprehenderit, animi debitis esse iste facere, ratione qui ut itaque deleniti';

// colBody.append(divBody_5);
// divBody_5.append(descBody_5);

// Adding the entire table to the body tag
document.querySelector('#app').appendChild(containerContent);

// FOOTER
let footer = document.createElement('footer');
footer.setAttribute("class", "text-center");

let conFoo = document.createElement('div');
conFoo.setAttribute("class", "container text-white-50 py-2");

let textFoo = document.createElement('h5');
textFoo.setAttribute("class", "fs-6");
textFoo.innerHTML = 'copyright &copy; 2022 by BIG77';

footer.append(conFoo);
conFoo.append(textFoo);
document.querySelector('#app').appendChild(footer);

// FOOTER MENU
let fixedFooter = document.createElement('div');
fixedFooter.className = 'fixed-footer d-lg-none';
fixedFooter.innerHTML = '<a href="https://13.213.113.183/mobile/promotion" rel="nofollow noopener" target="_blank"><img max-height="10" width="25" src="https://res.cloudinary.com/jh88/image/upload/v1636153463/MENANG8/bonus_nrpcrt.webp" alt="Bonus Promo BomSlot"></img> Bonus</a>';

let link1 = document.createElement('a');
link1.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link1.className = 'tada';
link1.innerHTML = '<img class="center" height="25" width="25" src="https://res.cloudinary.com/jh88/image/upload/v1636153463/MENANG8/user_mhgeva.svg" alt="Daftar Slot Online BomSlot"></img> Daftar';

let link2 = document.createElement('a');
link2.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link2.innerHTML = '<img class="center" height="15" width="15" src="https://res.cloudinary.com/jh88/image/upload/v1636153462/MENANG8/whatsapp_kcggke.svg" alt="Whatsapp"></img> Whatsapp';

let link3 = document.createElement('a');
link3.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link3.innerHTML = '<img class="center" height="15" width="15" src="https://res.cloudinary.com/jh88/image/upload/v1636153462/MENANG8/live-chat_qnj9vv.svg" alt="Live Chat"></img> Live Chat';

fixedFooter.append(link1, link2, link3);
document.querySelector('#app').appendChild(fixedFooter);