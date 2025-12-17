import Hero from '@/components/home/Hero';
import PainPoints from '@/components/home/PainPoints';
import Solutions from '@/components/home/Solutions';
import CostComparison from '@/components/home/CostComparison';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import CEOMessage from '@/components/home/CEOMessage';

export default function Home() {
    return (

            <div className="flex flex-col gap-0">
                <Hero />
                <PainPoints />
                <Solutions />
                <CostComparison />
                <Services />
                <Testimonials />
                <CEOMessage />
            </div>
 
    );
}
