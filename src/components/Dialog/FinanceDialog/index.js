import FormInput from '../../FormInput';
import Button from '../../Button';
import Select from '../../Select';
import './index.scss';
import moment from 'moment';

export const financeDialog = () => {
  return (
    <div className="Finance-dialog-content">
      <FormInput
        label="Finance Name"
        placeholder="Inout your finance name"
        type="text"
        inputClass="dialog"
      />
      <Select
        label="Finance Account"
        placeholder="select finance account"
        type="text"
        inputClass="dialog"
      />
      <FormInput
        label="Amount"
        placeholder="Amount"
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

export const financeDialogView = (instance) => {
  return (
    <div className="finance-dialog-content-view">
      <div className="finance">
        <label>Title</label>
        <div className="info">{instance.title}</div>
        <label>Description</label>
        <div className="info">{instance.description}</div>
        <label>Transaction Date</label>
        <div className="info">
          {moment(instance.created_at).format('DD MMMM YYYY')}
        </div>
        <label>Amount</label>
        <div className="info">{instance.debit_amount}</div>
        <label>Finance Account name</label>
        <div className="info">{instance.finance_account_name}</div>
        <label>Finance Account Type</label>
        <div className="info">{instance.finance_account_type}</div>
      </div>
    </div>
  );
};
