"use client"
import React from "react";


// AcademiaLanding.jsx
// Página única (single-file) pronta para uso em um projeto React/Next com Tailwind CSS.
// Como usar:
// - Coloque este arquivo em `src/components/AcademiaLanding.jsx` e importe na sua página (Next: pages/index.jsx ou app/page.jsx).
// - Certifique-se que Tailwind CSS está configurado no projeto.


export default function AcademiaLanding() {
  return ( 
    
    <div className="min-h-screen bg-gray-50 text-slate-900 antialiased">
      {/* NAV */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-md bg-linear-to-br from-red-600 to-yellow-500 flex items-center justify-center text-white font-bold">AC</div>
            <div>
              <h1 className="text-lg font-extrabold">Academia CombatFit</h1>
              <p className="text-xs text-slate-500">Jiu‑Jitsu • Muay Thai • Boxe • MMA • Musculação</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#classes" className="hover:text-red-600">Aulas</a>
            <a href="#treinos" className="hover:text-red-600">Treinos</a>
            <a href="#treinadores" className="hover:text-red-600">Treinadores</a>
            <a href="#planos" className="hover:text-red-600">Planos</a>
            <a href="#contato" className="hover:text-red-600">Contato</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contato" className="hidden sm:inline-block bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow">Agende uma aula</a>
            <button className="md:hidden p-2 rounded-md bg-gray-100">☰</button>
          </div>
        </div>
      </header>
      {/* HERO */}
      <section className="bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center text-white">
        <div className="backdrop-brightness-50">
          <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow">Transforme seu corpo e sua mente</h2>
              <p className="mt-4 text-lg text-gray-100/90 max-w-2xl">Aulas de Jiu‑Jitsu, Muay Thai, Boxe, MMA e treinos de musculação. Programas para todos os níveis — iniciantes ao avançado.</p>

              <div className="mt-6 flex gap-4">
                <a href="#planos" className="bg-yellow-400 text-black px-5 py-3 rounded-md font-bold shadow">Assine agora</a>
                <a href="#contato" className="bg-transparent border border-white/30 px-5 py-3 rounded-md">Agende uma aula grátis</a>
              </div>
              
              <div className="mt-6 text-sm text-gray-100/80">Horário: Seg–Sex 6:00–22:00 • Sáb 8:00–13:00</div>
            </div>

            <div className="w-full max-w-md bg-white/10 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Aula Experimental Gratuita</h3>
              <p className="mt-2 text-sm text-gray-100/80">Venha conhecer nossa estrutura — traga sua energia!</p>

              <form className="mt-4 grid gap-3" onSubmit={(e) => { e.preventDefault(); alert('Obrigado! Entraremos em contato.'); }}>
                <input aria-label="Nome" required placeholder="Seu nome" className="px-3 py-2 rounded-md bg-white/90" />
                <input aria-label="Telefone" required placeholder="Telefone" className="px-3 py-2 rounded-md bg-white/90" />
                <select aria-label="Aula desejada" className="px-3 py-2 rounded-md bg-white/90">
                  <option>Jiu‑Jitsu</option>
                  <option>Muay Thai</option>
                  <option>Boxe</option>
                  <option>MMA</option>
                  <option>Musculação</option>
                </select>
                <button type="submit" className="bg-red-600 text-white py-2 rounded-md font-semibold">Agendar aula</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section id="classes" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-extrabold">Nossas modalidades</h3>
        <p className="mt-2 text-slate-600 max-w-2xl">Aulas orientadas por professores certificados — focadas em técnica, condicionamento e segurança.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Jiu‑Jitsu', desc: 'Técnica, defesa pessoal e grappling. Aulas para todas as idades.' },
            { title: 'Muay Thai', desc: 'Condicionamento, striking e clinch. Treinos intensos e técnicos.' },
            { title: 'Boxe', desc: 'Treino de socos, movimentação e resistência cardiovascular.' },
            { title: 'MMA', desc: 'Mistura de striking e luta agarrada. Preparação completa para combate.' },
            { title: 'Musculação', desc: 'Programas de força e hipertrofia com acompanhamento.' },
            { title: 'Treinos Funcionais', desc: 'Aquecimento, pliometria e condicionamento para performance.' }
          ].map((c) => (
            <article key={c.title} className="bg-white rounded-lg shadow p-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-md bg-red-50 flex items-center justify-center text-red-600 font-bold">{c.title[0]}</div>
                <div>
                  <h4 className="font-semibold">{c.title}</h4>
                  <p className="text-sm text-slate-600">{c.desc}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <a className="text-sm text-red-600 font-medium hover:underline">Ver horários</a>
                <a className="text-sm text-slate-500">Nível: Iniciante → Avançado</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="treinos" className="bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-extrabold">Grade de aulas</h3>
          <p className="mt-2 text-slate-600">Veja os horários das principais turmas — atualizamos semanalmente.</p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-white/90">
                  <th className="px-4 py-3">Horário</th>
                  <th className="px-4 py-3">Segunda</th>
                  <th className="px-4 py-3">Terça</th>
                  <th className="px-4 py-3">Quarta</th>
                  <th className="px-4 py-3">Quinta</th>
                  <th className="px-4 py-3">Sexta</th>
                  <th className="px-4 py-3">Sábado</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['06:00', 'Musculação', 'Jiu‑Jitsu', 'Musculação', 'Muay Thai', 'Musculação', 'Boxe'],
                  ['18:00', 'Jiu‑Jitsu', 'Muay Thai', 'Boxe', 'MMA', 'Jiu‑Jitsu', 'Aquecimento'],
                  ['20:00', 'Boxe', 'MMA', 'Muay Thai', 'Jiu‑Jitsu', 'MMA', '—']
                ].map((row) => (
                  <tr key={row[0]} className="bg-white last:rounded-b-lg">
                    <td className="px-4 py-3 font-semibold w-28">{row[0]}</td>
                    {row.slice(1).map((cell, i) => <td key={i} className="px-4 py-3 text-slate-700">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TRAINERS */}
      <section id="treinadores" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-extrabold">Nossos treinadores</h3>
        <p className="mt-2 text-slate-600">Equipe formada por atletas e instrutores certificados, com experiência em competição e ensino.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            name: 'Rafael Costa', role: 'Head Jiu‑Jitsu', bio: 'Faixa-preta, +10 anos de competição.'
          },{
            name: 'Mariana Silva', role: 'Muay Thai', bio: 'Campeã estadual e coach de condicionamento.'
          },{
            name: 'Lucas Rocha', role: 'Boxe e MMA', bio: 'Ex-atleta profissional e treinador.'
          }].map(t => (
            <div key={t.name} className="bg-white p-5 rounded-lg shadow flex gap-4">
              <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center text-xl font-semibold">{t.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
              <div>
                <h4 className="font-bold">{t.name}</h4>
                <div className="text-sm text-slate-500">{t.role}</div>
                <p className="mt-3 text-sm text-slate-600">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLANS */}
      <section id="planos" className="bg-linear-to-r from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-extrabold">Planos</h3>
          <p className="mt-2 text-slate-600">Planos mensais e anuais, desconto família e pacotes de aulas avulsas.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Básico', price: 'R$89/mês', features: ['Acesso à musculação (horários limitados)', '1 aula experimental'] },
              { name: 'Pro', price: 'R$149/mês', features: ['Acesso total às aulas', '1 sessão com treinador por mês', 'Desconto em workshops'] },
              { name: 'Premium', price: 'R$249/mês', features: ['Aulas ilimitadas', 'Plano de treinos personalizado', 'Avaliação física trimestral'] }
            ].map(p => (
              <div key={p.name} className="bg-white rounded-lg shadow p-6 flex flex-col">
                <h4 className="text-xl font-bold">{p.name}</h4>
                <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
                <ul className="mt-4 space-y-2 flex-1">
                  {p.features.map(f => <li key={f} className="text-sm text-slate-600">• {f}</li>)}
                </ul>
                <a href="#contato" className="mt-6 inline-block bg-red-600 text-white px-4 py-2 rounded-md text-center font-semibold">Assinar</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-extrabold">Perguntas frequentes</h4>
            <div className="mt-4 space-y-3">
              <details className="bg-white p-4 rounded-md shadow">
                <summary className="font-semibold">Preciso ter experiência para começar?</summary>
                <p className="mt-2 text-sm text-slate-600">Não — temos turmas de iniciação com progressão segura e instrutores que acompanham a evolução.</p>
              </details>

              <details className="bg-white p-4 rounded-md shadow">
                <summary className="font-semibold">Posso combinar musculação com as aulas?</summary>
                <p className="mt-2 text-sm text-slate-600">Sim — há horários liberados para treinos de força e acompanhamento de planos de treino.</p>
              </details>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-extrabold">O que os alunos dizem</h4>
            <blockquote className="mt-4 bg-white p-4 rounded-md shadow text-slate-700">"Melhorei minha resistência e técnica em 3 meses — equipe excelente!" <cite className="block mt-2 text-sm text-slate-500">— Ana P.</cite></blockquote>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl font-extrabold">Fale conosco</h4>
            <p className="mt-2 text-slate-300">Quer agendar uma aula, tirar dúvidas ou conhecer a estrutura? Entre em contato.</p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>📍 Endereço: Rua do Combate, 123 — Centro</li>
              <li>📞 Telefone: (11) 99999-9999</li>
              <li>✉️ Email: contato@academiacombatfit.com</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a href="#" className="bg-white/10 px-4 py-2 rounded">Instagram</a>
              <a href="#" className="bg-white/10 px-4 py-2 rounded">YouTube</a>
            </div>
          </div>

          <div>
            <form className="bg-white p-6 rounded-md shadow text-slate-900" onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada!'); }}>
              <label className="block text-sm font-medium">Nome</label>
              <input required className="w-full mt-2 px-3 py-2 rounded-md border" />

              <label className="block text-sm font-medium mt-4">Email</label>
              <input required type="email" className="w-full mt-2 px-3 py-2 rounded-md border" />

              <label className="block text-sm font-medium mt-4">Mensagem</label>
              <textarea required className="w-full mt-2 px-3 py-2 rounded-md border" rows={4}></textarea>

              <button type="submit" className="mt-4 w-full bg-red-600 text-white py-2 rounded-md font-semibold">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Academia CombatFit — Todos os direitos reservados</div>
          <div className="text-sm text-slate-600">Política de privacidade • Termos</div>
        </div>
      </footer>
    </div>
  );
}
