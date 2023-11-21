import { StaticImageData } from 'next/image';

interface CardTeamProps {
  image: StaticImageData;
  name: string;
  description: string;
  instagram: string;
  github: string;
  linkedin: string;
}

export default CardTeamProps;
