import { dbService } from 'fBase';
import React, { useEffect, useState } from 'react';

export default ({ userObj }) => {
  const [yweet, setYweet] = useState('');
  const [yweets, setYweets] = useState([]);

  const getYweets = async () => {
    const dbYweets = await dbService.collection('yweets').get();
    dbYweets.forEach((document) => {
      const yweetObj = {
        ...document.data(),
        id: document.id,
      };
      setYweets((prev) => [yweetObj, ...prev]);
    });
    // console.log('dbYweets >>>>', dbYweets);
  };

  useEffect(() => {
    getYweets();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection('yweets').add({
      text: yweet,
      createdAt: Date.now(),
    });
    setYweet('');
  };

  const onChange = (e) => {
    const { target: { value } } = e;
    console.log(e.target.value);
    setYweet(value);
  };
  console.log(yweets);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={yweet} onChange={onChange} type="text" placeholder="What`s on your mind?" maxLength={120} />
        <input type="submit" value="Yweet" />
      </form>
      {yweets.map((comment) => (
        <div key={comment.id}>
          <h4>
            {comment.yweet}
          </h4>
        </div>
      ))}
    </div>
  );
};
