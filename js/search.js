const searchField = document.querySelector(".search__field");
const form = document.querySelector(".search");
const searchList = document.querySelector(".search__list");

//бд продуктов
const products = [
    "Молоко",
    "Молочный коктейль",
    "Молочный улун",
    "Колбаса с молоком",
    "Колбаса",
    "Сыр",
    "Хлеб",
    "Творог",
    "Макароны",
    "Куриная грудка",
];

// Сохранение текущего значения поля ввода в URL
const updateURL = (searchTerm) => {
    const params = new URLSearchParams(window.location.search);
    if (searchTerm) {
        params.set("search", searchTerm);
    }else{
        params.delete("search");
    }
    history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
};

//умный поиск
const handleSearch = () => {
    const searchTerm = searchField.value.trim();
    updateURL(searchTerm);

    const resultSearch = products.filter(
        (product) =>
            searchField !== "" &&
            product.toLowerCase().includes(searchTerm.toLowerCase())
    )
};
const regex = new RegExp(`(${searchTerm})`, "gi");
if (searchResult.length){
    form.classList.add("active");
    searchList.innerHTML = "";
    searchResult.filter((item)=>{
        const highlitedItem = item.replace(
            regex,
            `<span class="highlight">$1</span>`
        );
        searchList.insertAdjacentHTML(
            "beforeend",
            `<li class="search__item">${highlitedItem}</li>`
        );
    });
}else{
    form.classList.remove("active");
}

//запись значений в поле ввода
document.addEventListener("click", (event) => {
    if (event.target.closest(".search__item")){
        searchField.value = event.target.innerText;
        form.classList.remove("active");
    }
});

//для записи в поле ввода
window.addEventListener("DOMContentLoaded", ()=> {
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get("search");

    if (searchTerm) {
        searchField.value = searchTerm;
        handleSearch();
    }
});

//при вводе в поле ввода поиска
searchField.addEventListener("input", handleSearch);


























