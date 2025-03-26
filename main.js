// const item = document.querySelectorAll(".cs48B7A5CC");

// const row = document.querySelectorAll("tr");
// // const col = document.childNodes;

// // row.forEach(e => {
// //     const col = e.children;
// //     col.forEach(child => {
// //         // Thực hiện hành động với mỗi nút con (child)
// //         // console.log(child); // Ví dụ: In ra nút con
// //     });
// // });

// const rows = document.querySelectorAll('tr'); // Lấy tất cả các hàng trong bảng

// rows.forEach(row => {
//   const cols = row.querySelectorAll(".cs48B7A5CC"); // Lấy tất cả các ô trong hàng

//   cols.forEach(col => {
//     console.log(col.textContent); // In ra nội dung văn bản của ô
//   });
// });

// // console.log(item[0].textContent);
// // console.log(item[1].textContent);
// // console.log(item[2].textContent);

window.sessionStorage;

// // let a = sessionStorage.setItem("key", "value");

// // console.log(a);

// // console.log(sessionStorage.getItem("key"));

sessionStorage.clear();


// item.forEach(function (e, index) {
//     sessionStorage.setItem(e.textContent, index);
//     // console.log(item[index]);
// });

// console.log(sessionStorage.getItem("06455KVBT01"));

// // console.log(row);


function getColumnData(tableSelector, columnIndex) {
    const table = document.querySelector(tableSelector);
    const rows = table.querySelectorAll('tr');
    const columnData = [];

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells[columnIndex]) {
            const cleanedStr = cells[columnIndex].textContent.trim();
            columnData.push(cleanedStr);
        }
    });

    return columnData;
}

function showResult(str) {
    if (str.length == 0) {
        document.getElementById("livesearch").innerHTML = "";
        document.getElementById("livesearch").style.border = "0px";
        return;
    } else {
        document.getElementById("livesearch").innerHTML = str;
        document.getElementById("livesearch").style.border = "1px solid #A5ACB2";
    }
}

// Ví dụ: Lấy dữ liệu từ cột thứ 2 (index 1) của bảng có id "myTable"
const column2Data = getColumnData('#myTable', 2);
console.log(column2Data);

// sessionStorage.setItem("key", "value")