// Task 1: Initial Color and Color Change
window.onload = function() {
    const divs = document.querySelectorAll("div.box");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "lightblue";  // Initial color
    }
};

document.getElementById("colorChangeBtn").onclick = function() {
    document.getElementById("div1").style.backgroundColor = "red";
    document.getElementById("div2").style.backgroundColor = "green";
    document.getElementById("div3").style.backgroundColor = "yellow";
};

// Task 2: Event Bubbling
document.getElementById("outer").addEventListener("click", function(event) {
    const target = event.target;
    if (target.classList.contains('my-div')) {
        document.getElementById('output').innerText = `Hi from ${target.id}`;
    }
});

// Task 3: Dynamic List of Names
let names = ['Alice', 'Bob', 'Charlie'];
const ul = document.getElementById('namesList');

function renderList() {
    ul.innerHTML = names.map(name => `<li>${name}</li>`).join('');
}

document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const newName = document.getElementById("nameInput").value.trim(); // Trim input
    if (newName) {
        names.push(newName);  // Add new name
        renderList();  // Re-render the list
        document.getElementById("nameInput").value = '';  // Clear input
    }
});

document.getElementById("removeFirst").onclick = function() {
    if (names.length > 0) {
        names.shift(); // Remove first item
        renderList();
    }
};

document.getElementById("removeLast").onclick = function() {
    if (names.length > 0) {
        names.pop(); // Remove last item
        renderList();
    }
};

renderList(); // Initially render the list

// Task 4: Car Table with Filtering and Sorting
const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

function renderTable(carArray) {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = carArray.map(car => `
        <tr>
            <td>${car.id}</td>
            <td>${car.year}</td>
            <td>${car.make}</td>
            <td>${car.model}</td>
            <td>${car.price}</td>
        </tr>
    `).join('');
}

document.getElementById("filterBtn").onclick = function() {
    const maxPrice = document.getElementById("priceInput").value.trim();
    const filteredCars = cars.filter(car => car.price < maxPrice && maxPrice !== "");
    renderTable(filteredCars);
};

// Sort by price when header is clicked
let ascending = true;
document.getElementById("priceHeader").addEventListener('click', function() {
    cars.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
    ascending = !ascending;  // Toggle sort direction
    renderTable(cars);
});

// Initial render
renderTable(cars);
