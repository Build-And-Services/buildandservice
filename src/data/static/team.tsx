import CardTeamProps from '../interfaces/props/card-team';
import Rafi from '@/assets/profile-teams/rafik.jpeg';
import Perdana from '@/assets/profile-teams/perdana.jpeg';
import Heri from '@/assets/profile-teams/heri.jpg';

const teamData: CardTeamProps[] = [
  {
    name: 'Perdana Putro H',
    description: "I'am a Fullstack Web Developer and Mobile Developer with Flutter",
    image: Perdana,
    instagram: 'https://www.instagram.com/per.danaph',
    github: 'https://www.github.com.com/perdanaph',
    linkedin: 'https://www.linkedin.com/in/perdana-putro-harwanto-1515a5245/',
  },
  {
    name: 'Heri Setyawan',
    description: "I'am a Fullstack Developer in website and mobile flutter developer.",
    image: Heri,
    instagram: 'https://www.instagram.com/herisetyawan233',
    github: 'https://www.github.com.com/herisetyawan123',
    linkedin: 'https://www.linkedin.com/in/heri-setyawan',
  },
  {
    name: 'Muhammad Rafi K.',
    description: "I'am a Fullstack Web Developer esspecially with laravel and mobile developer with Flutter",
    image: Rafi,
    instagram: 'https://www.instagram.com/muhhmmad.rafii',
    github: 'https://www.github.com.com/rafikusdiarto',
    linkedin: 'https://www.linkedin.com/in/muhammadrafikusdiarto',
  },
];
export default teamData;
