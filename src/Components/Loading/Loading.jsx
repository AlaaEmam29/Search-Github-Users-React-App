import * as React from 'react';
import { Watch } from 'react-loader-spinner'



export default function Loading() {


    return (
        <div className='loader'>
            <Watch
  height="200"
  width="200"
  radius="48"
  color="#00BFFF"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
 
  visible={true}
/>;
        </div>)
}