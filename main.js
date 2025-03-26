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

const key = document.getElementById("livesearch");

// Hàm hiển thị kết quả tìm kiếm 
function showRow(str) {

    // key.querySelectorAll('.input-search').forEach(e => {
    //     console.log(e.innerHTML = "test");
    // });

    const col = key.querySelectorAll('.input-search');

    for (var index = 0; index <= col.length; index++) {
        const e = col[index];
        e.style.border = "1px solid #A5ACB2";
        e.innerHTML = str;
    }

}

// Hàm trả kết quả chuỗichuỗi
function result(Array) {
    const str = `
        <tr style="vertical-align:top;" id="livesearch">
			<td class="" style="width:0px;height:31px;">${Array[0]}</td>
			<td class="input-search"
				style="width:65px;height:29px;line-height:13px;text-align:right;vertical-align:middle;">
				
                ${Array[1]}

			</td>
			<td class="input-search"
				style="width:96px;height:29px;line-height:13px;text-align:left;vertical-align:middle;">
				
                ${Array[2]}

			</td>
			<td class="input-search"
				style="width:196px;height:29px;line-height:13px;text-align:left;vertical-align:middle;">
				
		    	${Array[3]}

			</td>
			<td class="input-search"
				style="width:96px;height:29px;line-height:13px;text-align:left;vertical-align:middle;">
				
		    	${Array[4]}

			</td>
			<td class="input-search" style="width:96px;height:29px;text-align:left;vertical-align:middle;">
				<!--[if lte IE 7]><div class="csF7D3565D"></div><![endif]-->
                ${Array[5]}
			</td>
			<td class="input-search" style="width:136px;height:29px;text-align:left;vertical-align:middle;">
				<!--[if lte IE 7]><div class="csF7D3565D"></div><![endif]-->
                ${Array[6]}
			</td>
			<td class="input-search"
				style="width:115px;height:29px;line-height:13px;text-align:right;vertical-align:middle;">
				
                ${Array[7]}

			</td>
			<td class="input-search"
				style="width:95px;height:29px;line-height:-1px;text-align:right;vertical-align:middle;">
				<!--[if lte IE 7]><div class="csF7D3565D"></div><![endif]-->
                ${Array[8]}
			</td>
			<td class="input-search"
				style="width:95px;height:29px;line-height:-1px;text-align:right;vertical-align:middle;">
				<!--[if lte IE 7]><div class="csF7D3565D"></div><![endif]-->
                ${Array[9]}
			</td>
			<td class="input-search"
				style="width:95px;height:29px;line-height:-1px;text-align:right;vertical-align:middle;">
				<!--[if lte IE 7]><div class="csF7D3565D"></div><![endif]-->
                ${Array[10]}
			</td>
			<td class="input-search"
				style="width:95px;height:29px;line-height:13px;text-align:right;vertical-align:middle;">
				
                ${Array[11]}

			</td>
			<td class="input-search"
				style="width:95px;height:29px;line-height:13px;text-align:right;vertical-align:middle;">
				
			    ${Array[12]}

			</td>
		</tr>
    `;

    return str;
}

// Hàm lấy dòng
function getRows(loc) {
    const rows = document.querySelectorAll('table tr');
    const row = rows[loc]; // Lấy dòng thứ ba (chỉ mục bắt đầu từ 0)
    console.log(row);
    return row;
}

showRow("test");

// Hàm tìm kiếm theo từ khóa
function showResult(str) {
    if (str.length == 0) {
        document.getElementById("livesearch").innerHTML = "";
        document.getElementById("livesearch").style.border = "0px";
        return;
    } else {
        document.getElementById("livesearch").innerHTML = str;
        document.getElementById("livesearch").style.border = "1px solid #A5ACB2";
        getRows(1);
    }
}

// Ví dụ: Lấy dữ liệu từ cột thứ 2 (index 1) của bảng có id "myTable"
const column2Data = getColumnData('#myTable', 2);
console.log(column2Data);
console.log(key);

// sessionStorage.setItem("key", "value")