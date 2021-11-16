import React from 'react';
import Footer from '../Footer/Footer';
import {
  ContactSection,
  Title,
  Span,
  Form,
  InputText,
  InputSubject,
  InputEmail,
  InputSubmit,
  TextArea,
  FormInput,
} from './ContctStyle';

const Contact = () => {
  return (
    <>
      <ContactSection>
        <div className='container'>
          <Title>
            <Span>Drop </Span>Me A line
          </Title>
          <Form action=''>
            <FormInput>
              <InputText type='text' placeholder='Your Name' />
              <InputEmail type='email' placeholder='Your Email' />
            </FormInput>
            <InputSubject
              type='text'
              className='sub'
              placeholder='Your Subject'
            />
            <TextArea cols='30' rows='10' placeholder='Your Message'></TextArea>
            <InputSubmit type='submit' value='Send Message' />
          </Form>
        </div>
      </ContactSection>
      <Footer />
    </>
  );
};

export default Contact;
