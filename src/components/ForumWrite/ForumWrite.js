import React from 'react';
import InputWithLabel from '../common/InputWithLabel';
import TextArea from '../common/TextArea';
import useInput from '../../hooks/useInput'
import {Form, } from './styles'
import Button from '../common/Button';
const ForumWrite = () => {
  const [title, onChangeTitle] = useInput('');
  const [contentText, onChangeContent] = useInput('');
  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Form>
      <InputWithLabel label="제목" value={title} onChange={onChangeTitle}/>
      <TextArea value={contentText} onChange={onChangeContent}/>
      <Button type="button" size="large" onClick={onSubmit}>완료</Button>
    </Form>
  );
}

export default ForumWrite;
