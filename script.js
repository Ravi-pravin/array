
let myArray = [];

function updateResult() {
    document.getElementById("result").value = myArray.join(", ");
}

document.querySelectorAll(".arraybtn").forEach(button => {
    button.addEventListener("click", function () {
        let action = this.innerText.toLowerCase().trim();
        let inputValue = document.getElementById("num1").value.trim();

        if (["push", "unshift", "delete"].includes(action) && inputValue === "") {
            alert("Please enter a value before using " + action);
            return;
        }

        switch (action) {
            case "shift":
                if (myArray.length > 0) {
                    myArray.shift();
                } else {
                    alert("Array is empty! Nothing to shift.");
                }
                break;
            case "unshift":
                myArray.unshift(inputValue);
                break;
            case "delete":
                let index = myArray.indexOf(inputValue);
                if (index !== -1) {
                    myArray.splice(index, 1);
                } else {
                    alert("Element not found in array!");
                }
                break;
            case "concat":
                let extraArray = prompt("Enter elements to concatenate (comma-separated):");
                if (extraArray) {
                    myArray = myArray.concat(extraArray.split(","));
                }
                break;
            case "filter":
                myArray = myArray.filter(item => item.length > 3);
                break;
            case "find":
                let foundItem = myArray.find(item => item.length > 3);
                alert(foundItem || "No match found");
                break;
            case "sort":
                myArray.sort();
                break;
            case "reverse":
                myArray.reverse();
                break;
            case "length":
                alert("Array Length: " + myArray.length);
                break;
            case "pop":
                myArray.pop();
                break;
            case "push":
                myArray.push(inputValue);
                break;
            case "slice":
                let startSlice = parseInt(prompt("Enter start index for slice:"));
                let endSlice = parseInt(prompt("Enter end index for slice:"));
                myArray = myArray.slice(startSlice, endSlice);
                break;
            case "splice":
                let startSplice = parseInt(prompt("Enter start index for splice:"));
                let deleteCount = parseInt(prompt("Enter number of elements to remove:"));
                if (!isNaN(startSplice) && !isNaN(deleteCount) && startSplice >= 0 && startSplice < myArray.length) {
                    myArray.splice(startSplice, deleteCount);
                } else {
                    alert("Invalid input for splice. Ensure index is within array bounds.");
                }
                break;
            default:
                alert("Invalid operation!");
        }

        updateResult();
    });
});

function resetArray() {
    myArray = [];
    document.getElementById("num1").value = ""; 
    updateResult(); 
}
