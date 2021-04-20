import FormInput from '../../FormInput';
import Button from '../../Button';
import Select from '../../Select';

const financeDialog = () => {
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

export default financeDialog;
