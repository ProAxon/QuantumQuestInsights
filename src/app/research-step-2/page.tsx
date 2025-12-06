import ResearchStepTemplate from '@/components/ResearchStepTemplate';
import { researchSteps } from '@/data/researchSteps';

export default function ResearchStep2Page() {
  const step = researchSteps.find((item) => item.slug === 'research-step-2');
  if (!step) {
    return null;
  }
  return <ResearchStepTemplate {...step} />;
}

