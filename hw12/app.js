const form = document.forms.addUser;
const firstNameInput = form.elements.firstName;
const lastNameInput = form.elements.lastName;

const studentList = document.querySelector('#studentList');

let arrayOfStudents = JSON.parse(localStorage.getItem('students')) || [];

function showStudents()
{
    studentList.innerHTML = '';

    arrayOfStudents.forEach((student, index) =>
    {
        const studentDiv = document.createElement('div');
        studentDiv.innerHTML = `${student.firstName} ${student.lastName}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';

        deleteBtn.addEventListener('click', () =>
        {
            arrayOfStudents.splice(index, 1);
            localStorage.setItem('students', JSON.stringify(arrayOfStudents));
            showStudents();
        });

        studentDiv.append(deleteBtn);
        studentList.append(studentDiv);
    });
}

form.addEventListener('submit', addStudent);

function addStudent(e)
{
    e.preventDefault();

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    if (!firstName || !lastName) return;

    arrayOfStudents.push({firstName, lastName});
    localStorage.setItem('students', JSON.stringify(arrayOfStudents));

    firstNameInput.value = '';
    lastNameInput.value = '';

    showStudents();
}

showStudents();