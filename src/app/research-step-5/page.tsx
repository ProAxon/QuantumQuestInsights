import ResearchStepTemplate from '@/components/ResearchStepTemplate';
import { researchSteps } from '@/data/researchSteps';

export default function ResearchStep5Page() {
  const step = researchSteps.find((item) => item.slug === 'research-step-5');
  if (!step) {
    return null;
  }
  return <ResearchStepTemplate {...step} />;
}

