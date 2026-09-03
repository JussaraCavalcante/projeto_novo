import './style.css';

const Icon = ({ name, size = 18 }) => {
  const paths = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    repeat: '<path d="m17 1 4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="m7 23-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 4 3 5-7"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.09A1.7 1.7 0 0 0 9 19.35a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15 1.7 1.7 0 0 0 3.07 14H3v-4h.09A1.7 1.7 0 0 0 4.65 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63a1.7 1.7 0 0 0 1-1.56V3h4v.09A1.7 1.7 0 0 0 15 4.65a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9a1.7 1.7 0 0 0 1.56 1H21v4h-.09A1.7 1.7 0 0 0 19.4 15Z"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 1 1 5.5 1.7c-.9 1.2-2.6 1.3-2.6 3.3"/><path d="M12 18h.01"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    up: '<path d="m18 15-6-6-6 6"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    building: '<path d="M3 21h18M6 21V5l6-3 6 3v16M9 9h1M9 13h1M9 17h1M14 9h1M14 13h1M14 17h1"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    bag: '<path d="M6 8V6a6 6 0 0 1 12 0v2"/><path d="M3 8h18l-1 13H4L3 8Z"/>',
    spark: '<path d="m12 3-1.2 4.3a5 5 0 0 1-3.5 3.5L3 12l4.3 1.2a5 5 0 0 1 3.5 3.5L12 21l1.2-4.3a5 5 0 0 1 3.5-3.5L21 12l-4.3-1.2a5 5 0 0 1-3.5-3.5L12 3Z"/>',
    dots: '<circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};

const transactions = [
  { icon:'building', color:'navy', name:'Apartamento', cat:'Moradia', date:'05 SET', value:'− R$ 1.883,93', status:'Pago', type:'out' },
  { icon:'users', color:'orange', name:'Samara', cat:'Apoio pessoal', date:'05 SET', value:'− R$ 200,00', status:'Pago', type:'out' },
  { icon:'card', color:'blue', name:'Aluguel', cat:'Moradia', date:'08 SET', value:'− R$ 750,00', status:'Pago', type:'out' },
  { icon:'repeat', color:'green', name:'Ressarcimento Senac', cat:'Ressarcimento', date:'10 SET', value:'+ R$ 11.875,00', status:'Recebido', type:'in' },
  { icon:'bag', color:'purple', name:'Parcela Notebook', cat:'Compras / parcelas', date:'12 SET', value:'− R$ 252,00', status:'Pendente', type:'out' },
];

const app = document.querySelector('#app');
app.innerHTML = `
  <aside class="sidebar">
    <div class="brand"><span class="brand-mark"><i></i><i></i><i></i></span><span>Nexo</span></div>
    <nav>
      <a class="active" href="#">${Icon({name:'grid'})}<span>Visão geral</span></a>
      <a href="#">${Icon({name:'card'})}<span>Movimentações</span></a>
      <a href="#">${Icon({name:'repeat'})}<span>Recorrências</span></a>
      <a href="#" class="has-badge">${Icon({name:'bell'})}<span>Lembretes</span><b>3</b></a>
      <a href="#">${Icon({name:'chart'})}<span>Relatórios</span></a>
    </nav>
    <div class="sidebar-bottom">
      <a href="#">${Icon({name:'gear'})}<span>Configurações</span></a>
      <a href="#">${Icon({name:'help'})}<span>Ajuda e suporte</span></a>
      <div class="profile"><span>MC</span><div><strong>Marina Costa</strong><small>Conta pessoal</small></div>${Icon({name:'dots'})}</div>
    </div>
  </aside>
  <main>
    <header>
      <div><h1>Olá, Marina! <span>👋</span></h1><p>Acompanhe suas finanças e mantenha tudo sob controle.</p></div>
      <div class="header-actions">
        <button class="icon-btn" aria-label="Notificações">${Icon({name:'bell'})}<em></em></button>
        <button class="primary" id="newTransaction">${Icon({name:'plus'})} Nova movimentação</button>
      </div>
    </header>
    <section class="toolbar">
      <button class="period">${Icon({name:'calendar'})}<span>Setembro de 2026</span>${Icon({name:'down',size:15})}</button>
      <span class="updated">${Icon({name:'check',size:14})} Atualizado agora</span>
    </section>
    <section class="metric-grid">
      <article class="metric balance"><div class="metric-head"><span>Saldo do mês</span><span class="round-icon">${Icon({name:'card'})}</span></div><h2>R$ 6.755,92</h2><p class="positive">${Icon({name:'up',size:13})} <strong>23,8%</strong> vs. mês anterior</p></article>
      <article class="metric"><div class="metric-head"><span>Receitas</span><span class="round-icon green">${Icon({name:'up'})}</span></div><h2>R$ 12.875,00</h2><p><b class="dot green-bg"></b> 2 entradas confirmadas</p></article>
      <article class="metric"><div class="metric-head"><span>Despesas</span><span class="round-icon coral">${Icon({name:'down'})}</span></div><h2>R$ 5.119,08</h2><p><b class="dot coral-bg"></b> 8 despesas registradas</p></article>
      <article class="metric"><div class="metric-head"><span>A receber</span><span class="round-icon gold">${Icon({name:'repeat'})}</span></div><h2>R$ 1.000,00</h2><p><b class="dot gold-bg"></b> 1 recebível pendente</p></article>
    </section>
    <section class="content-grid">
      <article class="panel chart-panel">
        <div class="panel-title"><div><h3>Fluxo mensal</h3><p>Receitas e despesas dos últimos 6 meses</p></div><button class="select">Últimos 6 meses ${Icon({name:'down',size:14})}</button></div>
        <div class="legend"><span><i class="income"></i>Receitas</span><span><i class="expense"></i>Despesas</span></div>
        <div class="chart">
          <div class="axis"><span>15k</span><span>10k</span><span>5k</span><span>0</span></div>
          <div class="bars">
            ${[['Abr','7.6','4.2'],['Mai','9.1','4.8'],['Jun','6.8','3.9'],['Jul','8.4','4.7'],['Ago','10.2','5'],['Set','12.9','5.1']].map(([m,a,b],i)=>`<div class="bar-group"><div class="bar-pair"><i class="bar income" style="height:${Number(a)*11}px"></i><i class="bar expense" style="height:${Number(b)*11}px"></i>${i===5?'<span class="tooltip">R$ 12.875</span>':''}</div><small>${m}</small></div>`).join('')}
          </div>
        </div>
      </article>
      <article class="panel reminder-panel">
        <div class="panel-title"><div><h3>Próximos lembretes</h3><p>Não deixe nenhuma conta passar</p></div><button class="link-btn" id="viewAll">Ver todos ${Icon({name:'arrow',size:14})}</button></div>
        <div class="reminder-list">
          <div class="reminder urgent"><div class="datebox"><strong>18</strong><span>SET</span></div><div><h4>Plano de saúde</h4><p>Vence amanhã</p></div><strong>R$ 55,15</strong><button class="more">${Icon({name:'dots'})}</button></div>
          <div class="reminder"><div class="datebox"><strong>20</strong><span>SET</span></div><div><h4>Telefone</h4><p>Vence em 3 dias</p></div><strong>R$ 49,00</strong><button class="more">${Icon({name:'dots'})}</button></div>
          <div class="reminder"><div class="datebox"><strong>25</strong><span>SET</span></div><div><h4>Wi-Fi</h4><p>Vence em 8 dias</p></div><strong>R$ 100,00</strong><button class="more">${Icon({name:'dots'})}</button></div>
        </div>
        <button class="add-reminder" id="addReminder">${Icon({name:'plus',size:16})} Adicionar lembrete</button>
      </article>
    </section>
    <section class="bottom-grid">
      <article class="panel transactions">
        <div class="panel-title"><div><h3>Movimentações recentes</h3><p>Últimos registros do mês</p></div><button class="link-btn">Ver todas ${Icon({name:'arrow',size:14})}</button></div>
        <div class="table-head"><span>DESCRIÇÃO</span><span>DATA</span><span>VALOR</span><span>STATUS</span></div>
        <div id="transactionList">${transactions.map(t=>`<div class="transaction"><span class="transaction-icon ${t.color}">${Icon({name:t.icon})}</span><div><strong>${t.name}</strong><small>${t.cat}</small></div><time>${t.date}</time><b class="amount ${t.type}">${t.value}</b><span class="status ${t.status.toLowerCase()}"><i></i>${t.status}</span></div>`).join('')}</div>
      </article>
      <article class="panel categories">
        <div class="panel-title"><div><h3>Despesas por categoria</h3><p>Distribuição deste mês</p></div><button class="more">${Icon({name:'dots'})}</button></div>
        <div class="donut-row">
          <div class="donut"><div><strong>R$ 5.119</strong><small>Total</small></div></div>
          <div class="cat-legend">
            <p><i class="c1"></i><span>Moradia</span><strong>74,5%</strong></p><p><i class="c2"></i><span>Apoio pessoal</span><strong>9,8%</strong></p><p><i class="c3"></i><span>Dívidas</span><strong>6,8%</strong></p><p><i class="c4"></i><span>Compras</span><strong>4,9%</strong></p><p><i class="c5"></i><span>Outros</span><strong>4,0%</strong></p>
          </div>
        </div>
      </article>
    </section>
  </main>
  <div class="modal" id="modal" aria-hidden="true"><div class="modal-card"><button class="close" id="closeModal">×</button><span class="modal-icon">${Icon({name:'spark'})}</span><h2>Nova movimentação</h2><p>Registre uma despesa ou receita no seu controle financeiro.</p><label>Descrição<input id="desc" placeholder="Ex.: Conta de energia" /></label><div class="form-row"><label>Valor<input placeholder="R$ 0,00" /></label><label>Tipo<select><option>Despesa</option><option>Receita</option></select></label></div><button class="primary save" id="saveTransaction">Salvar movimentação</button></div></div>
  <div class="toast" id="toast">${Icon({name:'check'})}<span>Lembrete adicionado com sucesso!</span></div>
`;

const modal = document.querySelector('#modal');
document.querySelector('#newTransaction').addEventListener('click', () => { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); });
document.querySelector('#closeModal').addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('open'); });
document.querySelector('#saveTransaction').addEventListener('click', () => {
  const desc = document.querySelector('#desc').value || 'Nova despesa';
  document.querySelector('#transactionList').insertAdjacentHTML('afterbegin', `<div class="transaction new"><span class="transaction-icon coral">${Icon({name:'card'})}</span><div><strong>${desc}</strong><small>Outros</small></div><time>17 SET</time><b class="amount out">− R$ 0,00</b><span class="status pendente"><i></i>Pendente</span></div>`);
  modal.classList.remove('open');
});
document.querySelector('#addReminder').addEventListener('click', () => { const toast=document.querySelector('#toast'); toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),2600); });
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.querySelectorAll('nav a').forEach(n=>n.classList.remove('active')); a.classList.add('active'); }));
