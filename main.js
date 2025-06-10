// ----------- DANH SÁCH SẢN PHẨM (10 sản phẩm, mỗi sản phẩm có quantityDetails) -----------
const products = [
    {
        id: 1,
        name: "Quần jean Huli",
        description: "Quần dài co giãn, năng động.",
        price: 450000,
        image: "https://i.imgur.com/0y8Ftya.png",
        group: "Quần dài",
        details: "Chất liệu: Denim co giãn, phù hợp cho mọi hoạt động.",
        quantityDetails: {
            "Trắng": {S: 10, M: 15, L: 8},
            "Đen": {S: 5, M: 12, L: 9},
            "Nâu": {S: 2, M: 4, L: 6},
            "Xanh navy": {S: 6, M: 7, L: 5}
        },
        quantity: 15,
        images: [
            "https://i.imgur.com/0y8Ftya.png",
            "https://i.imgur.com/W6XvY3R.jpg",
            "https://i.imgur.com/dwZ5uBV.jpg",
            "https://i.imgur.com/3dD2I7w.jpg"
        ],
        colors: [
            { name: "Trắng", code: "#f3f3f3" },
            { name: "Đen", code: "#222" },
            { name: "Nâu", code: "#7d4c32" },
            { name: "Xanh navy", code: "#344266" }
        ],
        sizes: ["S", "M", "L"],
        defaultColor: 0,
        defaultSize: 1
    },
    {
        id: 2,
        name: "Quần tây Huli",
        description: "Quần dài lịch sự, công sở.",
        price: 520000,
        image: "https://i.imgur.com/fzB6sJp.png",
        group: "Quần dài",
        details: "Chất liệu: Kaki cao cấp, form chuẩn.",
        quantityDetails: {
            "Đen": {S: 3, M: 7, L: 2},
            "Xám": {S: 4, M: 6, L: 5},
            "Nâu": {S: 2, M: 3, L: 2}
        },
        quantity: 7,
        images: [
            "https://i.imgur.com/fzB6sJp.png",
            "https://i.imgur.com/Jx8BfG2.jpg",
            "https://i.imgur.com/7Wm5QoF.jpg",
            "https://i.imgur.com/iI1rM4U.jpg"
        ],
        colors: [
            { name: "Đen", code: "#222" },
            { name: "Xám", code: "#666" },
            { name: "Nâu", code: "#8b4513" }
        ],
        sizes: ["S", "M", "L"],
        defaultColor: 0,
        defaultSize: 1
    },
    {
        id: 3,
        name: "Quần kaki nam",
        description: "Quần dài phong cách trẻ.",
        price: 480000,
        image: "https://i.imgur.com/LRTlCtB.png",
        group: "Quần dài",
        details: "Chất liệu: Kaki, Màu: Đen, Nâu, Be.",
        quantityDetails: {
            "Be": {S: 4, M: 7, L: 8},
            "Đen": {S: 5, M: 6, L: 3},
            "Nâu": {S: 2, M: 2, L: 6}
        },
        quantity: 12,
        images: [
            "https://i.imgur.com/LRTlCtB.png",
            "https://i.imgur.com/1uQW5Q4.jpg",
            "https://i.imgur.com/2r8h4n5.jpg",
            "https://i.imgur.com/9A4m0yQ.jpg"
        ],
        colors: [
            { name: "Be", code: "#e5d7c0" },
            { name: "Đen", code: "#222" },
            { name: "Nâu", code: "#7d4c32" }
        ],
        sizes: ["S", "M", "L"],
        defaultColor: 2,
        defaultSize: 1
    },
    {
        id: 4,
        name: "Quần jogger Huli",
        description: "Quần dài thể thao.",
        price: 399000,
        image: "https://i.imgur.com/nt7yYV5.png",
        group: "Quần dài",
        details: "Chất liệu: Thun, Màu: Đen, Ghi.",
        quantityDetails: {
            "Đen": {S: 7, M: 8, L: 4},
            "Ghi": {S: 6, M: 7, L: 6}
        },
        quantity: 19,
        images: [
            "https://i.imgur.com/nt7yYV5.png",
            "https://i.imgur.com/sjZQv8n.jpg",
            "https://i.imgur.com/8zxgX7U.jpg",
            "https://i.imgur.com/R5oW4rO.jpg"
        ],
        colors: [
            { name: "Đen", code: "#222" },
            { name: "Ghi", code: "#b0b0b0" }
        ],
        sizes: ["S", "M", "L"],
        defaultColor: 0,
        defaultSize: 1
    },
    {
        id: 5,
        name: "Quần âu basic",
        description: "Quần dài công sở.",
        price: 550000,
        image: "https://i.imgur.com/s3b7wF6.png",
        group: "Quần dài",
        details: "Chất liệu: Vải Âu, Màu: Xám, Đen.",
        quantityDetails: {
            "Xám": {S: 3, M: 5, L: 2},
            "Đen": {S: 2, M: 4, L: 4}
        },
        quantity: 10,
        images: [
            "https://i.imgur.com/s3b7wF6.png",
            "https://i.imgur.com/aF9vGRp.jpg",
            "https://i.imgur.com/3V4kF0n.jpg",
            "https://i.imgur.com/tk5g9o8.jpg"
        ],
        colors: [
            { name: "Xám", code: "#888" },
            { name: "Đen", code: "#222" }
        ],
        sizes: ["S", "M", "L"],
        defaultColor: 0,
        defaultSize: 1
    },
    {
        id: 6,
        name: "Quần short nam basic",
        description: "Quần đùi nam thoải mái.",
        price: 330000,
        image: "https://i.imgur.com/9Wfukqu.png",
        group: "Quần đùi",
        details: "Chất liệu: Cotton, Màu sắc trẻ trung.",
        quantityDetails: {
            "Trắng": {S: 9, M: 10, L: 6},
            "Đen": {S: 7, M: 8, L: 7},
            "Xanh": {S: 8, M: 7, L: 10}
        },
        quantity: 25,
        images: [
            "https://i.imgur.com/9Wfukqu.png",
            "https://i.imgur.com/kYt4w3d.jpg",
            "https://i.imgur.com/2w5n6jR.jpg",
            "https://i.imgur.com/kZ7H2iS.jpg"
        ],
        colors: [
            { name: "Trắng", code: "#f3f3f3" },
            { name: "Đen", code: "#222" },
            { name: "Xanh", code: "#0097a7" }
        ],
        sizes: ["S", "M", "L"],
        defaultColor: 2,
        defaultSize: 1
    },
    {
        id: 7,
        name: "Quần short nam thể thao",
        description: "Quần đùi nam thể thao năng động.",
        price: 340000,
        image: "https://i.imgur.com/5sZ9ZP7.png",
        group: "Quần đùi",
        details: "Chất vải mềm, thoáng mát.",
        quantityDetails: {
            "Đen": {S: 6, M: 7, L: 3},
            "Xám": {S: 4, M: 6, L: 6}
        },
        quantity: 16,
        images: [
            "https://i.imgur.com/5sZ9ZP7.png",
            "https://i.imgur.com/4f2dN5F.jpg",
            "https://i.imgur.com/6Q8lV8o.jpg",
            "https://i.imgur.com/bC5Wn0m.jpg"
        ],
        colors: [
            { name: "Đen", code: "#222" },
            { name: "Xám", code: "#888" }
        ],
        sizes: ["S", "M", "L"],
        defaultColor: 0,
        defaultSize: 1
    },
    {
        id: 8,
        name: "Quần short jean nam",
        description: "Quần đùi jean nam trẻ trung.",
        price: 370000,
        image: "https://i.imgur.com/V1j0Y7B.png",
        group: "Quần đùi",
        details: "Chất liệu: Denim, Form ngắn trẻ trung.",
        quantityDetails: {
            "Xanh": {S: 7, M: 5, L: 5},
            "Đen": {S: 2, M: 3, L: 3}
        },
        quantity: 13,
        images: [
            "https://i.imgur.com/V1j0Y7B.png",
            "https://i.imgur.com/3g6wV9D.jpg",
            "https://i.imgur.com/Z0WvQ9P.jpg",
            "https://i.imgur.com/vC8wH1q.jpg"
        ],
        colors: [
            { name: "Xanh", code: "#344266" },
            { name: "Đen", code: "#222" }
        ],
        sizes: ["S", "M", "L"],
        defaultColor: 0,
        defaultSize: 1
    },
    {
        id: 9,
        name: "Quần short thể thao nam",
        description: "Quần đùi thể thao nam.",
        price: 290000,
        image: "https://i.imgur.com/0y8Ftya.png",
        group: "Quần đùi",
        details: "Chất liệu: Poly co giãn, thấm hút mồ hôi.",
        quantityDetails: {
            "Đen": {S: 10, M: 10, L: 10},
            "Cam": {S: 2, M: 2, L: 2}
        },
        quantity: 30,
        images: [
            "https://i.imgur.com/0y8Ftya.png",
            "https://i.imgur.com/7K9sQ8f.jpg",
            "https://i.imgur.com/9R5wZ3y.jpg",
            "https://i.imgur.com/2qW6n8T.jpg"
        ],
        colors: [
            { name: "Đen", code: "#222" },
            { name: "Cam", code: "#e67e22" }
        ],
        sizes: ["S", "M", "L"],
        defaultColor: 0,
        defaultSize: 1
    },
    {
        id: 10,
        name: "Quần short vải đũi nam",
        description: "Quần đùi vải đũi nam mặc nhà mát.",
        price: 310000,
        image: "https://i.imgur.com/fzB6sJp.png",
        group: "Quần đùi",
        details: "Chất liệu: Đũi tự nhiên, siêu nhẹ.",
        quantityDetails: {
            "Trắng": {S: 2, M: 2, L: 2},
            "Đen": {S: 2, M: 1, L: 1},
            "Xanh": {S: 1, M: 1, L: 0}
        },
        quantity: 8,
        images: [
            "https://i.imgur.com/fzB6sJp.png",
            "https://i.imgur.com/xW2dV4z.jpg",
            "https://i.imgur.com/8K7lT4w.jpg",
            "https://i.imgur.com/5Q7bJ8v.jpg"
        ],
        colors: [
            { name: "Trắng", code: "#f3f3f3" },
            { name: "Đen", code: "#222" },
            { name: "Xanh", code: "#344266" }
        ],
        sizes: ["S", "M", "L"],
        defaultColor: 0,
        defaultSize: 1
    }
];

