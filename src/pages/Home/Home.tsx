import { Sparkles } from '../../components/Sparkles/Sparkles';

function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <Sparkles />
      {/* Background com listras verticais grossas com efeito metálico */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              #0a0a0a 0px,
              #1a1a1a 40px,
              #000 80px,
              #1a1a1a 120px,
              #0a0a0a 160px,
              #e8e8e8 160px,
              #f5f5f5 200px,
              #ffffff 240px,
              #f5f5f5 280px,
              #e8e8e8 320px
            )
          `,
          boxShadow: `
            inset -4px 0px 12px rgba(0,0,0,0.9),
            inset 4px 0px 12px rgba(255,255,255,0.4)
          `,
        }}
      />

      {/* Conteúdo Clean */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-12 py-20">
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-12 max-w-[900px] h-[550px] shadow-2xl">
          <h1
            className="text-7xl lg:text-8xl text-center mb-6 title-main font-extrabold"
            style={{
              textShadow:
                '1px 1px 3px rgba(0,0,0,0.25), -0.5px -0.5px 1px rgba(0,0,0,0.4)',
              filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))',
            }}
          >
            <span>FOGÃO</span>{' '}
            <span className="title-accent text-amber-400">HALL</span>
          </h1>

          <p
            className="text-xl lg:text-2xl text-black leading-relaxed mb-6 font-bold"
            style={{
              textShadow:
                '1px 1px 3px rgba(0,0,0,0.25), -0.5px -0.5px 1px rgba(0,0,0,0.4)',
              filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))',
            }}
          >
            Celebrando a rica história e glória do Botafogo de Futebol e
            Regatas.
          </p>

          <p
            className="text-base lg:text-lg text-black leading-relaxed mb-10 font-semibold"
            style={{
              textShadow:
                '1px 1px 2px rgba(0,0,0,0.2), -0.5px -0.5px 1px rgba(0,0,0,0.3)',
              filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))',
            }}
          >
            Projeto feito por um torcedor apaixonado, com o objetivo de
            homenagear o glorioso clube alvinegro e sua trajetória histórica no
            futebol brasileiro e internacional.
            <br />
            Aqui você encontrará uma coleção de momentos inesquecíveis,
            conquistas memoráveis e lendas que fizeram do Botafogo um dos clubes
            mais respeitados do Brasil. Venha celebrar conosco essa jornada de
            paixão e glória!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
