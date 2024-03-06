'use client';

// React
import { useState } from 'react';

// Modal Store
import useModalOtpStore from '@/store/modalOtp.store';

// Components
import { Modal } from 'react-bootstrap';
import OtpInput from 'react-otp-input';

function AuthModalOtp() {
  const { isOpen, onClose } = useModalOtpStore();

  const [otp, setOtp] = useState('');

  return (
    <Modal
      show={isOpen}
      centered
    >
      <Modal.Body>
        <div className="p-5">
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn-close btn-nohover"
              onClick={onClose}
            />
          </div>

          <h5 className="color-dark text-extraBold Mulish mb-4">
            Enter OTP Code
          </h5>
          <p className="text-xs">
            Please enter the verification code that we sent to{' '}
            <strong className="color-dark">08******156</strong> to validate your
            account.
          </p>

          <div className="form-group position-relative mb-3">
            <div className="passcode-wrapper">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => <input {...props} />}
              />
            </div>
          </div>

          <p className="color-dark text-xs text-center mb-4">
            Didn’t receive the code?{' '}
            <a className="color-red text-semiBold">Resend</a>
          </p>

          <a
            href="/login"
            className="btn btn-secondary w-100"
            type="button"
          >
            Verify
          </a>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AuthModalOtp;
