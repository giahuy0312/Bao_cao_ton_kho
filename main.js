window.sessionStorage;
sessionStorage.clear();

const key = document.getElementById("livesearch");
const column2Data = getColumnData('#myTable', 2);
const column3Data = getColumnData('#myTable', 3);
const table = document.getElementById('myTable');
const rows = document.querySelectorAll('table tr');

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

// hàm xóa khoảng trắng trong mảng
function normalizeWhitespace(str) {
    return str.replace(/[\u00A0\t\n\r]+/g, ' ');
}

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