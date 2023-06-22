// membuat variabel utama
function convertTemperature () {
    let nganu = document.getElementById("inputValue");
    let result = document.getElementById("resultValue");
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    nganu.addEventListener("keyup", convertTemperature);
    input.addEventListener("change", convertTemperature);
    output.addEventListener("change", convertTemperature);

    let input_value = input.value;
    let output_value = output.value;

// menghitung value berdasarkan option yang dipilih
    if (input_value === "celsius" && output_value === "fahrenheit") {
        result.value = Number((nganu.value) * 9 / 5) + 32;
    } else if (input_value === "celsius" && output_value === "celsius") {
        result.value = Number (nganu.value);
    }

    if (input_value === "fahrenheit" && output_value === "celsius") {
        result.value = Number((nganu.value - 32) * 5) / 9;
    } else if (input_value === "fahrenheit" && output_value === "fahrenheit"){
        result.value = Number (nganu.value);
    }
}

// menampilkan rumus, tapi gatau ah pusing :')
C.innerText = "C";
F.innerText = "F";
inputValue.addEventListener("keyup", () => {
    C.innerText = inputValue.value;
})
inputValue.addEventListener("keyup", () => {
    F.innerText = resultValue.value;
})

// ini untuk reset
function reset () {
    document.getElementById("inputValue").value = "";
    document.getElementById("resultValue").value = "";
    C.innerText = "C";
    F.innerText = "F";
}