// ----------- FAQ -----------
const PRODUCT_FAQ = [
    {
        q: "Làm thế nào để kiểm tra tình trạng đơn hàng?",
        a: "Bạn có thể kiểm tra tình trạng đơn hàng bằng cách gọi hotline hoặc nhắn qua Zalo: 0383770005."
    },
    {
        q: "Chính sách đổi/trả sản phẩm?",
        a: "Đổi trả trong 7 ngày với sản phẩm chưa qua sử dụng, giữ nguyên tem mác. Liên hệ Zalo để hỗ trợ đổi trả."
    },
    {
        q: "Hỗ trợ về thanh toán?",
        a: "Hỗ trợ thanh toán COD, chuyển khoản, qua ví Momo, ZaloPay."
    },
    {
        q: "HULI có các cửa hàng ở đâu?",
        a: "Hiện tại HULI chủ yếu bán online. Bạn có thể đặt hàng qua website hoặc Zalo, Facebook."
    },
    {
        q: "Cách chọn size sản phẩm phù hợp?",
        a: "Tham khảo bảng size, hoặc nhấn vào 'Kiểm tra kích cỡ' để được hướng dẫn chi tiết."
    },
    {
        q: "Có hỗ trợ giao hàng toàn quốc không?",
        a: "HULI giao hàng toàn quốc qua các đối tác vận chuyển uy tín."
    },
    {
        q: "Tôi muốn xuất hóa đơn VAT?",
        a: "Vui lòng liên hệ Zalo hoặc hotline để nhận hỗ trợ xuất hóa đơn VAT."
    },
    {
        q: "Khuyến mãi hiện tại là gì?",
        a: "Các chương trình khuyến mãi sẽ được thông báo trên website và fanpage."
    },
    {
        q: "Làm thế nào để bảo quản sản phẩm?",
        a: "Giặt nhẹ, không tẩy mạnh, phơi nơi khô thoáng để giữ chất lượng sản phẩm."
    },
    {
        q: "Sản phẩm có bảo hành không?",
        a: "Sản phẩm được bảo hành lỗi sản xuất trong 15 ngày kể từ khi nhận hàng."
    }
];

