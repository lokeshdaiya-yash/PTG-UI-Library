import { PtgSpinner } from '@ptg-ui/web-components-react';

function Loading() {
  return (
    <div class="container">
      <h3 className="title-align">Loading</h3>
      <div class="row">
        <PtgSpinner appearance="primary"></PtgSpinner>
        <PtgSpinner appearance="secondary"></PtgSpinner>
        <PtgSpinner appearance="info"></PtgSpinner>
        <PtgSpinner appearance="warning"></PtgSpinner>
        <PtgSpinner appearance="danger"></PtgSpinner>
        <PtgSpinner appearance="success"></PtgSpinner>
      </div>
    </div>
  );
}
export default Loading;
