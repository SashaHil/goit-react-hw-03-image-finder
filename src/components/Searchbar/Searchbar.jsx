import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Header, Form, Button, Input } from './Searchbar.styled';
import { GrSearch } from 'react-icons/gr';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ value: '' }} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Header>
          <Form>
            <Button type="submit">
              <GrSearch size="26" />
            </Button>

            <Input
              type="text"
              name="value"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={values.value}
              onChange={handleChange}
            />
          </Form>
        </Header>
      )}
    </Formik>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
