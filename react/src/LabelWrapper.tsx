import Label from "./Label";
import { counter } from "./signals/counter";

// simulate external component library that only accepts prop
// we can't directly import the signal
const LabelWrapper = () => <Label count={counter.value} />;
export default LabelWrapper;
