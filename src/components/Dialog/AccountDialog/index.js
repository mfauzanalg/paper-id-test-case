import FormInput from '../../FormInput';
import Button from '../../Button';
import './index.scss';
import moment from 'moment';

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

export const accountDialogView = (instance) => {
  return (
    <div className="account-dialog-content-view">
      <div className="account">
        <label>Account Name</label>
        <div className="user-info">{instance.name}</div>
        <label>Description</label>
        <div className="user-info">{instance.Description}</div>
        <label>Type</label>
        <div className="user-info">{instance.type}</div>
        <label>Created At</label>
        <div className="user-info">
          {moment(instance.created_at).format('DD MMMM YYYY')}
        </div>
      </div>
    </div>
  );
};
