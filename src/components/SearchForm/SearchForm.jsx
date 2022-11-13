// import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Button } from './SearcForm.styled';

export const SearchForm = ({ onSearch }) => {
    
  // const [query, setQuery] = useState('');

  // const onChangeValue = e => {
  //   const { value } = e.target;
  //   setQuery(value);
  // };

  const handleSubmit = e => {
      
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.query.value
    console.log(value);

    if (value === '') {
     alert('Enter the film title');
    };
    
    onSearch(value);
    // setQuery('');

}
   
    

    return (
    <>
      < Form onSubmit={handleSubmit}>
        <Input
          // onChange={onChangeValue}
          type="text"
          name="query"
          // value={query}
          autoComplete="off"
        />
          <Button type="submit">Search</Button>
      </ Form>
    </>
  );


};

 


SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};



 