import { useState } from 'react'

const features = [
  { icon: '⚡', title: 'Lightning Fast', text: 'Built on Vite for instant dev server start and blazing hot reloads.' },
  { icon: '🎨', title: 'Beautiful UI', text: 'Clean, modern design with smooth gradients and subtle animations.' },
  { icon: '📱', title: 'Responsive', text: 'Looks great on every screen, from phones to wide desktops.' },
  { icon: '🔒', title: 'Secure', text: 'Sensible defaults so you can focus on building features.' },
]

const stats = [
  { value: '10k+', label: 'Happy users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
]

function TodoCard() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Try out Quicky', done: true },
    { id: 2, text: 'Add your first task', done: false },
  ])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }])
    setInput('')
  }

  const toggle = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

  const remove = (id) => setTodos(todos.filter((t) => t.id !== id))

  const remaining = todos.filter((t) => !t.done).length

  return (
    <div className="card todo">
      <div className="todo-header">
        <h3>My Tasks</h3>
        <span className="badge">{remaining} left</span>
      </div>
      <form onSubmit={addTodo} className="todo-form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((t) => (
          <li key={t.id} className={t.done ? 'done' : ''}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <span>{t.text}</span>
            </label>
            <button className="icon-btn" onClick={() => remove(t.id)} aria-label="Delete">✕</button>
          </li>
        ))}
        {todos.length === 0 && <li className="empty">All clear! 🎉</li>}
      </ul>
    </div>
  )
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <nav className="nav">
        <div className="logo">⚡ Quicky</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#about">About</a>
        </div>
        <button className="btn btn-outline">Sign in</button>
      </nav>

      <header className="hero">
        <span className="pill">✨ New: version 1.0 is live</span>
        <h1>
          Build things <span className="gradient-text">quickly</span>,<br />
          ship them beautifully.
        </h1>
        <p className="subtitle">
          Quicky is a simple React starter with a polished UI, so you can skip the boilerplate
          and get straight to the fun part.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary btn-lg" onClick={() => setCount(count + 1)}>
            Get Started {count > 0 && `(${count})`}
          </button>
          <button className="btn btn-ghost btn-lg">Learn more →</button>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </header>

      <section id="features" className="section">
        <h2>Everything you need</h2>
        <p className="section-sub">A tiny toolkit with all the essentials included.</p>
        <div className="grid">
          {features.map((f) => (
            <div key={f.title} className="card feature">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="section">
        <h2>Try it out</h2>
        <p className="section-sub">A tiny interactive demo, right here on the page.</p>
        <TodoCard />
      </section>

      <footer id="about" className="footer">
        <p>© {new Date().getFullYear()} Quicky. Made with React &amp; ❤️</p>
      </footer>
    </div>
  )
}
