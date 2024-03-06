import ModalVideo from '@/app/components/ModalVideo';
import AboutDescription from '@/app/components/about/AboutDescription';
import AboutGlance from '@/app/components/about/AboutGlance';
import AboutTeam from '@/app/components/about/AboutTeam';
import AboutVisionMission from '@/app/components/about/AboutVisionMission';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KanzWay - About',
  description: '',
};

export default function AboutPage() {
  return (
    <>
      <AboutDescription />
      <AboutVisionMission />
      <AboutGlance />
      <AboutTeam />
      <ModalVideo />
    </>
  );
}
