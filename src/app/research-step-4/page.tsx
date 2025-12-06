import ResearchStepTemplate from '@/components/ResearchStepTemplate';
import { researchSteps } from '@/data/researchSteps';

export default function ResearchStep4Page() {
  const step = researchSteps.find((item) => item.slug === 'research-step-4');
  if (!step) {
    return null;
  }
  return <ResearchStepTemplate {...step} />;
}

