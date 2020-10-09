import { helper } from "@ember/component/helper";
import arrayToSentence from "array-to-sentence";

export default helper(function toSentence([arr] /*, hash*/) {
  return arrayToSentence(arr);
});
