window.sessionStorage;
// sessionStorage.clear();

const key = document.getElementById("livesearch");
const table = document.getElementById('myTable');
const rows = document.querySelectorAll('table tr');

// hàm xóa khoảng trắng trong mảng
function normalizeWhitespace(str) {
    return str.replace(/[\u00A0\t\n\r]+/g, ' ');
}

// hàm kiểm tra session
function checkAnySession() {
    if (sessionStorage.length > 0) {
        console.log("Có dữ liệu session được lưu trữ.");
        return true; // Có dữ liệu session
    } else {
        console.log("Không có dữ liệu session nào được lưu trữ.");
        return false; // Không có dữ liệu session
    }
}

// Ví dụ: Kiểm tra xem có bất kỳ dữ liệu session nào được lưu trữ hay không
const anySessionExists = checkAnySession();

if (anySessionExists) {
    // Thực hiện hành động nếu có dữ liệu session

    const column2 = sessionStorage.getItem("column2");
    // Chuyển đổi chuỗi JSON thành mảng JavaScript
    const column2Data = JSON.parse(column2);

    const column3 = sessionStorage.getItem("column3");
    // Chuyển đổi chuỗi JSON thành mảng JavaScript
    const column3Data = JSON.parse(column3);

    // hàm ẩn dòng
    function hideRow(check) {
        for (let row = 2; row < rows.length; row++) {
            const e = rows[row];

            if (check) {
                e.setAttribute('hidden', '');
            } else {
                e.removeAttribute('hidden');
            }

        }

    }

    // Hàm tìm kiếm theo từ khóa
    function showResult(str, check) {
        if (str.length == 0) {
            hideRow(false);
            return;
        } else {

            hideRow(true);

            if (check == 1) {
                findData(str, column2Data).forEach(e => {
                    rows[e.index].removeAttribute('hidden');
                });
            } else if (check == 2) {
                findData(str, column3Data).forEach(e => {
                    rows[e.index].removeAttribute('hidden');
                });
            }
        }
    }

    function findData(keyword, arr) {
        return arr.reduce((acc, item, index) => {
            if (item.toLowerCase().includes(keyword.toLowerCase())) {
                acc.push({ element: item, index: index });
            }
            return acc;
        }, []);
    }

} else {
    // Thực hiện hành động nếu không có dữ liệu session

    getDataInSession("column2", getColumnData('#myTable', 2));
    getDataInSession("column3", getColumnData('#myTable', 3));

    function getColumnData(tableSelector, columnIndex) {
        const table = document.querySelector(tableSelector);
        const rows = table.querySelectorAll('tr');
        const columnData = [];

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells[columnIndex]) {
                const cleanedStr = normalizeWhitespace(cells[columnIndex].textContent.trim());
                columnData.push(cleanedStr);
            }
        });


        return columnData;
    }

    // hàm lưu mảng vào session 
    function getDataInSession(nameArray, columnData) {
        const myArray = columnData;

        // Chuyển đổi mảng thành chuỗi JSON
        const myArrayJSON = JSON.stringify(myArray);

        // Lưu chuỗi JSON vào sessionStorage
        sessionStorage.setItem(nameArray, myArrayJSON);

    }
}