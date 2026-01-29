// As 7 Maravilhas do Mundo Moderno (fallback local). Se Firebase estiver configurado, os dados serão carregados do Firestore.
let todasPaisagens = [
    {
        id: 1,
        nome: "Grande Muralha da China",
        preco: 329.90,
        imagem: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop&crop=center",
        localizacao: "Beijing, China",
        historia: "A Grande Muralha da China é uma das maiores obras de engenharia da humanidade, construída ao longo de mais de 2.000 anos por diferentes dinastias. Com mais de 21.000 km de extensão total, foi construída principalmente para proteger o império chinês de invasões do norte. A muralha que vemos hoje foi principalmente construída durante a dinastia Ming (1368-1644). Empregou milhões de trabalhadores ao longo dos séculos e é considerada o maior cemitério do mundo devido às inúmeras mortes durante sua construção."
    },
    {
        id: 2,
        nome: "Torre Eiffel - França",
        preco: 259.90,
        imagem: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop&crop=center",
        localizacao: "Paris, França",
        historia: "A Torre Eiffel foi construída entre 1887 e 1889 pelo engenheiro Gustave Eiffel para a Exposição Universal de Paris de 1889, comemorando o centenário da Revolução Francesa. Com 330 metros de altura, foi a estrutura mais alta do mundo por 41 anos. Inicialmente criticada por artistas e intelectuais parisienses, que a consideravam uma 'monstruosidade', hoje é o símbolo mais icônico de Paris e da França. Feita de ferro pudlado, pesa aproximadamente 10.100 toneladas e recebe mais de 7 milhões de visitantes por ano, sendo o monumento pago mais visitado do mundo."
    },
    {
        id: 3,
        nome: "Cristo Redentor - Brasil",
        preco: 189.90,
        imagem: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop&crop=center",
        localizacao: "Rio de Janeiro, Brasil",
        historia: "O Cristo Redentor, com seus 38 metros de altura (incluindo o pedestal de 8 metros), foi inaugurado em 1931 no topo do Corcovado, a 710 metros de altitude. A estátua Art Déco foi projetada pelo francês Paul Landowski e construída pelo engenheiro brasileiro Heitor da Silva Costa. É feita de concreto armado e revestida com pedra-sabão, pesando 635 toneladas. A construção levou 9 anos para ser concluída e foi eleita uma das Novas Sete Maravilhas do Mundo em 2007, tornando-se símbolo do Rio de Janeiro e do Brasil."
    },
    {
        id: 4,
        nome: "Machu Picchu - Peru",
        preco: 349.90,
        imagem: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&h=300&fit=crop&crop=center",
        localizacao: "Cusco, Peru",
        historia: "Machu Picchu, a 'Cidade Perdida dos Incas', foi construída no século XV pelo imperador inca Pachacuti como residência real e centro cerimonial. Situada a 2.430 metros de altitude nos Andes peruanos, a cidade permaneceu escondida do mundo por mais de 400 anos até ser apresentada ao mundo ocidental por Hiram Bingham em 1911. Construída com técnicas arquitetônicas extraordinárias, suas pedras se encaixam perfeitamente sem argamassa. Os incas eram mestres em astronomia, e muitas estruturas estão alinhadas com eventos celestiais como solstícios e equinócios."
    },
    {
        id: 5,
        nome: "Pirâmides de Gizé - Egito",
        preco: 379.90,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1200px-All_Gizah_Pyramids.jpg",
        localizacao: "Gizé, Egito",
        historia: "As Pirâmides de Gizé são o único remanescente das Sete Maravilhas do Mundo Antigo ainda de pé. Construídas há mais de 4.500 anos durante a IV dinastia do Antigo Egito, o complexo inclui as pirâmides de Quéops (a Grande Pirâmide), Quéfren e Miquerinos. A Grande Pirâmide, com 146 metros de altura original, foi a estrutura mais alta construída pelo homem por mais de 3.800 anos. Feitas de milhões de blocos de pedra calcária e granito, as pirâmides serviam como tumbas para os faraós e eram acompanhadas por templos e outras estruturas funerárias. A precisão arquitetônica e o alinhamento astronômico das pirâmides continuam a fascinar estudiosos e visitantes."
    }
];

// --- Inicialização do Firebase (opcional) ---
let useFirestore = false;
let db = null;
console.log('DEBUG: window.FIREBASE_CONFIG present?', !!window.FIREBASE_CONFIG);
console.log('DEBUG: firebase defined?', typeof firebase !== 'undefined');
if (window.FIREBASE_CONFIG && typeof firebase !== 'undefined') {
    try {
        firebase.initializeApp(window.FIREBASE_CONFIG);
        db = firebase.firestore();
        useFirestore = true;
        console.log('Firestore habilitado');
        console.log('DEBUG: firebase.apps.length =', (firebase.apps && firebase.apps.length) || 0);
    } catch (e) {
        console.warn('Falha ao inicializar Firebase:', e);
    }
} else {
    console.warn('Firebase não inicializado: confira `firebase-config.js` e a inclusão dos scripts do SDK.');
}

