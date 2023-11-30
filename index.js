/*
Đầu vào: loại Grab, số KM đi được, thời gian chờ, bảng giá cước grab

Các bước xử lí: tổng tiền đi được = số KM đi được * giá cước grab của loại grab + thời gian chờ của loại grab

Đầu ra: tổng tiền đi được, hóa đơn

*/
const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

function giaTienChang1(car) {
  switch (car) {
    case UBER_CAR:
      return 8000;
    case UBER_SUV:
      return 9000;
    case UBER_BLACK:
      return 10000;
  }
}

function giaTienChang2(car) {
  switch (car) {
    case UBER_CAR:
      return 7500;
    case UBER_SUV:
      return 8500;
    case UBER_BLACK:
      return 9500;
  }
}

function giaTienChang3(car) {
  switch (car) {
    case UBER_CAR:
      return 7000;
    case UBER_SUV:
      return 8000;
    case UBER_BLACK:
      return 9000;
  }
}
function priceWait(car) {
  switch (car) {
    case UBER_CAR:
      return 2000;
    case UBER_SUV:
      return 3000;
    case UBER_BLACK:
      return 3500;
  }
}

function moneyKm (kM, km1, km2, km3) {
  if (kM <= 1) {
    return km1 * kM;
  } else if (kM > 1 && kM <= 19) {
    return km1 + km2 * (kM - 1);
  } else {
    return km1 + km2 * 18 + km3 * (kM - 19);
  }
}


document.querySelector(".bill").style.display = "none"

var KmElement = document.getElementById("txt-km");
var timeElement = document.getElementById("txt-thoiGianCho");
var tongTien = 0;
var priceTimeWait = 0;

document.querySelector(".resultBtn").onclick = function () {
  var car = document.querySelector('input[name="selector"]:checked').value
  var kM = KmElement.value * 1
  var time = timeElement.value * 1
  var giaKmChang1 = giaTienChang1(car);
  var giaKmChang2 = giaTienChang2(car);
  var giaKmChang3 = giaTienChang3(car);

  tongTien = moneyKm(kM, giaKmChang1, giaKmChang2 ,giaKmChang3)
  var timeWait = Math.floor(time / 3)
  if(time >= 3) {
    priceTimeWait = timeWait *  priceWait(car) 
  } else {
    priceTimeWait = 0
  }
  var result = priceTimeWait + tongTien;

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = result.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  );
};

document.getElementById("bill").onclick = function () {
    var car = document.querySelector('input[name="selector"]:checked').value
    var kM = KmElement.value * 1
    var time = timeElement.value * 1
    var giaKmChang1 = giaTienChang1(car);
    var giaKmChang2 = giaTienChang2(car);
    var giaKmChang3 = giaTienChang3(car);
    var timeWait = Math.floor(time / 3)
    tongTien = moneyKm(kM, giaKmChang1, giaKmChang2 ,giaKmChang3)
    if(time >= 3) {
      priceTimeWait = timeWait *  priceWait(car) 
    } else {
      priceTimeWait = 0
    }
    var result = priceTimeWait + tongTien;
    if (kM <= 1) {
      document.querySelector(".row1_1").innerHTML = kM;
      document.querySelector(".row1_2").innerHTML = giaKmChang1;
      document.querySelector(".row1_3").innerHTML = tongTien;
      document.querySelector(".row2_0").innerHTML =  `Từ ... đến ...`;
      document.querySelector(".row2_1").innerHTML = 0;
      document.querySelector(".row2_2").innerHTML = giaKmChang2;
      document.querySelector(".row2_3").innerHTML = 0;
      document.querySelector(".row3_0").innerHTML =  `Từ ... đến ...`;
      document.querySelector(".row3_1").innerHTML = 0;
      document.querySelector(".row3_2").innerHTML = giaKmChang3;
      document.querySelector(".row3_3").innerHTML = 0;
      document.querySelector(".row4_1").innerHTML = time;
      document.querySelector(".row4_2").innerHTML = priceWait(car);
      document.querySelector(".row4_3").innerHTML = priceTimeWait;
      document.querySelector(".result").innerHTML = `TỔNG TIỀN: ` + result.toLocaleString(
        "it-IT",
        {
          style: "currency",
          currency: "VND",
        }
      );

    } else if (kM > 1 && kM <= 19) {
      document.querySelector(".row1_1").innerHTML = 1;
      document.querySelector(".row1_2").innerHTML = giaKmChang1;
      document.querySelector(".row1_3").innerHTML = giaKmChang1;
      document.querySelector(".row2_0").innerHTML = `Từ 1km đến ${kM}km`;
      document.querySelector(".row2_1").innerHTML = kM - 1;
      document.querySelector(".row2_2").innerHTML = giaKmChang2;
      document.querySelector(".row2_3").innerHTML = tongTien - giaKmChang1;
      document.querySelector(".row3_0").innerHTML =  `Từ ... đến ...`;
      document.querySelector(".row3_1").innerHTML = 0;
      document.querySelector(".row3_2").innerHTML = giaKmChang3;
      document.querySelector(".row3_3").innerHTML = 0;
      document.querySelector(".row4_1").innerHTML = time;
      document.querySelector(".row4_2").innerHTML = priceWait(car);
      document.querySelector(".row4_3").innerHTML = priceTimeWait;
      document.querySelector(".result").innerHTML = `TỔNG TIỀN: ` + result.toLocaleString(
        "it-IT",
        {
          style: "currency",
          currency: "VND",
        }
      );
    } else {
      document.querySelector(".row1_1").innerHTML = 1;
      document.querySelector(".row1_2").innerHTML = giaKmChang1;
      document.querySelector(".row1_3").innerHTML = giaKmChang1;
      document.querySelector(".row2_0").innerHTML = `Từ 1km đến 19km`;
      document.querySelector(".row2_1").innerHTML = 18;
      document.querySelector(".row2_2").innerHTML = giaKmChang2;
      document.querySelector(".row2_3").innerHTML = giaKmChang2 * 18;
      document.querySelector(".row3_0").innerHTML =  `Từ 19km đến ${kM}km`;
      document.querySelector(".row3_1").innerHTML = kM - 19;
      document.querySelector(".row3_2").innerHTML = giaKmChang3;
      document.querySelector(".row3_3").innerHTML = giaKmChang3 * (kM - 19);
      document.querySelector(".row4_1").innerHTML = time;
      document.querySelector(".row4_2").innerHTML = priceWait(car);
      document.querySelector(".row4_3").innerHTML = priceTimeWait;
      document.querySelector(".result").innerHTML = `TỔNG TIỀN: ` + result.toLocaleString(
        "it-IT",
        {
          style: "currency",
          currency: "VND",
        }
      );
    }
    document.querySelector(".bill").style.display = "block"    
  };







