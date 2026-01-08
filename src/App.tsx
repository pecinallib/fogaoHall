function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background com listras verticais pretas e brancas */}
      <div
        className="absolute inset-0"
        style={{
          background: 'repeating-linear-gradient(90deg, #000 0px, #000 80px, #fff 80px, #fff 160px)'
        }}
      />

      {/* Estrela branca no centro */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          width="400"
          height="400"
          viewBox="0 0 100 100"
          className="opacity-30"
        >
          <polygon
            points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
            fill="white"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <div className="bg-black/80 backdrop-blur-sm text-white p-12 rounded-2xl max-w-4xl shadow-2xl border border-white/20">
          <h1 className="text-6xl font-bold mb-6 text-center">
            ⭐ FOGÃO HALL ⭐
          </h1>

          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-200">
            Histórias e Glórias do Botafogo de Futebol e Regatas
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-center text-xl font-light">
              Bem-vindo ao <span className="font-bold">Fogão Hall</span>, um espaço dedicado a celebrar
              a rica história do <span className="font-bold">Glorioso</span>.
            </p>

            <p className="text-gray-300">
              Fundado em <span className="font-semibold text-white">1894</span>, o Botafogo de Futebol e Regatas
              é um dos clubes mais tradicionais e vitoriosos do futebol brasileiro.
              Com sua icônica camisa alvinegra e a estrela solitária, o Fogão conquistou
              o coração de milhões de torcedores ao redor do mundo.
            </p>

            <p className="text-gray-300">
              Aqui você encontrará as maiores conquistas, os ídolos eternos,
              os momentos históricos e tudo que faz do Botafogo um clube único e imortal.
            </p>

            <div className="mt-8 pt-8 border-t border-white/30 text-center">
              <p className="text-2xl font-bold text-white">
                🏆 GLÓRIA ETERNA AO BOTAFOGO! 🏆
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
