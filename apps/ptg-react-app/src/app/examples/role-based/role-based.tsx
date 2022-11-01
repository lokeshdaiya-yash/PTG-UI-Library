/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example showing how to use the role based method.
 *
 */
import './role-based.scss';
import { useState } from 'react';
import { PtgUiButton } from '@ptg-ui/react';
import { authClass } from '../../auth/services/auth.service';
import { Role } from './role';
import { useTranslation } from 'react-i18next';
/* eslint-disable-next-line */
export interface RoleBasedProps {}

export function RoleBased(props: RoleBasedProps) {
  const { t } = useTranslation();
  //const [flag, setFlag] = useState(authClass.getRole() == 'admin' ? true : false);
  const flag = Role();
  return (
    <>
      <h4 className="mb-5">{t('ROLE_BASED_EXAMPLE_TEXT')}</h4>
      {flag && (
        <>
          <div className="row align-items-center mb-2">
            <div className=" col-lg-4 col-md-6 col-sm-6 col-xs-6">
              <h6 className="mt-2">
                {t('BUTTON_VISIBLE_FOR_ADMIN_ROLE_TEXT')}
              </h6>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
              <PtgUiButton className="w-100">
                <i className="fa-solid fa-user-plus m-2"></i>
                {t('ADD_USER_TEXT')}
              </PtgUiButton>
            </div>
          </div>
          <div className="row align-items-center mb-2">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
              <h6>{t('BUTTON_VISIBLE_FOR_ADMIN_ROLE_TEXT')}</h6>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
              <PtgUiButton className="w-100">
                <i className="fa-solid fa-user-pen m-2"></i>
                {t('EDIT_USER_TEXT')}
              </PtgUiButton>
            </div>
          </div>
        </>
      )}
      <div className="row align-items-center mb-2">
        <div className=" col-lg-4 col-md-6 col-sm-6 col-xs-6">
          <h6>{t('BUTTON_VISIBLE_FOR_EVERYONE_TEXT')}</h6>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
          <PtgUiButton className="w-100">
            <i className="fa-solid fa-users m-2"></i>
            {t('VIEW_USER_TEXT')}
          </PtgUiButton>
        </div>
      </div>
    </>
  );
}

export default RoleBased;
