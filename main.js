// Dữ liệu demo sản phẩm
const products = [
    { id: 1, name: "Túi Side Trunk MM", description: "Túi jean cao cấp.", price: 111000000, image: "https://i.imgur.com/0y8Ftya.png", group: "Túi", details: "Chất liệu: Da, Màu: Nâu, Size: L" },
    { id: 2, name: "Túi Hills Pochette", description: "Thiết kế trẻ trung", price: 51500000, image: "https://i.imgur.com/fzB6sJp.png", group: "Túi", details: "Chất liệu: Da, Dây đeo dài" },
    { id: 3, name: "Túi All In BB", description: "Sức chứa lớn", price: 78000000, image: "https://i.imgur.com/9Wfukqu.png", group: "Túi", details: "Chất liệu: Canvas, Size: XL" },
    { id: 4, name: "Túi Vanity Chain Pouch", description: "Túi nhỏ xinh", price: 65500000, image: "https://i.imgur.com/5sZ9ZP7.png", group: "Túi", details: "Dây đeo kim loại sang trọng" },
    { id: 5, name: "Ví Black Pixel", description: "Ví nam cao cấp", price: 12000000, image: "https://i.imgur.com/LRTlCtB.png", group: "Ví", details: "Pixel pattern, nhỏ gọn" },
    { id: 6, name: "Ví Graphite", description: "Ví nhỏ gọn", price: 11500000, image: "https://i.imgur.com/nt7yYV5.png", group: "Ví", details: "Da mềm, màu xám thời thượng" },
    { id: 7, name: "Ví LV Mini", description: "Mini dễ thương", price: 24500000, image: "https://i.imgur.com/s3b7wF6.png", group: "Ví", details: "Dùng cho tiền xu, thẻ" },
    { id: 8, name: "Thẻ giữ bình sữa - LV", description: "Phụ kiện tiện dụng", price: 2000000, image: "https://i.imgur.com/V1j0Y7B.png", group: "Ví", details: "Phụ kiện cho mẹ và bé" },
];

// Hiện tại đang chọn nhóm nào?
let currentGroup = "Tất cả";

// Render sản phẩm theo nhóm (hoặc tất cả)
function renderProducts(list) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    list.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price.toLocaleString()}đ</div>
        `;
        div.onclick = () => showProductDetail(product.id);
        productList.appendChild(div);
    });
}

// Popup chi tiết sản phẩm
function showProductDetail(id) {
    const product = products.find(p => p.id == id);
    if (!product) return;
    const modal = document.getElementById('productModal');
    const content = document.getElementById('modalContent');
    content.innerHTML = `
        <span class="close" id="closeModalBtn">&times;</span>
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <div class="price">${product.price.toLocaleString()}đ</div>
        <p><b>Mô tả:</b> ${product.description}</p>
        <p><b>Thông tin chi tiết:</b> ${product.details ? product.details : ''}</p>
    `;
    modal.style.display = "block";
    document.getElementById('closeModalBtn').onclick = closeModal;
    modal.onclick = function(e) {
        if (e.target === modal) closeModal();
    };
}
function closeModal() {
    document.getElementById('productModal').style.display = "none";
}

// Xử lý menu nhóm sản phẩm
const menuGroups = document.querySelectorAll('.menu-group');
menuGroups.forEach(groupItem => {
    if (groupItem.classList.contains("contact-group")) return;
    groupItem.onclick = function() {
        menuGroups.forEach(g => g.classList.remove("active"));
        this.classList.add("active");
        currentGroup = this.getAttribute('data-group');
        if (currentGroup === "Tất cả") {
            renderProducts(products);
        } else {
            renderProducts(products.filter(p => p.group === currentGroup));
        }
        closeMenuFunc();
    };
    groupItem.onkeydown = function(e) {
        if (e.key === 'Enter') this.onclick();
    };
});

// --- MENU OVERLAY ---
const openMenu = document.getElementById('openMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenu = document.getElementById('closeMenu');
const menuBackdrop = menuOverlay.querySelector('.menu-backdrop');
openMenu.onclick = function() {
    menuOverlay.classList.add("active");
};
closeMenu.onclick = closeMenuFunc;
menuBackdrop.onclick = closeMenuFunc;
function closeMenuFunc() {
    menuOverlay.classList.remove("active");
}

// --- SEARCH OVERLAY ---
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
searchBtn.onclick = () => {
    searchOverlay.style.display = "block";
    setTimeout(() => searchInput.focus(), 150);
    searchInput.value = "";
    renderSearchProducts(products); // Hiển thị sản phẩm gợi ý khi vào search
};
closeSearch.onclick = () => {
    searchOverlay.style.display = "none";
};
searchOverlay.onclick = function(e) {
    if (e.target === searchOverlay) searchOverlay.style.display = "none";
};
searchInput.onkeyup = searchProducts;

function searchProducts() {
    const keyword = searchInput.value.trim().toLowerCase();
    if (!keyword) {
        renderSearchProducts(products); // GỢI Ý: hiển thị sản phẩm khi input rỗng
        return;
    }
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(keyword) ||
        p.description.toLowerCase().includes(keyword)
    );
    renderSearchProducts(filtered);
}

function renderSearchProducts(list) {
    if (!list.length) {
        searchResults.innerHTML = `<div class="no-result">Không tìm thấy sản phẩm phù hợp.</div>`;
        return;
    }
    searchResults.innerHTML = `
        <div class="search-product-list">
            ${list.map(p => `
                <div class="search-product-item" onclick="showProductDetail(${p.id});document.getElementById('searchOverlay').style.display='none';">
                    <img src="${p.image}" alt="${p.name}" />
                    <div class="search-product-info">
                        <strong>${p.name}</strong>
                        <div class="price">${p.price.toLocaleString()}đ</div>
                    </div>
                </div>
            `).join("")}
        </div>
    `;
}

// --- Liên hệ ---
const menuContact = document.getElementById('menuContact');
menuContact.onclick = function() {
    alert("Liên hệ: 0123 456 789\nEmail: support@huli.com");
    closeMenuFunc();
};
menuContact.onkeydown = function(e) {
    if (e.key === 'Enter') {
        alert("Liên hệ: 0123 456 789\nEmail: support@huli.com");
        closeMenuFunc();
    }
};

// --- Khởi tạo lần đầu ---
window.onload = function() {
    let idx = Array.from(menuGroups).findIndex(g => g.getAttribute('data-group') === currentGroup);
    if (idx >= 0) menuGroups[idx].classList.add("active");
    renderProducts(products);
};