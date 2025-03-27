window.sessionStorage;
sessionStorage.clear();

const key = document.getElementById("livesearch");
const column2Data = getColumnData('#myTable', 2);
const table = document.getElementById('myTable');
const rows = document.querySelectorAll('table tr');

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

// Hàm hiển thị kết quả tìm kiếm 
function showRow(col) {

    // key.querySelectorAll('.input-search').forEach(e => {
    //     console.log(e.innerHTML = "test");
    // });

    // const cols = key.querySelectorAll('.input-search');

    // for (var index = 0; index < cols.length; index++) {
    //     const e = cols[index];
    //     // e.style.border = "1px solid #A5ACB2";
    //     e = col;

    // }

    // const newRow = table.insertRow(2); // Thêm một hàng mới vào vị trí thứ hai (index 1)

    // const cell1 = newRow.insertCell(0);
    // cell1.textContent = 'Dữ liệu ô 1';

    // const cell2 = newRow.insertCell(1);
    // cell2.textContent = 'Dữ liệu ô 2';

    // const cell1 = newRow.insertCell(0);
    // cell1 == getRows(5);
    // getRows(5).newRow;

    // table.appendChild(getRows[5]);

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
    // const rows = document.querySelectorAll('table tr');
    const row = rows[loc]; // Lấy dòng thứ ba (chỉ mục bắt đầu từ 0)
    // console.log(row);
    return row;
}

// hàm ẩn dòng
function hideRow() {
    // const rows = document.querySelectorAll('tr');
    for (let row = 2; row < rows.length; row++) {
        const e = rows[row];
        e.setAttribute('hidden', '');
        // e = 'hidden';
        
        // console.log(e);
        
        // if (check != row) {
        // } else {
        //     e.removeAttribute('hidden');
        // }
        
    }

    // rows[check].removeAttribute('hidden');

    // console.log(rows[5]);
    

    // arrRow.forEach(e => {
    //     console.log(e);

    // });
}

// const arr = ['5', '7', '10', '8'];
// hideRow(arr);

// showRow("test");

// Hàm tìm kiếm theo từ khóa
function showResult(str) {
    if (str.length == 0) {
        // document.getElementById("livesearch").innerHTML = "";
        // document.getElementById("livesearch").style.border = "0px";

        return;
    } else {
        // document.getElementById("livesearch").innerHTML = str;
        // document.getElementById("livesearch").style.border = "1px solid #A5ACB2";

        // showRow();
        hideRow();
        console.log(findData(str));

        findData(str).forEach(e => {
            console.log(e.index);
            rows[e.index].removeAttribute('hidden');
            // hideRow(e.index);
            // getRows(e.index);
            
        });
    }
}

function findData(key) {

    const arr = column2Data;
    const keyword = key;

    // const results = arr.filter((item) =>
    //     item.toLowerCase().includes(keyword.toLowerCase())
    // );

    function findElementAndIndex(arr, keyword) {
        return arr.reduce((acc, item, index) => {
            if (item.toLowerCase().includes(keyword.toLowerCase())) {
                acc.push({ element: item, index: index });
            }
            return acc;
        }, []);
    }

    //   const arr = ["apple", "banana", "orange", "aple", "ApplePie"];
    //   const keyword = "app";

    const foundElements = findElementAndIndex(arr, keyword);
    // console.log(foundElements);
    // Kết quả: [{ element: "apple", index: 0 }, { element: "ApplePie", index: 4 }]

    // return results;
    return foundElements;
}

// Ví dụ: Lấy dữ liệu từ cột thứ 2 (index 1) của bảng có id "myTable"
// console.log(column2Data);
// console.log(key);

// sessionStorage.setItem("key", "value")