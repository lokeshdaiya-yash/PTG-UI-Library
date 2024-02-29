import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { PtgUiButton } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';

export function AggridButton(props: ICellRendererParams) {
  const { t } = useTranslation();
  const buttonClicked = () => {
    alert(`${props.data.athlete}'s row selected`)
  };

  return (
    <div className='m-4'>
      <PtgUiButton
      className="btn-sm"
      onClick={buttonClicked}>
      {t('CLICK_HERE')}
      </PtgUiButton>
    </div>
  );
};
export default AggridButton;