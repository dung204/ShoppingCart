import { ChangeEventHandler } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

type InputFieldProps = {
  label: string;
  inputType?: string;
  value?: string;
  onInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

function InputField({
  label,
  inputType,
  value,
  onInputChange,
}: InputFieldProps) {
  return (
    <Row className='mb-5'>
      <Col xs={4} className='text-muted text-end'>
        <span className='align-middle'>{label}</span>
      </Col>
      <Col xs={6}>
        <Form.Control
          type={inputType}
          className='w-100 align-middle'
          value={value}
          onChange={onInputChange}
        />
      </Col>
    </Row>
  );
}

export default InputField;
