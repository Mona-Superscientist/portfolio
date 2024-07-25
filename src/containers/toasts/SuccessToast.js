import React from "react";
import { Toast }  from '../../components'
import { ReactComponent as SuccessSVG } from '../../assets/images/toastIcons/success.svg'

const SuccessToast = ({ message, onClose }) => (
  <Toast
    icon={<SuccessSVG />}
    bk_color="#edfbd8"
    border_color="#84d65a"
    msg_color="#2b641e"
    message={message}
    onClose={onClose}
  />
);

export default SuccessToast
