import FormInput from '../../FormInput';
import Button from '../../Button';
import './index.scss';

export const accountDialog = () => {
  return (
    <div className="account-dialog-content">
      <FormInput
        label="Account Name"
        placeholder="e.g. cash, bank, etc"
        type="text"
        inputClass="dialog"
      />
      <FormInput
        label="Type"
        placeholder="e.g. cash, bank, etc"
        type="text"
        inputClass="dialog"
      />
      <FormInput
        label="Description"
        placeholder="Description"
        type="text"
        inputClass="dialog"
      />
      <div className="button-container">
        <div className="button">
          <Button title="Simpan" color="green" addClass="form-button" />
        </div>
        <div className="button">
          <Button title="Batal" color="empty" addClass="form-button" />
        </div>
      </div>
    </div>
  );
};

export const accountDialogView = () => {
  return (
    <div className="account-dialog-content-view">
      <div className="account">
        <label>User Name</label>
        <div className="user-info">mfauzanalg</div>
        <label>Name</label>
        <div className="user-info">Muhammad Fauzan Al-Ghifari</div>
        <label>Last Login</label>
        <div className="user-info">26 Maret 2000</div>
      </div>
    </div>
  );
};
