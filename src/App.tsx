import { Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import { ServicePage } from '@/components/ServicePage';
import { EvaluationPage } from '@/pages/EvaluationPage';

const dogBoardingImg = 'https://images.pexels.com/photos/18708985/pexels-photo-18708985.jpeg?auto=compress&cs=tinysrgb&w=1200';
const trainingImg = 'https://images.pexels.com/photos/37107261/pexels-photo-37107261.jpeg?auto=compress&cs=tinysrgb&w=1200';
const puppyImg = 'https://images.pexels.com/photos/33242934/pexels-photo-33242934.jpeg?auto=compress&cs=tinysrgb&w=1200';
const reactiveImg = 'https://images.pexels.com/photos/9956387/pexels-photo-9956387.jpeg?auto=compress&cs=tinysrgb&w=1200';
const teamImg = 'https://images.pexels.com/photos/5763530/pexels-photo-5763530.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function App() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} id="localbusiness" />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-bold">Skip to content</a>
      <Header />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board-and-train" element={
            <ServicePage title="Board & Train" tagline="Immersive residential program" description="Immersive daily training for obedience, manners and individual behavior goals, with owner transfer sessions so results hold at home." bullets={['Adult and puppy residential programs','Obedience, manners, recall and loose-leash work','Behavior-specific customization','Lifetime support and refresher lessons','Owner transfer sessions included']} image={trainingImg} />
          } />
          <Route path="/aggressive-dog-training" element={
            <ServicePage title="Aggressive Dog Training" tagline="Serious behavior rehabilitation" description="Individual assessment and training for aggressive dogs, focused on safety, root-cause behavior change and owner confidence." bullets={['Individual behavior assessment','Fear and aggression rehabilitation','Safety-first training protocols','Owner coaching and transfer sessions','Serious cases evaluated individually']} image={reactiveImg} />
          } />
          <Route path="/reactive-dog-training" element={
            <ServicePage title="Reactive Dog Training" tagline="Calm, focused, under threshold" description="Training for reactive and over-aroused dogs, helping them stay calm and focused around triggers instead of reacting." bullets={['Trigger assessment and management','Counter-conditioning protocols','Focus and engagement training','Leash reactivity solutions','Real-world practice sessions']} image={reactiveImg} />
          } />
          <Route path="/puppy-training" element={
            <ServicePage title="Puppy Training" tagline="Start early, start right" description="Build socialization, confidence, routines and obedience foundations early to set your puppy up for a lifetime of good behavior." bullets={['Socialization and confidence building','House training and routines','Basic obedience foundations','Bite inhibition and manners','Age-appropriate skill building']} image={puppyImg} />
          } />
          <Route path="/private-dog-training" element={
            <ServicePage title="Private Dog Training" tagline="One-on-one coaching" description="Personalized one-on-one training sessions tailored to your dog and your goals, at our facility or in your home." bullets={['Customized training plan','One-on-one coaching','Flexible scheduling','Owner-focused skill building','Targeted problem solving']} image={trainingImg} />
          } />
          <Route path="/dog-boarding" element={
            <ServicePage title="Dog Boarding" tagline="Overnight care in Corona" description="Overnight boarding at our Corona facility with climate-controlled indoor kennel space and outdoor acreage for exercise." bullets={['Climate-controlled indoor kennels','Outdoor acreage for exercise','Minimum two hours daily exercise','Dog-friendly socialization available','Emergency vet authorization documented']} image={dogBoardingImg} />
          } />
          <Route path="/dog-daycare" element={
            <ServicePage title="Dog Daycare" tagline="Kennel-free daytime care" description="Kennel-free daytime daycare with supervised play, exercise and socialization for dog-friendly dogs." bullets={['Kennel-free supervised play','Outdoor exercise and activity','Socialization with other dogs','Structured rest periods','Full-day and half-day options']} image={dogBoardingImg} />
          } />
          <Route path="/meet-the-team" element={
            <ServicePage title="Meet the Team" tagline="The people behind the training" description="Meet the trainers behind Team Floppy Ears, led by Head Trainer Chad, specializing in obedience, fear and aggression rehabilitation." bullets={['Head Trainer Chad — 1,000+ dogs handled','Specializing in fear and aggression','Family-owned, established 2019','Owner transfer and lifetime support','Serving Corona and surrounding areas']} image={teamImg} ctaLabel="Meet Us in Person" />
          } />
          <Route path="/facility" element={
            <ServicePage title="Our Facility" tagline="See where the work happens" description="Tour the Team Floppy Ears training and boarding facility in Corona, CA — climate-controlled kennels, outdoor training acreage and the Jax Weller Arena." bullets={['Climate-controlled indoor kennel room','Outdoor acreage for exercise','Jax Weller Arena for daycare','Supervised activity and play areas','Located in Corona, CA']} image={trainingImg} ctaLabel="Schedule a Tour" />
          } />
          <Route path="/book-evaluation" element={<EvaluationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
