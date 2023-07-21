import { PtgButton } from '@ptg-ui/web-components-react';

function Buttons() {
  return (
    <div className="buttons container">
      <h3 className="title-align">Buttons</h3>
      <div className="rowList">
        <PtgButton text="Primary" appearance="primary"></PtgButton>
        <PtgButton text="Success" appearance="success"></PtgButton>
        <PtgButton text="Secondary" appearance="secondary"></PtgButton>
        <PtgButton text="Danger" appearance="danger"></PtgButton>
        <PtgButton text="Warning" appearance="warning"></PtgButton>
        <PtgButton text="Info" appearance="info"></PtgButton>
        <PtgButton text="Light" appearance="light"></PtgButton>
        <PtgButton text="Dark" appearance="dark"></PtgButton>
      </div>
    </div>
  );
}

export default Buttons;