// Funções mínimas para renderizar a galeria e controlar os modais/carrinho
const paisagensGrid = document.getElementById('paisagensGrid');
const modalDetalhes = document.getElementById('modalDetalhes');
const modalTitulo = document.getElementById('modalTitulo');
const modalImagem = document.getElementById('modalImagem');
const modalPreco = document.getElementById('modalPreco');
const modalLocalizacao = document.getElementById('modalLocalizacao');
const modalHistoria = document.getElementById('modalHistoria');
const tamanhoSelect = document.getElementById('tamanhoSelect');
const adicionarCarrinhoBtn = document.getElementById('adicionarCarrinho');
const fecharModalBtn = document.getElementById('fecharModal');

const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const modalCarrinho = document.getElementById('modalCarrinho');
const fecharCarrinhoBtn = document.getElementById('fecharCarrinho');
const itensCarrinhoEl = document.getElementById('itensCarrinho');
const totalCarrinhoEl = document.getElementById('totalCarrinho');

// Modais de login/cadastro
const modalLogin = document.getElementById('modalLogin');
const modalCadastro = document.getElementById('modalCadastro');
const fecharLogin = document.getElementById('fecharLogin');
const fecharCadastro = document.getElementById('fecharCadastro');
const irParaCadastro = document.getElementById('irParaCadastro');
const irParaLogin = document.getElementById('irParaLogin');
const loginBtnHeader = document.getElementById('loginBtn');
const cadastroBtnHeader = document.getElementById('cadastroBtn');

let carrinho = [];
let paisagemSelecionada = null;

function formatBRL(value){
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderPaisagens(){
    paisagensGrid.innerHTML = '';
    todasPaisagens.forEach(p => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl overflow-hidden shadow card-hover';
        card.innerHTML = `
            <img src="${p.imagem}" alt="${p.nome}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h4 class="text-xl font-semibold mb-2">${p.nome}</h4>
                <p class="text-green-600 font-bold mb-4">${formatBRL(p.preco)}</p>
                <div class="flex justify-between items-center">
                    <button class="abrirDetalhes bg-purple-600 text-white px-4 py-2 rounded-lg">Ver detalhes</button>
                    <button class="adicionarRapido bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">Adicionar</button>
                </div>
            </div>
        `;

        card.querySelector('.abrirDetalhes').addEventListener('click', ()=> openModal(p));
        card.querySelector('.adicionarRapido').addEventListener('click', ()=> addToCart(p, 'pequeno'));

        paisagensGrid.appendChild(card);
    });
}

function openModal(p){
    paisagemSelecionada = p;
    modalTitulo.textContent = p.nome;
    modalImagem.style.backgroundImage = `url(${p.imagem})`;
    modalImagem.style.backgroundSize = 'cover';
    modalImagem.textContent = '';
    modalPreco.textContent = formatBRL(p.preco);
    modalLocalizacao.textContent = p.localizacao;
    modalHistoria.textContent = p.historia;
    tamanhoSelect.value = 'pequeno';
    modalDetalhes.classList.remove('hidden');
}

function closeModal(){
    modalDetalhes.classList.add('hidden');
    paisagemSelecionada = null;
}

function addToCart(p, tamanho){
    let multiplicador = 1;
    if(tamanho === 'medio') multiplicador = 1.5;
    if(tamanho === 'grande') multiplicador = 2;
    const preco = +(p.preco * multiplicador).toFixed(2);
    carrinho.push({ id: p.id, nome: p.nome, tamanho, preco });
    updateCartUI();
    closeModal();
}

function updateCartUI(){
    cartCount.classList.remove('hidden');
    cartCount.textContent = carrinho.length;
    itensCarrinhoEl.innerHTML = '';
    let total = 0;
    carrinho.forEach((it) =>{
        total += it.preco;
        const el = document.createElement('div');
        el.className = 'flex justify-between items-center border rounded p-3';
        el.innerHTML = `<div><div class="font-semibold">${it.nome}</div><div class="text-sm text-gray-500">${it.tamanho}</div></div><div class="font-semibold">${formatBRL(it.preco)}</div>`;
        itensCarrinhoEl.appendChild(el);
    });
    totalCarrinhoEl.textContent = formatBRL(total);
}

// Event listeners
fecharModalBtn.addEventListener('click', closeModal);
adicionarCarrinhoBtn.addEventListener('click', ()=>{
    if(!paisagemSelecionada) return;
    addToCart(paisagemSelecionada, tamanhoSelect.value);
});

cartBtn.addEventListener('click', ()=>{
    modalCarrinho.classList.remove('hidden');
});
fecharCarrinhoBtn.addEventListener('click', ()=>{
    modalCarrinho.classList.add('hidden');
});

