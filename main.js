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

// Hàm lấy dòng
function getRows(loc) {
    const row = rows[loc]; // Lấy dòng thứ ba (chỉ mục bắt đầu từ 0)
    return row;
}

// hàm ẩn dòng
function hideRow() {
    for (let row = 2; row < rows.length; row++) {
        const e = rows[row];
        e.setAttribute('hidden', '');
        
    }

}


// Hàm tìm kiếm theo từ khóa
function showResult(str) {
    if (str.length == 0) {

        return;
    } else {

        hideRow();

        findData(str).forEach(e => {
            rows[e.index].removeAttribute('hidden');
            
        });
    }
}

function findData(key) {

    const arr = column2Data;
    const keyword = key;

    function findElementAndIndex(arr, keyword) {
        return arr.reduce((acc, item, index) => {
            if (item.toLowerCase().includes(keyword.toLowerCase())) {
                acc.push({ element: item, index: index });
            }
            return acc;
        }, []);
    }

    const foundElements = findElementAndIndex(arr, keyword);
    return foundElements;
}
