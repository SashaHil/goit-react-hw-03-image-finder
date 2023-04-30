import PropTypes from 'prop-types';
import { Header, Form, Button, Input } from './Searchbar.styled';
import { Component } from 'react';
import { GrSearch } from 'react-icons/gr';
import { toast } from 'react-toastify';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  handleSearch = e => {
    this.setState({ value: e.currentTarget.value });
  };

  handleSumbmit = e => {
    const { value } = this.state;
    e.preventDefault();

    if (value === '') {
      return toast.error('Type something');
    }
    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <Header>
        <Form onSubmit={this.handleSumbmit}>
          <Button type="submit">
            <GrSearch size="26" />
          </Button>

          <Input
            onChange={this.handleSearch}
            value={value}
            type="text"
            name="search"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