// Open/close login & cadastro modals
if (loginBtnHeader) loginBtnHeader.addEventListener('click', ()=> modalLogin && modalLogin.classList.remove('hidden'));
if (cadastroBtnHeader) cadastroBtnHeader.addEventListener('click', ()=> modalCadastro && modalCadastro.classList.remove('hidden'));
if (fecharLogin) fecharLogin.addEventListener('click', ()=> modalLogin && modalLogin.classList.add('hidden'));
if (fecharCadastro) fecharCadastro.addEventListener('click', ()=> modalCadastro && modalCadastro.classList.add('hidden'));
if (irParaCadastro) irParaCadastro.addEventListener('click', ()=>{ if(modalLogin) modalLogin.classList.add('hidden'); if(modalCadastro) modalCadastro.classList.remove('hidden'); });
if (irParaLogin) irParaLogin.addEventListener('click', ()=>{ if(modalCadastro) modalCadastro.classList.add('hidden'); if(modalLogin) modalLogin.classList.remove('hidden'); });

// Finalizar compra -> salva pedido no Firestore (se disponível) ou apenas loga
const finalizarCompraBtn = document.getElementById('finalizarCompra');
if(finalizarCompraBtn){
    finalizarCompraBtn.addEventListener('click', async ()=>{
        if(carrinho.length === 0) return alert('Carrinho vazio');
        const pedido = {
            itens: carrinho,
            total: carrinho.reduce((s,i)=> s + i.preco, 0),
            criadoEm: useFirestore ? firebase.firestore.FieldValue.serverTimestamp() : new Date().toISOString()
        };
        if(useFirestore){
            try{
                await db.collection('pedidos').add(pedido);
                alert('Pedido enviado com sucesso!');
                carrinho = [];
                updateCartUI();
            }catch(e){
                console.error(e);
                alert('Erro ao enviar pedido. Veja console.');
            }
        }else{
            console.log('Pedido (local):', pedido);
            alert('Pedido registrado localmente (ver console).');
            carrinho = [];
            updateCartUI();
        }
    });
}

// Carregar paisagens: do Firestore se habilitado, caso contrário usa o array local
async function loadPaisagens(){
    if(useFirestore){
        try{
            const snapshot = await db.collection('paisagens').get();
            todasPaisagens = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            renderPaisagens();
            return;
        }catch(e){
            console.error('Erro ao carregar paisagens do Firestore:', e);
        }
    }
    // fallback
    renderPaisagens();
}

// Inicializa
// Inicializa
loadPaisagens();

// --- Autenticação (compat) ---
if (typeof firebase !== 'undefined' && firebase.auth) {
    const formLogin = document.getElementById('formLogin');
    const formCadastro = document.getElementById('formCadastro');
    const loginBtn = document.getElementById('loginBtn');
    const cadastroBtn = document.getElementById('cadastroBtn');
    const userMenuEl = document.getElementById('userMenu');
    const userNameEl = document.getElementById('userName');
    const logoutBtnEl = document.getElementById('logoutBtn');

    // Atualiza UI quando o estado de autenticação muda
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            userMenuEl.classList.remove('hidden');
            if (loginBtn) loginBtn.classList.add('hidden');
            if (cadastroBtn) cadastroBtn.classList.add('hidden');
            userNameEl.textContent = user.displayName || user.email || '';
            // cria documento do usuário se não existir
            try {
                const uDoc = await db.collection('users').doc(user.uid).get();
                if (!uDoc.exists) {
                    await db.collection('users').doc(user.uid).set({
                        email: user.email,
                        name: user.displayName || null,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                }
            } catch (e) { console.warn('Erro ao garantir documento de usuário:', e); }
        } else {
            userMenuEl.classList.add('hidden');
            if (loginBtn) loginBtn.classList.remove('hidden');
            if (cadastroBtn) cadastroBtn.classList.remove('hidden');
            userNameEl.textContent = '';
        }
    });

    // Login
    if (formLogin) {
        formLogin.addEventListener('submit', async (ev) => {
            ev.preventDefault();
            console.log('DEBUG: formLogin submit triggered');
            const email = document.getElementById('emailLogin').value;
            const senha = document.getElementById('senhaLogin').value;
            try {
                await firebase.auth().signInWithEmailAndPassword(email, senha);
                document.getElementById('emailLogin').value = '';
                document.getElementById('senhaLogin').value = '';
                document.getElementById('modalLogin').classList.add('hidden');
            } catch (err) {
                alert('Erro ao entrar: ' + err.message);
            }
        });
    }

    // Cadastro
    if (formCadastro) {
        formCadastro.addEventListener('submit', async (ev) => {
            ev.preventDefault();
            console.log('DEBUG: formCadastro submit triggered');
            const nome = document.getElementById('nomeCadastro').value;
            const email = document.getElementById('emailCadastro').value;
            const senha = document.getElementById('senhaCadastro').value;
            try {
                const res = await firebase.auth().createUserWithEmailAndPassword(email, senha);
                await res.user.updateProfile({ displayName: nome });
                await db.collection('users').doc(res.user.uid).set({
                    name: nome,
                    email,
                    phone: document.getElementById('telefoneCadastro').value || null,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
                document.getElementById('modalCadastro').classList.add('hidden');
                formCadastro.reset();
            } catch (err) {
                alert('Erro ao cadastrar: ' + err.message);
            }
        });
    }

    // Logout
    if (logoutBtnEl) {
        logoutBtnEl.addEventListener('click', async () => {
            await firebase.auth().signOut();
        });
    }
}
