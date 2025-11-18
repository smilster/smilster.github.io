
const creditsData = {
    id: 'credits',
    category: 'Credits',
    name: '',
    links: [
        links.gitHub,
        links.codeOss,
        links.webStorm,
        links.bootstrap,
        links.flaticon,
        links.svgRepo
    ]
}


const creditModal = new Modal(creditsData);

creditModal.dialog.classList.remove('modal-lg');
creditModal.dialog.classList.add('modal-sm');

creditsData.links.forEach(link => {
    const linkEl = document.createElement('a');
    linkEl.href = link.href;
    linkEl.innerText = link.label;
    linkEl.rel = 'external';
    creditModal.body.appendChild(linkEl);
    creditModal.body.innerHTML += '<br>';
})

document.getElementById('modal-container').append(creditModal.div);


////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////

const legatData = {
    id: 'legal',
    category: 'Impressum',
    name: ''
}
const legalModal = new Modal(legatData);

legalModal.dialog.classList.remove('modal-lg');
legalModal.dialog.classList.add('modal-sm');
legalModal.body.classList.add('imp-body')


const legal = document.createElement('div');
legal.style.height = '80px';
legal.style.position = 'relative';

legalModal.body.appendChild(legal);

const mail = document.createElement('div');
mail.style.height = '30px';
mail.style.position = 'relative';
mail.innerHTML = '';
mail.innerHTML +=`
<div class="em em-gxdeu">l</div>
<div class="em em-dseay">c</div>
<div class="em em-qmcjz">r</div>
<div class="em em-hsidc">@</div>
<div class="em em-fthjm">t</div>
<div class="em em-gfotm">l</div>
<div class="em em-maiuu">s</div>
<div class="em em-tlokg">e</div>
<div class="em em-ofnkb">o</div>
<div class="em em-ubccq">i</div>
<div class="em em-kavol">s</div>
<div class="em em-fyfxx">i</div>
<div class="em em-cldro">m</div>
<div class="em em-tlzjk">g</div>
<div class="em em-frgrq">m</div>
<div class="em em-dfhdj">a</div>
<div class="em em-iaqmz">.</div>
<div class="em em-iuvia">m</div>
`

legalModal.body.appendChild(mail);


legal.innerHTML += `<div class="imp hkxrt">w</div>
<div class="imp toqad">s</div>
<div class="imp ebqwa">a</div>
<div class="imp pvrns"> </div>
<div class="imp whtnv">g</div>
<div class="imp bfxfg"> </div>
<div class="imp ahqji">s</div>
<div class="imp sqoyp">l</div>
<div class="imp ilsey">e</div>
<div class="imp zvmoz">g</div>
<div class="imp syswt">b</div>
<div class="imp kigmf">F</div>
<div class="imp hmptm">4</div>
<div class="imp mwwnn">ä</div>
<div class="imp ikuln">7</div>
<div class="imp bbkws">h</div>
<div class="imp vkicw">9</div>
<div class="imp vzquq">t</div>
<div class="imp jmodc">n</div>
<div class="imp gravu">1</div>
<div class="imp svaru">u</div>
<div class="imp afrve">e</div>
<div class="imp mdwey">5</div>
<div class="imp tbpfu">ä</div>
<div class="imp ugwen">i</div>
<div class="imp zjdib">r</div>
<div class="imp xxfiv">e</div>
<div class="imp wsyfl">e</div>
<div class="imp rurst">e</div>
<div class="imp jatgf">r</div>
<div class="imp vtywf">i</div>
<div class="imp ckhty">r</div>
<div class="imp qionv">J</div>
<div class="imp elbkc"> </div>
<div class="imp nmskv">b</div>
<div class="imp ytmwe">l</div>
<div class="imp wvvuo">s</div>
<div class="imp fhpqb">a</div>
<div class="imp sweik">M</div>
<div class="imp gsbkz">S</div>
<div class="imp vwjuj">i</div>
<div class="imp lbhvn">e</div>
<div class="imp hizue">0</div>
<div class="imp mcyzg">r</div>
<div class="imp fozuu">t</div>
<div class="imp nxxyy">3</div>
<div class="imp esaef">g</div>
<div class="imp vdrwh">u</div>


`
// legalModal.dialog.classList.remove('modal-lg');
// legalModal.dialog.classList.add('modal-sm');
document.getElementById('modal-container').append(legalModal.div);