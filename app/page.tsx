import Hero from '@/components/home/Hero';
import ClientMarquee from '@/components/home/ClientMarquee';
import PainPoints from '@/components/home/PainPoints';
import Solutions from '@/components/home/Solutions';
import CostComparison from '@/components/home/CostComparison';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import CEOMessage from '@/components/home/CEOMessage';
import GSAPProvider from '@/components/animations/GSAPProvider';

export default function Home() {
    return (
        <GSAPProvider>
            <div className="flex flex-col gap-0">
                <Hero />
                <ClientMarquee />
                <PainPoints />
                <Solutions />
                <CostComparison />
                <Services />
                <Testimonials />
                <CEOMessage />
            </div>
        </GSAPProvider>
    );
}
