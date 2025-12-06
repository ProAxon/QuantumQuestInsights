import ResearchStepTemplate from '@/components/ResearchStepTemplate';
import { researchSteps } from '@/data/researchSteps';

export default function ResearchStep1Page() {
  const step = researchSteps.find((item) => item.slug === 'research-step-1');
  if (!step) {
    return null;
  }
  return <ResearchStepTemplate {...step} />;
}