// ----------- RENDER SẢN PHẨM -----------
let currentGroup = "Tất cả";
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

// ----------- POPUP CHI TIẾT SẢN PHẨM -----------
let currentPopupColor = null;
let currentPopupSize = null;
function showProductDetail(id) {
    const product = products.find(p => p.id == id);
    if (!product) return;
    const modal = document.getElementById('productModal');
    const content = document.getElementById('modalContent');

    currentPopupColor = product.defaultColor;
    currentPopupSize = product.defaultSize;

    // Ảnh slider
    let imagesHtml = "";
    if (product.images && product.images.length) {
        imagesHtml = `
            <div class="product-images-slider">
                ${product.images.map((img, idx) => `
                    <img src="${img}" alt="${product.name} ${idx + 1}" class="slider-img" style="display:${idx===0?'block':'none'}" onclick="showImageFullscreen('${img}')"/>
                `).join("")}
                <div class="slider-controls">
                    <button class="slider-prev">&#10094;</button>
                    <button class="slider-next">&#10095;</button>
                </div>
            </div>
        `;
    }
    // Màu sắc
    let colorHtml = "";
    if(product.colors){
        colorHtml = `
        <div class="product-color-row" id="popupColorRow">
            <span style="margin-right:12px;">Màu sắc:</span>
            ${product.colors.map((color,i)=>`
                <span class="color-dot${i===product.defaultColor?' active':''}" data-color="${i}" style="background:${color.code}" title="${color.name}"></span>
            `).join('')}
            <span class="popup-color-name" style="margin-left:10px;font-size:0.98em;">${product.colors[product.defaultColor].name}</span>
        </div>
        `;
    }
    // Size
    let sizeHtml = "";
    if(product.sizes){
        sizeHtml = `
        <div class="product-size-row" id="popupSizeRow">
            <span style="margin-right:12px;">Kích cỡ:</span>
            ${product.sizes.map((size,i)=>`
                <span class="size-item${i===product.defaultSize?' active':''}" data-size="${i}">${size}</span>
            `).join('')}
            <span class="popup-size-name" style="margin-left:14px;font-size:0.98em;">NAM ${product.sizes[product.defaultSize]}</span>
        </div>
        `;
    }
    let quantityDetailHtml = `
        <div class="product-quantity-detail-row" id="popupQuantityDetailRow"></div>
    `;
    let sizeCheckHtml = `
        <div class="check-size-row">
            <a class="check-size-link" id="openSizeModal"><span style="margin-right:4px;">&#128206;</span>Kiểm tra kích cỡ</a>
        </div>
    `;
    let faqHtml = `
        <div class="product-faq-title">CÂU HỎI THƯỜNG GẶP</div>
        <ul class="product-faq-list">
            ${PRODUCT_FAQ.map((item,i)=>`
                <li>
                    <button class="faq-question" onclick="toggleFaqAnswer(this)">${item.q}</button>
                    <div class="faq-answer">${item.a}</div>
                </li>
            `).join('')}
        </ul>
    `;
    content.innerHTML = `
        <span class="close" id="closeModalBtn">&times;</span>
        ${imagesHtml}
        <h3>${product.name}</h3>
        <div class="price">${product.price.toLocaleString()}đ</div>
        <p><b>Mô tả:</b> ${product.description}</p>
        <p><b>Thông tin chi tiết:</b> ${product.details ? product.details : ''}</p>
        ${colorHtml}
        ${sizeHtml}
        ${quantityDetailHtml}
        ${sizeCheckHtml}
        <button class="zalo-button-big" onclick="window.open('https://zalo.me/0383770005','_blank')">ZALO</button>
        <div style="margin-top:16px;font-size:1.02em;">
          <b>Hoặc gọi ngay:</b> <a href="tel:0383770005" style="color:#1976d2;font-weight:600;">0383770005</a>
        </div>
        <div class="product-faq">${faqHtml}</div>
    `;
    modal.style.display = "block";

    // Slider logic
    let currentImgIdx = 0;
    const sliderImgs = content.querySelectorAll('.slider-img');
    if (sliderImgs.length) {
        const showImg = idx => {
            sliderImgs.forEach((img, i) => {
                img.style.display = i === idx ? "block" : "none";
            });
        };
        content.querySelector('.slider-prev').onclick = e => {
            e.stopPropagation();
            currentImgIdx = (currentImgIdx - 1 + sliderImgs.length) % sliderImgs.length;
            showImg(currentImgIdx);
        };
        content.querySelector('.slider-next').onclick = e => {
            e.stopPropagation();
            currentImgIdx = (currentImgIdx + 1) % sliderImgs.length;
            showImg(currentImgIdx);
        };
    }

    document.getElementById('closeModalBtn').onclick = closeModal;
    modal.onclick = function(e) { if (e.target === modal) closeModal(); };

    // Bấm chọn màu
    const colorRow = content.querySelector('#popupColorRow');
    if(colorRow) {
        colorRow.querySelectorAll('.color-dot').forEach(dot => {
            dot.onclick = function(e){
                e.stopPropagation();
                currentPopupColor = Number(this.getAttribute('data-color'));
                colorRow.querySelectorAll('.color-dot').forEach((d,i)=>{
                    if(i===currentPopupColor) d.classList.add('active');
                    else d.classList.remove('active');
                });
                colorRow.querySelector('.popup-color-name').innerText = product.colors[currentPopupColor].name;
                updateQuantityDetailUI(product);
            }
        });
    }
    // Bấm chọn size
    const sizeRow = content.querySelector('#popupSizeRow');
    if(sizeRow) {
        sizeRow.querySelectorAll('.size-item').forEach(item => {
            item.onclick = function(e){
                e.stopPropagation();
                currentPopupSize = Number(this.getAttribute('data-size'));
                sizeRow.querySelectorAll('.size-item').forEach((d,i)=>{
                    if(i===currentPopupSize) d.classList.add('active');
                    else d.classList.remove('active');
                });
                sizeRow.querySelector('.popup-size-name').innerText = "NAM " + product.sizes[currentPopupSize];
                updateQuantityDetailUI(product);
            }
        });
    }
    // Nút kiểm tra kích cỡ
    const sizeBtn = content.querySelector("#openSizeModal");
    if(sizeBtn) sizeBtn.onclick = openSizeGuideModal;

    // Số lượng còn lại (dot màu, số xanh, nền xám, cập nhật mỗi ngày)
    function updateQuantityDetailUI(product) {
        const colorName = product.colors[currentPopupColor].name;
        const sizeName = product.sizes[currentPopupSize];
        const detailObj = (product.quantityDetails && product.quantityDetails[colorName]) || {};
        const count = detailObj[sizeName] ?? 0;
        const colorCode = product.colors[currentPopupColor].code;
        const html = `
          <div class="quantity-detail-item">
            <span class="quantity-detail-color-dot" style="background:${colorCode}"></span>
            <b>${colorName}</b> ${sizeName} còn 
            <span class="quantity-number">${count}</span> cái
          </div>
          <div class="quantity-update">(cập nhật mỗi ngày)</div>
        `;
        const detailDiv = document.getElementById('popupQuantityDetailRow');
        if(detailDiv) {
            detailDiv.innerHTML = html;
            detailDiv.classList.add('active');
        }
    }
    setTimeout(()=>updateQuantityDetailUI(product),0);
}

