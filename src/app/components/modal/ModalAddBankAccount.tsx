import { useI18n } from '@/locales/client';
import useModalAddBankAccountStore from '@/store/modalAddBankAccount.store';
import { Modal } from 'react-bootstrap';

function ModalAddBankAccount() {
  const t = useI18n();
  const { isOpen, onClose } = useModalAddBankAccountStore();

  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      size="lg"
      centered
    >
      <Modal.Body className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content border-0">
          <div className="modal-body p-4 ">
            <div className="d-flex justify-content-between px-3">
              <p className="color-dark text-extraBold Mulish mb-0">
                {t('profile.uploadProvePayment')}
              </p>
              <button
                type="button"
                className="btn-close btn-nohover"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="p-3">
              <form>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <label className="text-xs color-dark">
                      {t('profile.bank')}
                    </label>
                    <select
                      className="form-select rounded-0"
                      aria-label="bank"
                    >
                      <option selected></option>
                      <option value="1">Bank 1</option>
                      <option value="2">Bank 2</option>
                      <option value="3">Bank 3</option>
                    </select>
                  </div>
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <label className="text-xs color-dark">
                      {t('profile.accountNumber')}
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      placeholder=""
                      id=" name"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-xs color-dark">
                      {t('profile.accountName')}
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      placeholder=""
                      id=" name"
                    />
                  </div>
                </div>
              </form>
              <button
                className="btn btn-secondary w-100"
                type="button"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAddBankAccount;
