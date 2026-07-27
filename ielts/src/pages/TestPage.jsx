import TestHeader from "../components/TestHeader";
import PassageHeader from "../components/PassageHeader";
import PassageContent from "../components/PassageContent";
import QuestionPanel from "../components/QuestionPanel";
import SplitView from "../helper/SplitView";

function TestPage() {
  return (
    <div className="h-screen bg-white flex flex-col">

      <TestHeader />

      <PassageHeader />

      <SplitView
        left={<PassageContent />}
        right={<QuestionPanel />}
        />

    </div>
  );
}

export default TestPage;