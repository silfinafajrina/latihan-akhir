const luasLingkaran = document.getElementById("luasLingkaran");
const lingkaranContainer = document.getElementById("lingkaran");
const ruasInput = document.getElementById("ruas");

const hasilLingkaran = JSON.parse(localStorage.getItem("lingkaran")) || [];
const Hitung = (ruas, hasil)=>{
    hasilLingkaran.push({
        ruas,
        hasil
    });
    localStorage.setItem("lingkaran", JSON.stringify(hasilLingkaran));
    return{ruas, hasil}
}
const buatLingkaran = ({ruas, hasil})=>{
    const divLingkaran = document.createElement("div");
    const Ruas1 = document.createElement("p");
    const Rumus = document.createElement("p");
    const hasil1 = document.createElement("h2");
    const hr = document.createElement("hr")

    Ruas1.innerHTML = "Ruas :" + ruas;
    Rumus.innerHTML = "Rumus : pi x r x r";
    hasil1.innerHTML = "Hasil Perhitungan Luas Lingkaran :" + hasil;

    divLingkaran.append(Ruas1, Rumus, hasil1, hr);
    lingkaranContainer.appendChild(divLingkaran);
    lingkaranContainer.style.display = hasilLingkaran === 0 ? "none" : "flex";
}
lingkaranContainer.style.display = hasilLingkaran === 0 ? "none" : "flex";
    hasilLingkaran.forEach(buatLingkaran);
    luasLingkaran.onsubmit = e =>{
        e.preventDefault()
        const Ruas = ruas.value;
        const Luas = (Ruas*Ruas)*3.14;

        const newLingkaran = Hitung(
            Ruas,
            Luas
        );
        buatLingkaran(newLingkaran)
        ruas.value = "";
    }