import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { Typography } from '@mui/material';
import sampleImageContents from '../jsonDataset/sampleDetailImageContents.json';

const Wrapper = styled.div``;

function ImageDetailPage() {
  const { imageId } = useParams();
  const [image, setImage] = useState([]);
  useEffect(() => {
    // axios
    //   .post('https://bitwise.ljlee37.com:8080/imageDetail', {
    //     user_id: 'test',
    //     imageId,
    //   })
    //   .then((response) => {
    //     const out = response.data.queryResult.map((img) => ({
    //       key: img.hash,
    //       alt: decodeURIComponent(img.name),
    //       url: img.path,
    //       date: img.upload_date_time,
    //     }));
    //     setImage(() => out);
    //   })
    //   .catch(() => {
    //     setImage(() => {
    //       const filtered = sampleImageContents.filter(
    //         ({ key }) => key === imageId,
    //       );
    //       return filtered.map((content) => ({
    //         ...content,
    //         url: `${process.env.PUBLIC_URL}${content.url}`,
    //       }));
    //     });
    //   });
    setImage(() => {
      const filtered = sampleImageContents.filter(({ key }) => key === imageId);
      return filtered.map((content) => ({
        ...content,
        url: `${process.env.PUBLIC_URL}${content.url}`,
      }));
    });
  }, []);

  return (
    <Wrapper>
      <Typography variant="h5" gutterBottom>
        이미지 상세 페이지
      </Typography>
      {image.map((img) => (
        <div>
          <Typography>
            이름:
            {img.alt}
          </Typography>
          <Typography>
            날짜:
            {new Date(img.date).toLocaleString()}
          </Typography>
          <img
            style={{
              width: '100%',
              height: (window.innerHeight || document.body.clientHeight) * 0.8,
              objectFit: 'scale-down',
            }}
            key={img.key}
            src={img.url}
            alt={img.alt}
          />
        </div>
      ))}
    </Wrapper>
  );
}

export default ImageDetailPage;
