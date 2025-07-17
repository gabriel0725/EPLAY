import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'

const rpg: Game[] = [
  {
    id: 1,
    category: 'RPG',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survivor horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survivor horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survivor horror...',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 4,
    category: 'RPG',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survivor horror...',
    title: 'Resident Evil 4',
    system: 'XBOX',
    infos: ['7%', 'R$ 270,00'],
    image: resident
  }
]

const acao: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertaiment.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'Ação',
    description: 'teste',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['25/08'],
    image: zelda
  },
  {
    id: 7,
    category: 'Ação',
    description: 'Teste 2',
    title: 'Star Wars',
    system: 'PS5/Windows',
    infos: ['21/07'],
    image: starWars
  },
  {
    id: 8,
    category: 'Ação',
    description: 'teste 3',
    title: 'Resident Evil 4',
    system: 'Nintendo',
    infos: ['17/05'],
    image: resident
  }
]

const aventura: Game[] = [
  {
    id: 1,
    category: 'Aventura',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survivor horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Aventura',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survivor horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Aventura',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survivor horror...',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Aventura',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survivor horror...',
    title: 'Resident Evil 4',
    system: 'XBOX',
    infos: ['7%', 'R$ 270,00'],
    image: resident
  }
]

const fps: Game[] = [
  {
    id: 1,
    category: 'FPS',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survivor horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'FPS',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survivor horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'FPS',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survivor horror...',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 4,
    category: 'FPS',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survivor horror...',
    title: 'Resident Evil 4',
    system: 'XBOX',
    infos: ['7%', 'R$ 270,00'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductsList games={rpg} title="RPG" background="gray" />
    <ProductsList games={acao} title="Ação" background="black" />
    <ProductsList games={aventura} title="Aventura" background="gray" />
    <ProductsList games={fps} title="FPS" background="black" />
  </>
)

export default Categories
