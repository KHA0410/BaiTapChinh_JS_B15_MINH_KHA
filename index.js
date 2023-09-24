// Bài 1: Quản lý sinh viên

document.getElementById("ketQua").onclick = function() {
    var diemChuan = (document.getElementById("diemChuan").value);
    var khuVuc = parseFloat(document.getElementById("khuVuc").value);
    var doiTuong = parseFloat(document.getElementById("doiTuong").value);
    var diemThu1 = parseFloat(document.getElementById("diemThu1").value);
    var diemThu2 = parseFloat(document.getElementById("diemThu2").value);
    var diemThu3 = parseFloat(document.getElementById("diemThu3").value);
    var sumDiem = 0;
    var tongDiem = '';

    if (diemThu1 == 0 || diemThu2 == 0 || diemThu3 == 0) {
        tongDiem = "Rớt vì có môn bằng 0";
        sumDiem = "Không hợp lệ";
    } else if (diemThu1 > 0 && diemThu2 > 0 && diemThu3 > 0) {
        sumDiem = diemThu1 + diemThu2 + diemThu3 + khuVuc + doiTuong;
        if (sumDiem >= diemChuan) {
            tongDiem = "Đậu";
        } else {
            tongDiem = "Rớt";
        }
    }

    document.getElementById("result").innerHTML = `"${tongDiem} "với số điểm là: "${sumDiem}" (trong đó điểm khu vực là: "${khuVuc}" và đối tượng là "${doiTuong}")` ;
}

// Bài 2: TÍNH TIỀN ĐIỆN
    
document.getElementById("ketQua2").onclick = function() {
    var hoTen = document.getElementById("hoTen").value;
    var soKw = parseInt(document.getElementById("soKw").value);
    var tienDien = 0;

    switch (true) {
        case soKw <= 50:
            tienDien = 500 * soKw;
            break;
        case soKw <= 100:
            tienDien = 50 * 500 + (soKw - 50) * 650;
            break;
        case soKw <= 200:
            tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
            break;
        case soKw <= 350:
            tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
            break;
        default:
            tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
            break;
    }
    var tienDienFormatted = tienDien.toLocaleString();
    document.getElementById("result2").innerHTML = `Họ và Tên: ${hoTen} --- Tiền điện: ${tienDien} VNĐ`;
}

// Bài 3: TÍNH THUẾ THU NHẬP CÁ NHÂN
document.getElementById("ketQua3").onclick = function() {
    var hoTen3 = document.getElementById("hoTen3").value;
    var thuNhap = parseInt(document.getElementById("thuNhap").value);
    var soNguoi = parseInt(document.getElementById("soNguoi").value);
    var chiuThue = 0;
    chiuThue = thuNhap - 4000000 - soNguoi * 1600000;
    var tienThue = 0;
    switch (true) {
        case chiuThue <= 60000000:
            tienThue = (chiuThue * 0.05).toLocaleString();
            break;
        case chiuThue <= 120000000:
            tienThue = (chiuThue* 0.1).toLocaleString();
            break;
        case chiuThue <= 210000000:
            tienThue = (chiuThue* 0.15).toLocaleString();
            break;
        case chiuThue <= 384000000:
            tienThue = (chiuThue* 0.2).toLocaleString();
            break;
        case chiuThue <= 624000000:
            tienThue = (chiuThue* 0.25).toLocaleString();
            break;
        case chiuThue <= 960000000:
            tienThue = (chiuThue* 0.3).toLocaleString();
            break;
        default:
            tienThue = (chiuThue* 0.35).toLocaleString();
            break;
    }

    document.getElementById("result3").innerHTML = `Họ và Tên: ${hoTen3} --- Tiền thuế thu nhập cá nhân phải trả: ${tienThue} VNĐ`;
}

// Bài 4: TÍNH TIỀN CÁP
var chonLoai = document.getElementById("chonLoai");
var ketNoiInput = document.getElementById("ketNoiInput");

chonLoai.addEventListener("change", function() {
    var selectedOption = chonLoai.value;
    if (selectedOption === "doanhNghiep") {
        ketNoiInput.style.display = "block"; 
    } else {
        ketNoiInput.style.display = "none"; 
    }
});

document.getElementById("ketQua4").onclick = function(){
    var chonLoai = document.getElementById("chonLoai").value;
    var khachHang = document.getElementById("khachHang").value;
    var soKenh = document.getElementById("soKenh").value*1;
    var ketNoi = document.getElementById("ketNoi").value*1;
    var tienCap = 0;

   if(chonLoai == "nhaDan"){
    var hoaDon = 4.5;
    var dichVu = 20.5;
    var kenh = 7.5 * soKenh;
    var tienCap = (hoaDon + dichVu + kenh).toLocaleString();
}

    if (chonLoai == "doanhNghiep"){
    var hoaDon = 15;
    var dichVu = 0;
    if(ketNoi<=10){
        dichVu = 75;
    }else if(ketNoi > 10){
        dichVu = 75 + (ketNoi - 10) *5;
    }
    var kenh = 50 * soKenh;
    var tienCap = (hoaDon + dichVu + kenh).toLocaleString();
}

document.getElementById("result4").innerHTML = `Mã khách hàng: ${khachHang} --- Tiền cáp phải trả: $ ${tienCap} `;


}