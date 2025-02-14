document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector('.loader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
        }, 500);
    }, 1000);

    createCandles();
    loadMartyrs();
    document.getElementById('searchInput').addEventListener('input', filterMartyrs);
});

// Candle Implementation
function createCandles() {
    const candleGrid = document.getElementById('candleGrid');
    for (let i = 0; i < 40; i++) {
        const candle = document.createElement('div');
        candle.className = 'candle';
        candle.innerHTML = '🕯️';
        candle.onclick = function () {
            this.classList.toggle('lit');
            this.innerHTML = this.classList.contains('lit') ? '🔥' : '🕯️';
        };
        candleGrid.appendChild(candle);
    }
}

// Martyrs Data
const martyrs = [
    
    { name: "Ajit Kumar", state: "Uttar Pradesh", regiment: "76th Battalion",  image: "images/ajit_kumar.png"  },
    { name: "Amit Kumar", state: "Rajasthan", regiment: "76th Battalion", image: "images/amit_kumar.png"  },
    { name: "Ashvni Kumar", state: "Madhya Pradesh", regiment: "115th Battalion", image: "images/ashvni_kumar.png" },
    { name: "Awadhesh Yadav", state: "Uttar Pradesh", regiment: "76th Battalion", image: "images/awadhesh_yadav.png" },
    { name: "Bablu Santra", state: "West Bengal", regiment: "76th Battalion", image: "images/bablu_santra.png" },
    { name: "Bhagirath Singh", state: "Rajasthan", regiment: "76th Battalion", image: "images/bhagirath_singh.png" },
    { name: "C. Sivachandran", state: "Tamil Nadu", regiment: "76th Battalion", image: "images/c_sivachandran.png" },
    { name: "G.D. Guru", state: "Karnataka", regiment: "76th Battalion", image: "images/gd_guru.png" },
    { name: "Hemraj Meena", state: "Rajasthan", regiment: "76th Battalion", image: "images/hemraj_meena.png" },
    { name: "Jaimal Singh", state: "Punjab", regiment: "76th Battalion", image: "images/jaimal_singh.png" },
    { name: "Jeet Ram", state: "Rajasthan", regiment: "76th Battalion", image: "images/jeet_ram.png" },
    { name: "Koushal Rawat", state: "Uttar Pradesh", regiment: "76th Battalion", image: "images/koushal_rawat.png" },
    { name: "Kulwinder Singh", state: "Punjab", regiment: "76th Battalion", image: "images/kulwinder_singh.png" },
    { name: "Mahesh Kumar", state: "Uttar Pradesh", regiment: "76th Battalion", image: "images/mahesh_kumar.png" },
    { name: "Maneswar Bsumatari", state: "Assam", regiment: "76th Battalion", image: "images/maneswar_bsumatari.png" },
    { name: "Maninder Singh", state: "Punjab", regiment: "76th Battalion", image: "images/maninder_singh.png" },
    { name: "Manoj Kumar", state: "Odisha", regiment: "76th Battalion", image: "images/manoj_kumar.png" },
    { name: "Mohan Lal", state: "Uttarakhand", regiment: "76th Battalion", image: "images/mohan_lal.png" },
    { name: "Narayan Lal", state: "Rajasthan", regiment: "76th Battalion", image: "images/narayan_lal.png" },
    { name: "Naseer Ahmad", state: "Jammu & Kashmir", regiment: "76th Battalion", image: "images/naseer_ahmad.png" },
    { name: "Nitin Rathod", state: "Maharashtra", regiment: "76th Battalion", image: "images/nitin_rathod.png" },
    { name: "P.K. Sahoo", state: "Odisha", regiment: "76th Battalion", image: "images/pk_sahoo.png" },
    { name: "Pradeep Singh", state: "Uttar Pradesh", regiment: "76th Battalion", image: "images/pradeep_singh.png" },
    { name: "P.S. N.K.S.J. Tripathi", state: "Uttar Pradesh", regiment: "76th Battalion", image: "images/psnksj_tripathi.png" },
    { name: "Ram Vakeel", state: "Uttar Pradesh", regiment: "76th Battalion", image: "images/ram_vakeel.png" },
    { name: "Ramesh Yadav", state: "Uttar Pradesh", regiment: "76th Battalion", image: "images/ramesh_yadav.png" },
    { name: "Ratan Thakur", state: "Bihar", regiment: "76th Battalion", image: "images/ratan_thakur.png" },
    { name: "Rohitash Lamba", state: "Rajasthan", regiment: "76th Battalion", image: "images/rohitash_lamba.png" },
    { name: "Sanjay Rajput", state: "Maharashtra", regiment: "110th Battalion", image: "images/sanjay_rajput.png" },
    { name: "Sanjay Sinha", state: "Bihar", regiment: "76th Battalion", image: "images/sanjay_sinha.png" },
    { name: "Shyam Babu", state: "Uttar Pradesh", regiment: "76th Battalion", image: "images/shyam_babu.png" },
    { name: "Sudip Biswas", state: "West Bengal", regiment: "76th Battalion", image: "images/sudip_biswas.png" },
    { name: "Subramaniam G", state: "Tamil Nadu", regiment: "76th Battalion", image: "images/subramaniam_g.png" },
    { name: "Sukhjinder Singh", state: "Punjab", regiment: "76th Battalion", image: "images/sukhjinder_singh.png" },
    { name: "Sushil Kumar R", state: "Tamil Nadu", regiment: "76th Battalion", image: "images/sushil_kumar.png" },
    { name: "Tilak Raj", state: "Himachal Pradesh", regiment: "76th Battalion", image: "images/tilak_raj.png" },
    { name: "Vasantha Kumar", state: "Kerala", regiment: "76th Battalion", image: "images/vasantha_kumar.png" },
    { name: "Vijay Mourya", state: "Uttar Pradesh", regiment: "76th Battalion", image: "images/vijay_mourya.png" },
    { name: "Vijay Soreng", state: "Jharkhand", regiment: "76th Battalion", image: "images/vijay_soreng.png" },
    { name: "Virendra Singh", state: "Uttarakhand", regiment: "76th Battalion", image: "images/virendra_singh.png" },
];

function loadMartyrs() {
    const grid = document.getElementById('martyrsGrid');
    martyrs.forEach((martyr) => {
        const card = document.createElement('div');
        card.className = 'martyr-card';
        card.innerHTML = `
            <img src="${martyr.image}" alt="${martyr.name}">
            <h3>${martyr.name}</h3>
            <p>State: ${martyr.state}</p>
            <p>Regiment: ${martyr.regiment}</p>
        `;
        grid.appendChild(card);
    });
}

function filterMartyrs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.martyr-card').forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(searchTerm) ? 'block' : 'none';
    });
}

function lightAllCandles() {
    document.querySelectorAll('.candle').forEach(candle => {
        candle.classList.add('lit');
        candle.innerHTML = '🔥';
    });
}