// ----------- FAQ POPUP -----------
window.toggleFaqAnswer = function(btn) {
    const ans = btn.nextElementSibling;
    if(ans.style.display==="block") {
        ans.style.display="none";
        btn.classList.remove("opened");
    } else {
        document.querySelectorAll('.faq-answer').forEach(a=>a.style.display="none");
        document.querySelectorAll('.faq-question').forEach(q=>q.classList.remove("opened"));
        ans.style.display="block";
        btn.classList.add("opened");
    }
};

// ----------- SIZE GUIDE POPUP -----------
function openSizeGuideModal(){
    let modal = document.getElementById("sizeGuideModal");
    if(!modal){
        modal = document.createElement("div");
        modal.id = "sizeGuideModal";
        modal.className = "modal";
        modal.innerHTML = `
            <div class="modal-content size-guide-modal-content">
                <span class="close" id="closeSizeGuideModalBtn">&times;</span>
                <div class="size-guide-title">Kiểm tra kích cỡ</div>
                <div style="text-align:center;margin-bottom:16px;">
                    <div style="color:#888;font-size:0.97em;margin-top:4px;">(Bấm vào ảnh để phóng to)</div>
                </div>
                <div class="size-guide-row">
                    <span class="size-guide-icon">👕</span>
                    <div>
                        <b class="size-guide-link" id="openSizeImage" style="cursor:pointer;color:#1976d2;text-decoration:underline;">Bảng Kích Thước</b><br>
                        Kiểm tra kích cỡ sản phẩm và so sánh với các sản phẩm tương tự (cùng loại) mà bạn đã mua trước đó
                    </div>
                </div>
                <div class="size-guide-row">
                    <span class="size-guide-icon">📏</span>
                    <div>
                        <b>Hướng dẫn chọn chiều dài theo kiểu dáng</b>
                        <span style="color:#888;font-size:0.98em;">(đang cập nhật)</span><br>
                        <span style="color:#888;">Hình minh họa kích thước sản phẩm theo chiều cao</span>
                    </div>
                </div>
                <div class="size-guide-row">
                    <span class="size-guide-icon">👖</span>
                    <div>
                        <b>MySize ASSIST</b>
                        <span style="color:#888;font-size:0.98em;">(đang cập nhật)</span><br>
                        <span style="color:#888;">Kiểm tra và chỉnh sửa số đo được gợi ý bằng cách nhập số đo đơn giản hoặc chụp hình.</span>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    modal.style.display = "block";
    document.getElementById('closeSizeGuideModalBtn').onclick = closeSizeGuideModal;
    modal.onclick = function(e) {
        if (e.target === modal) closeSizeGuideModal();
    };

    // Bấm vào ảnh để phóng to
    const sizeGuideImage = document.getElementById('sizeGuideImage');
    if(sizeGuideImage){
        sizeGuideImage.onclick = function(e){
            e.stopPropagation();
            showImageFullscreen('images/kichthuoc.jpg');
        };
    }
    // Bấm vào "Bảng Kích Thước" cũng phóng to
    const openSizeImage = document.getElementById('openSizeImage');
    if(openSizeImage){
        openSizeImage.onclick = function(e){
            e.stopPropagation();
            showImageFullscreen('images/kichthuoc.jpg');
        };
    }
}
function closeSizeGuideModal(){
    document.getElementById('sizeGuideModal').style.display = "none";
}
function closeModal() {
    document.getElementById('productModal').style.display = "none";
    const sizeModal = document.getElementById('sizeGuideModal');
    if(sizeModal) sizeModal.style.display = "none";
}

// ----------- PHÓNG TO ẢNH -----------
function showImageFullscreen(imgUrl) {
    let overlay = document.getElementById('imageFullscreenOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'imageFullscreenOverlay';
        overlay.className = 'image-fullscreen-overlay';
        overlay.innerHTML = `
            <img id="fullscreenImage" src="" alt="Ảnh sản phẩm" />
            <span class="close-fullscreen-image" id="closeFullscreenImage">&times;</span>
        `;
        document.body.appendChild(overlay);
    }
    const img = overlay.querySelector('#fullscreenImage');
    img.src = imgUrl;
    overlay.style.display = 'flex';
    document.getElementById('closeFullscreenImage').onclick = () => overlay.style.display = 'none';
    overlay.onclick = function(e) { if (e.target === overlay) overlay.style.display = 'none'; };
}

// ----------- MENU & SEARCH OVERLAY -----------
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
const openMenu = document.getElementById('openMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenu = document.getElementById('closeMenu');
const menuBackdrop = menuOverlay.querySelector('.menu-backdrop');
openMenu.onclick = function() { menuOverlay.classList.add("active"); };
closeMenu.onclick = closeMenuFunc;
menuBackdrop.onclick = closeMenuFunc;
function closeMenuFunc() { menuOverlay.classList.remove("active"); }

const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
searchBtn.onclick = () => {
    searchOverlay.style.display = "block";
    setTimeout(() => searchInput.focus(), 150);
    searchInput.value = "";
    renderSearchProducts(products);
};
closeSearch.onclick = () => { searchOverlay.style.display = "none"; };
searchOverlay.onclick = function(e) { if (e.target === searchOverlay) searchOverlay.style.display = "none"; };
searchInput.onkeyup = searchProducts;

function searchProducts() {
    const keyword = searchInput.value.trim().toLowerCase();
    if (!keyword) {
        renderSearchProducts(products);
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

// ----------- LIÊN HỆ -----------
const menuContact = document.getElementById('menuContact');
menuContact.onclick = function() { showContactModal(); closeMenuFunc(); };
menuContact.onkeydown = function(e) { if (e.key === 'Enter') { showContactModal(); closeMenuFunc(); } };
function showContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = "block";
    document.getElementById('closeContactModalBtn').onclick = closeContactModal;
    modal.onclick = function(e) { if (e.target === modal) closeContactModal(); };
}
function closeContactModal() { document.getElementById('contactModal').style.display = "none"; }

// ----------- HIỆU ỨNG LOADING HULI: CHỮ ĐỨNG YÊN -----------
window.onload = function() {
    let idx = Array.from(document.querySelectorAll('.menu-group')).findIndex(g => g.getAttribute('data-group') === currentGroup);
    if (idx >= 0) document.querySelectorAll('.menu-group')[idx].classList.add("active");
    renderProducts(products);
    renderVideos(videos);

    // Loading HULI overlay dạng chữ đứng yên
    const huliLogo = document.getElementById('huliLogo');
    const huliLoadingOverlay = document.getElementById('huliLoadingOverlay');
    const huliLoadingMessage = document.getElementById('huliLoadingMessage');
    if (huliLogo && huliLoadingOverlay && huliLoadingMessage) {
        huliLogo.style.cursor = 'pointer';
        huliLogo.onclick = function() {
            huliLoadingMessage.textContent = "xin vui lòng đợi, Huli";
            huliLoadingOverlay.classList.add('active');
            setTimeout(() => {
                huliLoadingOverlay.classList.remove('active');
                window.location.reload();
            }, 1500);
        };
    }
};