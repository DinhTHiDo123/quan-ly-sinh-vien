
function adddulieu() {
    const masv = document.getElementById('masv').value;
    const name = document.getElementById('name').value;
    const diachi = document.getElementById('diachi').value;
    const number = document.getElementById('number').value;

    if (!masv || !name || !diachi || !number) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    let students = JSON.parse(localStorage.getItem('students')) || [];
    const newStudent = { masv, name, diachi, number };
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));

    document.getElementById('masv').value = '';
    document.getElementById('name').value = '';
    document.getElementById('diachi').value = '';
    document.getElementById('number').value = '';

    displayStudents();
}

function displayStudents() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const dataContainer = document.querySelector('.data');
    dataContainer.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.masv}</td>
            <td>${student.name}</td>
            <td>${student.diachi}</td>
            <td>${student.number}</td>
            <td class="actions">
                <button onclick="editStudent(${index})"><i class="far fa-edit"></i></button>
                <button onclick="deleteStudent(${index})"><i class="far fa-calendar-times"></i></button>
            </td>
        `;
        dataContainer.appendChild(row);
    });
}

function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
}
function editStudent(index) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    const student = students[index];
    
    document.getElementById('masv').value = student.masv;
    document.getElementById('name').value = student.name;
    document.getElementById('diachi').value = student.diachi;
    document.getElementById('number').value = student.number;

    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
}

window.onload = displayStudents;
