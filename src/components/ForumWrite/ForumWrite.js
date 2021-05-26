import React from 'react';
import InputWithLabel from '../common/InputWithLabel';
import TextArea from '../common/TextArea';
import useInput from '../../hooks/useInput';
import { Form } from './styles';
import Button from '../common/Button';
import { useDispatch } from 'react-redux';
import { forumsWriteRequest } from '../../actions';
import shortId from 'shortid';
const ForumWrite = () => {
  const dispatch = useDispatch();
  const [title, onChangeTitle] = useInput('');
  const [contentText, onChangeContent] = useInput('');
  console.log(title);
  console.log(contentText);
  const onSubmit = (e) => {
    e.preventDefault();
    if (title === '') return;
    if (contentText === '') return;
    const data = {
      id: shortId.generate(),
      title: title,
      content: contentText,
      isLiked: false,
      tag: { color: '#ff1357', name: 'bug' },
    };
    dispatch(forumsWriteRequest(data));
  };
  return (
    <Form>
      <InputWithLabel label="포럼작성" value={title} onChange={onChangeTitle} />
      <TextArea value={contentText} onChange={onChangeContent} />
      <Button type="button" size="large" onClick={onSubmit}>
        완료
      </Button>
    </Form>
  );
};

export default ForumWrite;
