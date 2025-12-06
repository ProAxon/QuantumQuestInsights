import ResearchStepTemplate from '@/components/ResearchStepTemplate';
import { researchSteps } from '@/data/researchSteps';

export default function ResearchStep3Page() {
  const step = researchSteps.find((item) => item.slug === 'research-step-3');
  if (!step) {
    return null;
  }
  return <ResearchStepTemplate {...step} />;
}

