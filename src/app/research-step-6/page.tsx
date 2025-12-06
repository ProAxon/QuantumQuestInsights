import ResearchStepTemplate from '@/components/ResearchStepTemplate';
import { researchSteps } from '@/data/researchSteps';

export default function ResearchStep6Page() {
  const step = researchSteps.find((item) => item.slug === 'research-step-6');
  if (!step) {
    return null;
  }
  return <ResearchStepTemplate {...step} />;
}

